import os
from dataclasses import dataclass

@dataclass
class SavedFile:
    path: str
    filename: str
    content_type: str

UPLOAD_DIR = os.path.join(os.path.dirname(__file__), "..", "uploads")
os.makedirs(UPLOAD_DIR, exist_ok=True)

def save_upload(file_bytes: bytes, filename: str, content_type: str) -> SavedFile:
    safe_name = filename.replace("/", "_").replace("\\", "_")
    path = os.path.join(UPLOAD_DIR, safe_name)
    with open(path, "wb") as f:
        f.write(file_bytes)
    return SavedFile(path=path, filename=safe_name, content_type=content_type)
