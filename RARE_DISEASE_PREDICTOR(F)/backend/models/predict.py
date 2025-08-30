# import sys
# import joblib

# # Load the saved tuple (model, tfidf, label_encoder)
# model, tfidf, label_encoder = joblib.load("./cnn_model.pth")

# def predict_disease(text_input: str):
#     # Transform input using TF-IDF
#     X_input = tfidf.transform([text_input])

#     # Predict
#     y_pred = model.predict(X_input)

#     # Decode label
#     predicted_disease = label_encoder.inverse_transform(y_pred)[0]
#     return predicted_disease


# if __name__ == "__main__":
#     if len(sys.argv) < 2:
#         print("Usage: python predict.py 'symptoms or description text here'")
#         sys.exit(1)

#     input_text = sys.argv[1]
#     result = predict_disease(input_text)
#     print(f"Predicted Disease: {result}")
# import joblib
# import os
# import json

# # -----------------------------
# # Paths
# # -----------------------------
# MODEL_PATH = os.path.join("backend", "models", "logistic_model.pkl")
# VECTORIZER_PATH = os.path.join("backend", "models", "tfidf_vectorizer.pkl")
# LABELS_PATH = os.path.join("backend", "model", "labels.json")

# # -----------------------------
# # Load Model + Vectorizer + Labels
# # -----------------------------
# model = joblib.load(MODEL_PATH)
# vectorizer = joblib.load(VECTORIZER_PATH)

# with open(LABELS_PATH, "r") as f:
#     labels = json.load(f)

# # -----------------------------
# # Prediction Function
# # -----------------------------
# def predict_text(text: str) -> str:
#     """
#     Predict the disease from input text using TF-IDF + Logistic Regression.
#     """
#     features = vectorizer.transform([text])
#     prediction = model.predict(features)[0]
#     prediction_label = labels.get(str(prediction), str(prediction))
#     return prediction_label


# # -----------------------------
# # Example usage
# # -----------------------------
# if __name__ == "__main__":
#     sample_text = "Patient shows symptoms of progressive muscle weakness and fatigue."
#     result = predict_text(sample_text)
#     print("Prediction:", result)
# predict.py
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
import uvicorn
import os
import joblib
import json

# For PDF reading
import PyPDF2

# Initialize FastAPI
app = FastAPI()

# Load model and labels
MODEL_PATH = "models/model.pkl"
LABELS_PATH = "models/labels.json"

if not os.path.exists(MODEL_PATH) or not os.path.exists(LABELS_PATH):
    raise FileNotFoundError("Model or labels.json not found in models/ folder")

model = joblib.load(MODEL_PATH)

with open(LABELS_PATH, "r") as f:
    labels = json.load(f)  # e.g., { "0": "DiseaseA", "1": "DiseaseB" }

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        # Read file content
        content = await file.read()

        text = ""
        if file.filename.endswith(".txt"):
            text = content.decode("utf-8")
        elif file.filename.endswith(".pdf"):
            # Extract text from PDF
            from io import BytesIO
            pdf_reader = PyPDF2.PdfReader(BytesIO(content))
            for page in pdf_reader.pages:
                text += page.extract_text() + "\n"
        else:
            return JSONResponse({"error": "Unsupported file type"}, status_code=400)

        if not text.strip():
            return JSONResponse({"error": "File is empty"}, status_code=400)

        # Preprocess text as your model expects
        # (Example: vectorizer loaded from model.pkl if combined with pipeline)
        prediction_index = model.predict([text])[0]
        prediction_label = labels.get(str(prediction_index), "Unknown disease")

        return {"prediction": prediction_label}

    except Exception as e:
        print("Error:", e)
        return JSONResponse({"error": "Prediction failed"}, status_code=500)


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
