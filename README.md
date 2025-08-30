🧬 Rare Disease Predictor

🚀 An AI-powered web application that predicts rare diseases from uploaded medical reports (PDFs).
It uses Natural Language Processing (NLP) with a Logistic Regression model + TF-IDF vectorizer, served via FastAPI, and provides an interactive React (Vite + Tailwind) frontend.

✨ Features

📄 PDF Upload → Extracts medical text automatically.

🤖 AI Prediction → Uses trained Logistic Regression + TF-IDF.

📊 Disease Metadata → Maps predictions to dataset info (disease, variant, onset age, etc.).

🕑 History Tracking → Keeps a record of uploaded files with timestamps.

🎨 Modern Frontend → React + Tailwind + ShadCN UI components.

🛠 Tech Stack
Backend

FastAPI

PyMuPDF (fitz) → PDF text extraction

Scikit-learn (joblib) → Logistic Regression + TF-IDF Vectorizer

Pandas → Metadata lookup

Frontend

React (Vite)

TailwindCSS

ShadCN UI

📂 Project Structure
RARE_DISEASE_PREDICTOR/
│── backend/
│   ├── data/
│   │   ├── rare_diseases_dataset.csv   # Metadata for predictions
│   │   ├── patients.csv                # Example dataset
│   ├── models/
│   │   ├── logistic_model.pkl          # Trained Logistic Regression model
│   │   ├── tfidf_vectorizer.pkl        # Saved TF-IDF vectorizer
│   ├── app.py                          # FastAPI backend
│   ├── requirements.txt                # Python dependencies
│
│── frontend/
│   ├── src/
│   │   ├── components/                 # File upload, results, history table
│   │   ├── pages/                      # Home, Predict, Dashboard, About
│   │   ├── App.jsx
│   │   ├── main.jsx
│   ├── package.json
│   ├── vite.config.js
│
│── uploads/                            # Stores uploaded reports
│── README.md                           # Documentation

⚙️ Installation
1️⃣ Clone the repository
git clone https://github.com/yourusername/RARE_DISEASE_PREDICTOR.git
cd RARE_DISEASE_PREDICTOR

2️⃣ Backend Setup
cd backend
python -m venv venv
source venv/bin/activate   # (Windows: venv\Scripts\activate)
pip install -r requirements.txt


Run the backend:

uvicorn app:app --reload


👉 API will run at: http://127.0.0.1:8000

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


👉 Frontend will run at: http://localhost:5173

📊 Usage

Start the backend (uvicorn app:app --reload).

Start the frontend (npm run dev).

Open the app → http://localhost:5173/.

Upload a medical report (PDF).

Get predictions with full disease details.

Check upload history under Dashboard.

🧠 Model Training

The Logistic Regression + TF-IDF model was trained separately and saved as:

logistic_model.pkl

tfidf_vectorizer.pkl

To retrain:

Prepare a dataset of medical reports.

Train Logistic Regression with TF-IDF features.

Save using joblib.dump().

📷 Screenshots

Prediction Page



Dashboard
(Add screenshot of upload history table)

🚀 Future Enhancements

✅ Add deep learning model (CNN/LSTM) for richer text + image predictions.

✅ Show confidence scores for predictions.

✅ User authentication + role-based access.

✅ Cloud deployment (AWS / GCP / Azure).

🤝 Contributing

Pull requests are welcome! Please open an issue first for major changes.
