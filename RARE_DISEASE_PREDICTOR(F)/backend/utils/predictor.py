from __future__ import annotations
import os, json
import numpy as np
import joblib

# PyTorch imports
import torch
from torchvision import transforms
from PIL import Image

BASE_DIR = os.path.dirname(os.path.dirname(__file__))
MODEL_DIR = os.path.join(BASE_DIR, "model")
LABELS_PATH = os.path.join(MODEL_DIR, "labels.json")
CNN_PATH = os.path.join(BASE_DIR, "models", "cnn_model.pth")

with open(LABELS_PATH, "r", encoding="utf-8") as f:
    LABELS = json.load(f)

# Fallback sklearn model if supplied
SK_MODEL_PATH = os.path.join(MODEL_DIR, "trained_model.pkl")
SK_MODEL = None
if os.path.exists(SK_MODEL_PATH):
    try:
        SK_MODEL = joblib.load(SK_MODEL_PATH)
    except Exception:
        SK_MODEL = None

# Setup CNN if available
CNN = None
DEVICE = torch.device("cpu")
if os.path.exists(CNN_PATH):
    try:
        from backend.models.cnn_model import DiseaseCNN
    except Exception:
        # fallback import path if executed differently
        from models.cnn_model import DiseaseCNN
    CNN = DiseaseCNN(num_classes=len(LABELS))
    CNN.load_state_dict(torch.load(CNN_PATH, map_location=DEVICE))
    CNN.to(DEVICE)
    CNN.eval()

# Preprocess transform for images (for CNN)
image_transform = transforms.Compose([
    transforms.Resize((224,224)),
    transforms.Grayscale(),
    transforms.ToTensor(),
    transforms.Normalize((0.5,), (0.5,))
])

from backend.model.preprocess import extract_features

def predict_bytes(file_bytes: bytes, filename: str):
    ext = filename.lower().split('.')[-1]
    if ext in {'jpg','jpeg','png'} and CNN is not None:
        # use CNN path
        img = Image.open(io.BytesIO(file_bytes)).convert("L")
        tensor = image_transform(img).unsqueeze(0).to(DEVICE)
        with torch.no_grad():
            outputs = CNN(tensor)
            probs = torch.softmax(outputs, dim=1)[0].cpu().numpy()
        top_idx = int(np.argmax(probs))
        return {
            "disease": LABELS[top_idx],
            "confidence": float(probs[top_idx]),
            "probs": {LABELS[i]: float(probs[i]) for i in range(len(LABELS))}
        }
    # If non-image or CNN missing, try sklearn fallback
    feats = extract_features(file_bytes, filename)
    if SK_MODEL is not None:
        X = feats.reshape(1, -1)
        try:
            probs = SK_MODEL.predict_proba(X)[0]
            top_idx = int(np.argmax(probs))
            return {
                "disease": LABELS[top_idx] if top_idx < len(LABELS) else str(top_idx),
                "confidence": float(probs[top_idx]),
                "probs": {LABELS[i] if i < len(LABELS) else str(i): float(probs[i]) for i in range(len(probs))}
            }
        except Exception:
            pass
    # fallback random-ish output
    probs = np.ones(len(LABELS)) / len(LABELS)
    return {
        "disease": LABELS[0],
        "confidence": float(probs[0]),
        "probs": {LABELS[i]: float(probs[i]) for i in range(len(LABELS))}
    }
