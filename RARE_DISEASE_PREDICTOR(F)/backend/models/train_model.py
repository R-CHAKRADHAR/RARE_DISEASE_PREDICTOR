# import pandas as pd
# import numpy as np
# from sklearn.model_selection import StratifiedKFold, cross_val_score
# from sklearn.feature_extraction.text import TfidfVectorizer
# from sklearn.linear_model import LogisticRegression
# from sklearn.preprocessing import LabelEncoder
# import joblib

# # --------------------------
# # 1. Load Dataset
# # --------------------------
# df = pd.read_csv("../data/rare_diseases_dataset.csv")

# # Symptoms / Variant column = features
# X = df["Variant"].astype(str)
# y = df["Disease"]

# # --------------------------
# # 2. Encode Labels
# # --------------------------
# le = LabelEncoder()
# y_encoded = le.fit_transform(y)

# # --------------------------
# # 3. TF-IDF Vectorizer
# # --------------------------
# tfidf = TfidfVectorizer(max_features=5000)
# X_tfidf = tfidf.fit_transform(X)

# # --------------------------
# # 4. Define Model
# # --------------------------
# log_reg = LogisticRegression(max_iter=1000, random_state=42)

# # --------------------------
# # 5. Stratified K-Fold CV
# # --------------------------
# from sklearn.model_selection import StratifiedKFold, cross_val_score
# skf = StratifiedKFold(n_splits=2, shuffle=True, random_state=42)

# log_scores = cross_val_score(log_reg, X_tfidf, y_encoded, cv=skf, scoring="accuracy")

# # --------------------------
# # 6. Train Final Model
# # --------------------------
# log_reg.fit(X_tfidf, y_encoded)

# # --------------------------
# # 7. Save everything in cnn_model.pth
# # --------------------------
# joblib.dump(
#     {"model": log_reg, "tfidf": tfidf, "label_encoder": le},
#     "cnn_model.pth"
# )

# # --------------------------
# # 8. Print Results
# # --------------------------
# print("Logistic Regression Accuracies (per fold):", log_scores)
# print("Logistic Regression Mean Accuracy:", np.mean(log_scores))


# # import pandas as pd
# # import numpy as np
# # from sklearn.model_selection import StratifiedKFold, cross_val_score
# # from sklearn.feature_extraction.text import TfidfVectorizer
# # from sklearn.linear_model import LogisticRegression
# # from sklearn.ensemble import RandomForestClassifier
# # from sklearn.preprocessing import LabelEncoder
# # import joblib
# # # --------------------------
# # # 1. Load Dataset
# # # --------------------------
# # # Replace 'your_file.csv' and column names accordingly
# # df = pd.read_csv("rare_diseases_dataset.csv")

# # # Example: Symptoms column = text, Disease column = label
# # X = df["Variant"].astype(str)   # text features
# # y = df["Disease"]                # labels

# # # --------------------------
# # # 2. Encode Labels
# # # --------------------------
# # le = LabelEncoder()
# # y_encoded = le.fit_transform(y)

# # # --------------------------
# # # 3. TF-IDF Vectorizer
# # # --------------------------
# # tfidf = TfidfVectorizer(max_features=5000)
# # X_tfidf = tfidf.fit_transform(X)

# # # --------------------------
# # # 4. Define Models
# # # --------------------------
# # log_reg = LogisticRegression(max_iter=1000, random_state=42)


# # # --------------------------
# # # 5. Stratified K-Fold CV
# # # --------------------------
# # skf = StratifiedKFold(n_splits=2, shuffle=True, random_state=42)

# # # Logistic Regression CV
# # log_scores = cross_val_score(log_reg, X_tfidf, y_encoded, cv=skf, scoring="accuracy")

# # #Save the trained model
# # joblib.dump(log_reg, "cnn_model.pth")

# # # --------------------------
# # # 6. Print Results
# # # --------------------------
# # print("Logistic Regression Accuracies (per fold):", log_scores)
# # print("Logistic Regression Mean Accuracy:", np.mean(log_scores))


# # import os
# # import joblib
# # import numpy as np
# # import pandas as pd
# # from sklearn.model_selection import train_test_split
# # from sklearn.feature_extraction.text import TfidfVectorizer
# # from sklearn.linear_model import LogisticRegression
# # from tensorflow import keras
# # from tensorflow.keras.models import Sequential
# # from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout
# # from tensorflow.keras.preprocessing.image import ImageDataGenerator, load_img, img_to_array

# # # -----------------------------
# # # PART 1: Text Model (Logistic Regression + TF-IDF)
# # # -----------------------------

# # # Load your synthetic dataset
# # df = pd.read_csv("rare_diseases_dataset.csv")

# # X_text = df["Symptoms"] + " " + df["Description"]
# # y_text = df["Disease"]

# # X_train_text, X_test_text, y_train_text, y_test_text = train_test_split(X_text, y_text, test_size=0.2, random_state=42)

# # # Vectorize text
# # vectorizer = TfidfVectorizer(max_features=5000)
# # X_train_tfidf = vectorizer.fit_transform(X_train_text)
# # X_test_tfidf = vectorizer.transform(X_test_text)

# # # Train Logistic Regression
# # text_model = LogisticRegression(max_iter=1000)
# # text_model.fit(X_train_tfidf, y_train_text)

# # print("Text Model Accuracy:", text_model.score(X_test_tfidf, y_test_text))

# # # Save text model + vectorizer
# # joblib.dump(text_model, "text_model.pkl")
# # joblib.dump(vectorizer, "tfidf_vectorizer.pkl")


# # # -----------------------------
# # # PART 2: Image Model (CNN)
# # # -----------------------------

# # # Assuming your dataset has images in folders: dataset/train/<disease_name>/image.jpg
# # # Example structure:
# # # dataset/
# # #    train/
# # #       RareDisease1/
# # #       RareDisease2/
# # #    test/
# # #       RareDisease1/
# # #       RareDisease2/

# # img_size = (128, 128)

# # datagen = ImageDataGenerator(rescale=1./255, validation_split=0.2)

# # train_gen = datagen.flow_from_directory(
# #     "dataset/train",
# #     target_size=img_size,
# #     batch_size=32,
# #     class_mode="categorical",
# #     subset="training"
# # )

# # val_gen = datagen.flow_from_directory(
# #     "dataset/train",
# #     target_size=img_size,
# #     batch_size=32,
# #     class_mode="categorical",
# #     subset="validation"
# # )

# # # CNN Model
# # image_model = Sequential([
# #     Conv2D(32, (3,3), activation="relu", input_shape=(128,128,3)),
# #     MaxPooling2D((2,2)),
# #     Conv2D(64, (3,3), activation="relu"),
# #     MaxPooling2D((2,2)),
# #     Flatten(),
# #     Dense(128, activation="relu"),
# #     Dropout(0.5),
# #     Dense(train_gen.num_classes, activation="softmax")
# # ])

# # image_model.compile(optimizer="adam", loss="categorical_crossentropy", metrics=["accuracy"])

# # # Train CNN
# # image_model.fit(train_gen, validation_data=val_gen, epochs=10)

# # # Save image model
# # image_model.save("image_model.h5")


# # # -----------------------------
# # # PART 3: Unified Prediction Function
# # # -----------------------------

# # from tensorflow.keras.models import load_model

# # def predict_disease(input_text=None, image_path=None):
# #     if input_text:
# #         # Load text model + vectorizer
# #         model = joblib.load("text_model.pkl")
# #         vectorizer = joblib.load("tfidf_vectorizer.pkl")
# #         X = vectorizer.transform([input_text])
# #         return model.predict(X)[0]

# #     elif image_path:
# #         # Load image model
# #         model = load_model("image_model.h5")
# #         img = load_img(image_path, target_size=img_size)
# #         img_array = img_to_array(img)/255.0
# #         img_array = np.expand_dims(img_array, axis=0)
# #         preds = model.predict(img_array)
# #         class_labels = list(train_gen.class_indices.keys())
# #         return class_labels[np.argmax(preds)]

# #     else:
# #         return "No input provided."


# # # -----------------------------
# # # Example Usage
# # # -----------------------------
# # print(predict_disease(input_text="Patient has muscle weakness and seizures."))
# # print(predict_disease(image_path="dataset/test/RareDisease1/sample.jpg"))

# # import os
# # import numpy as np
# # import pandas as pd
# # from sklearn.feature_extraction.text import TfidfVectorizer
# # from sklearn.linear_model import LogisticRegression
# # from sklearn.pipeline import Pipeline
# # from sklearn.model_selection import train_test_split
# # from sklearn.metrics import classification_report
# # import joblib

# # import tensorflow as tf
# # from tensorflow.keras.models import Sequential
# # from tensorflow.keras.layers import Dense, Conv2D, Flatten, MaxPooling2D
# # from tensorflow.keras.preprocessing.image import ImageDataGenerator, img_to_array, load_img

# # # ----------------------------
# # # 1. TEXT MODEL (Logistic Regression with TF-IDF)
# # # ----------------------------

# # # Load dataset
# # data = pd.read_csv("rare_diseases_dataset.csv")  # CSV must have columns: "text" and "label"

# # X_text = data["Variant"] + " " + data["Severity_Level"]
# # y_text = data["Disease"]

# # # Train-test split
# # X_train_text, X_test_text, y_train_text, y_test_text = train_test_split(
# #     X_text, y_text, test_size=0.2, random_state=42
# # )

# # # Text classification pipeline
# # text_clf = Pipeline([
# #     ("tfidf", TfidfVectorizer(max_features=5000, ngram_range=(1,2))),
# #     ("clf", LogisticRegression(max_iter=200))
# # ])

# # text_clf.fit(X_train_text, y_train_text)
# # y_pred_text = text_clf.predict(X_test_text)

# # print("\nText Classification Report:")
# # print(classification_report(y_test_text, y_pred_text))

# # # Save text model
# # joblib.dump(text_clf, "text_disease_model.pkl")


# # # ----------------------------
# # # 2. IMAGE MODEL (CNN with TensorFlow/Keras)
# # # ----------------------------

# # # Assume images are in "images/train" and "images/test" with subfolders per disease class
# # train_dir = "images/train"
# # test_dir = "images/test"

# # img_size = (128, 128)
# # batch_size = 32

# # datagen = ImageDataGenerator(rescale=1./255)

# # train_gen = datagen.flow_from_directory(
# #     train_dir,
# #     target_size=img_size,
# #     batch_size=batch_size,
# #     class_mode="categorical"
# # )

# # test_gen = datagen.flow_from_directory(
# #     test_dir,
# #     target_size=img_size,
# #     batch_size=batch_size,
# #     class_mode="categorical"
# # )

# # num_classes = len(train_gen.class_indices)

# # image_model = Sequential([
# #     Conv2D(32, (3,3), activation="relu", input_shape=(128,128,3)),
# #     MaxPooling2D((2,2)),
# #     Conv2D(64, (3,3), activation="relu"),
# #     MaxPooling2D((2,2)),
# #     Flatten(),
# #     Dense(128, activation="relu"),
# #     Dense(num_classes, activation="softmax")
# # ])

# # image_model.compile(optimizer="adam", loss="categorical_crossentropy", metrics=["accuracy"])

# # # Train CNN
# # image_model.fit(train_gen, validation_data=test_gen, epochs=5)

# # # Save image model
# # image_model.save("image_disease_model.h5")


# # # ----------------------------
# # # 3. UNIFIED PREDICTION FUNCTION
# # # ----------------------------

# # def predict_disease(input_data, input_type="text"):
# #     """
# #     input_data: str (for text) OR file path (for image)
# #     input_type: "text" or "image"
# #     """
# #     if input_type == "text":
# #         model = joblib.load("text_disease_model.pkl")
# #         prediction = model.predict([input_data])[0]
# #         return prediction

# #     elif input_type == "image":
# #         model = tf.keras.models.load_model("image_disease_model.h5")
# #         img = load_img(input_data, target_size=(128, 128))
# #         img_array = img_to_array(img) / 255.0
# #         img_array = np.expand_dims(img_array, axis=0)
# #         prediction = model.predict(img_array)
# #         class_idx = np.argmax(prediction, axis=1)[0]
# #         class_labels = list(train_gen.class_indices.keys())
# #         return class_labels[class_idx]

# #     else:
# #         raise ValueError("Invalid input_type. Use 'text' or 'image'.")

# # # ----------------------------
# # # 4. TESTING
# # # ----------------------------

# # print("\n--- Testing Unified Model ---")
# # sample_text = "Patient shows symptoms of muscle weakness and vision loss, possible mitochondrial disorder."
# # print("Text Prediction:", predict_disease(sample_text, input_type="text"))

# # sample_image = "images/test/DiseaseX/example1.jpg"
# # print("Image Prediction:", predict_disease(sample_image, input_type="image"))
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, accuracy_score
import joblib
import os
import json

# -----------------------------
# Paths
# -----------------------------
DATA_PATH = os.path.join("backend", "data", "rare_diseases_dataset.csv")
MODEL_PATH = os.path.join("backend", "models", "logistic_model.pkl")
VECTORIZER_PATH = os.path.join("backend", "models", "tfidf_vectorizer.pkl")
LABELS_PATH = os.path.join("backend", "models", "labels.json")

# -----------------------------
# Load dataset
# -----------------------------
df = pd.read_csv(DATA_PATH)

# Expecting columns: "text" (symptoms/description) and "label" (disease name or ID)
X = df["Variant"].astype(str)
y = df["Disease"]

# -----------------------------
# Train/test split
# -----------------------------
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# -----------------------------
# TF-IDF Vectorizer + Logistic Regression
# -----------------------------
vectorizer = TfidfVectorizer(max_features=5000, ngram_range=(1,2))
X_train_tfidf = vectorizer.fit_transform(X_train)

model = LogisticRegression(max_iter=1000)
model.fit(X_train_tfidf, y_train)

# -----------------------------
# Evaluate
# -----------------------------
X_test_tfidf = vectorizer.transform(X_test)
y_pred = model.predict(X_test_tfidf)

print("Accuracy:", accuracy_score(y_test, y_pred))
print(classification_report(y_test, y_pred))

# -----------------------------
# Save Model + Vectorizer + Labels
# -----------------------------
joblib.dump(model, MODEL_PATH)
joblib.dump(vectorizer, VECTORIZER_PATH)

# Save label encoding if needed
unique_labels = {str(i): label for i, label in enumerate(sorted(df["Disease"].unique()))}
with open(LABELS_PATH, "w") as f:
    json.dump(unique_labels, f, indent=4)

print(f"✅ Model saved to {MODEL_PATH}")
print(f"✅ Vectorizer saved to {VECTORIZER_PATH}")
print(f"✅ Labels saved to {LABELS_PATH}")
