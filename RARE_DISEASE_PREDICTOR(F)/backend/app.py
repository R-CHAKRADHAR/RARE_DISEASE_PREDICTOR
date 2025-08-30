# import os
# from fastapi import FastAPI, UploadFile, File
# from fastapi.responses import JSONResponse
# from PIL import Image
# import pandas as pd
# import torch
# import torch.nn as nn
# from torchvision import transforms

# # -----------------------------
# # Model Definition (must match train.py exactly)
# # -----------------------------
# class SimpleCNN(nn.Module):
#     def __init__(self, num_classes=2):
#         super(SimpleCNN, self).__init__()
#         self.features = nn.Sequential(
#             nn.Conv2d(3, 32, kernel_size=3, stride=1, padding=1),
#             nn.ReLU(),
#             nn.MaxPool2d(kernel_size=2),
#             nn.Conv2d(32, 64, kernel_size=3, stride=1, padding=1),
#             nn.ReLU(),
#             nn.MaxPool2d(kernel_size=2),
#         )
#         self.classifier = nn.Sequential(
#             nn.Flatten(),
#             nn.Linear(64 * 56 * 56, 128),
#             nn.ReLU(),
#             nn.Dropout(0.4),
#             nn.Linear(128, num_classes)
#         )

#     def forward(self, x):
#         x = self.features(x)
#         x = self.classifier(x)
#         return x

# # -----------------------------
# # Load Model
# # -----------------------------
# MODEL_PATH = os.path.join("backend", "models", "cnn_model.pth")
# device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# model = SimpleCNN(num_classes=2).to(device)
# model.load_state_dict(torch.load(MODEL_PATH, map_location=device))
# model.eval()

# # -----------------------------
# # FastAPI App
# # -----------------------------
# app = FastAPI(title="Rare Disease Predictor")

# # Image preprocessing (same as training)
# transform = transforms.Compose([
#     transforms.Resize((224, 224)),
#     transforms.ToTensor(),
#     transforms.Normalize(mean=[0.485, 0.456, 0.406],
#                          std=[0.229, 0.224, 0.225])
# ])

# # -----------------------------
# # Helper function for single image
# # -----------------------------
# def predict_image(img_path):
#     image = Image.open(img_path).convert("RGB")
#     image = transform(image).unsqueeze(0).to(device)
#     with torch.no_grad():
#         outputs = model(image)
#         _, predicted = torch.max(outputs, 1)
#     return int(predicted.item())

# # -----------------------------
# # Endpoint for single image
# # -----------------------------
# @app.post("/predict_image")
# async def predict_single(file: UploadFile = File(...)):
#     try:
#         image = Image.open(file.file).convert("RGB")
#         image = transform(image).unsqueeze(0).to(device)
#         with torch.no_grad():
#             outputs = model(image)
#             _, predicted = torch.max(outputs, 1)
#             label = int(predicted.item())
#         return JSONResponse(content={"prediction": label})
#     except Exception as e:
#         return JSONResponse(content={"error": str(e)}, status_code=500)

# # -----------------------------
# # Endpoint for CSV batch prediction
# # -----------------------------
# @app.post("/predict_csv")
# async def predict_csv(file: UploadFile = File(...)):
#     try:
#         # Save uploaded CSV temporarily
#         csv_path = os.path.join("backend", "data", "temp_upload.csv")
#         with open(csv_path, "wb") as f:
#             f.write(await file.read())

#         df = pd.read_csv(csv_path)
#         results = []

#         for idx, row in df.iterrows():
#             # Assuming CSV has relative paths like in train.csv
#             img_path = os.path.join("backend", row[0])
#             if os.path.exists(img_path):
#                 pred = predict_image(img_path)
#                 results.append({"image": row[0], "prediction": pred})
#             else:
#                 results.append({"image": row[0], "error": "File not found"})

#         return JSONResponse(content={"results": results})

#     except Exception as e:
#         return JSONResponse(content={"error": str(e)}, status_code=500)
# from fastapi import FastAPI, UploadFile, File
# from fastapi.responses import JSONResponse
# from fastapi.middleware.cors import CORSMiddleware
# import joblib
# import os
# import json
# import shutil
# # -----------------------------
# # Paths
# # -----------------------------
# MODEL_PATH = os.path.join("backend", "models", "logistic_model.pkl")
# VECTORIZER_PATH = os.path.join("backend", "models", "tfidf_vectorizer.pkl")
# LABELS_PATH = os.path.join("backend", "models", "labels.json")

# # -----------------------------
# # Load Model + Vectorizer + Labels
# # -----------------------------
# model = joblib.load(MODEL_PATH)
# vectorizer = joblib.load(VECTORIZER_PATH)

# with open(LABELS_PATH, "r") as f:
#     labels = json.load(f)

# # -----------------------------
# # FastAPI app
# # -----------------------------
# app = FastAPI()

# # ✅ Add CORS
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # for all domains, restrict in production
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )
# UPLOAD_FOLDER = "uploads"
# os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# @app.get("/")
# def home():
#     return {"message": "✅ Rare Disease Predictor API is running!"}

# @app.post("/predict")
# async def predict(file: UploadFile = File(...)):
#     try:
#         # Read uploaded file (expects text content)
        
#         content = await file.read()
#         text = content.decode("utf-8")

#         # Transform input with TF-IDF
#         features = vectorizer.transform([text])

#         # Predict with Logistic Regression
#         prediction = model.predict(features)[0]

#         # Get human-readable label
#         prediction_label = labels.get(str(prediction), str(prediction))

#         return JSONResponse(content={
#             "prediction": prediction_label,
#             "raw_class": str(prediction)
#         })

#     except Exception as e:
#         return JSONResponse(content={"error": str(e)}, status_code=500)
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import os
import shutil
import pandas as pd
import joblib
import fitz  # PyMuPDF
from pathlib import Path

# -----------------------------
# Initialize FastAPI
# -----------------------------
app = FastAPI()

# Allow frontend on localhost:3000 (React)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# Folders and files
# -----------------------------
UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

MODEL_PATH = os.path.join("backend", "models", "logistic_model.pkl")
VECTORIZER_PATH = os.path.join("backend", "models", "tfidf_vectorizer.pkl")
DATASET_PATH = os.path.join("backend", "data", "rare_diseases_dataset.csv")

# Load your trained model and vectorizer
model = joblib.load(MODEL_PATH)
vectorizer = joblib.load(VECTORIZER_PATH)

# Load metadata for mapping prediction to full info
df_meta = pd.read_csv(DATASET_PATH)
df_meta["Disease"] = df_meta["Disease"].str.strip()

# -----------------------------
# Function to extract text from PDF
# -----------------------------
def extract_text_from_pdf(file_path):
    """
    Extracts text from a PDF file using PyMuPDF.
    Returns the extracted text as a string.
    """
    text = ""
    try:
        # Open the PDF
        doc = fitz.open(file_path)
        for page in doc:
            # Extract text from each page
            text += page.get_text("text")
        doc.close()
    except Exception as e:
        print(f"Error reading PDF {file_path}: {e}")
        return ""  # Return empty string if PDF can't be read
    return text

# -----------------------------
# /predict endpoint
# -----------------------------
@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        # Save uploaded PDF
        file_path = os.path.join(UPLOAD_FOLDER, str(file.filename))
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        # Extract text from PDF
        report_text = extract_text_from_pdf(file_path)

        if not report_text.strip():
            return {"error": "No readable text found in PDF"}

        # Vectorize and predict
        X = vectorizer.transform([report_text])
        predicted_idx = model.predict(X)[0]

        # Map to full disease info
        disease_info = df_meta[df_meta["Disease"] == predicted_idx].to_dict(orient="records")
        if not disease_info:
            disease_info = [{"Disease": predicted_idx, "Variant": "N/A", "Age_of_Onset": "N/A"}]

        return {"prediction": disease_info[0]}

    except Exception as e:
        return {"error": str(e)}

import time
UPLOAD_DIR= Path("uploads")
@app.get("/history")
def get_history():
    history = []
    # iterate through files inside uploads
    for i, file in enumerate(sorted(UPLOAD_DIR.iterdir(), key=os.path.getmtime, reverse=True)):
        history.append({
            "id": i + 1,
            "file": file.name,
            "result": "Pending",   # will replace later with actual model result
            "confidence": "—",     # placeholder
            "time": time.ctime(os.path.getmtime(file))  # readable timestamp
        })
    return history