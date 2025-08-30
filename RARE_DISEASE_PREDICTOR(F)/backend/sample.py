import pandas as pd
from fpdf import FPDF

# Load your dataset
df = pd.read_csv("./data/rare_diseases_dataset.csv")  # Replace with your CSV path

# Sample 3–5 actual diseases from your dataset
sample_df = df.sample(5, random_state=42)  # adjust number as needed

# Create PDF
pdf = FPDF()
pdf.set_auto_page_break(auto=True, margin=15)
pdf.add_page()
pdf.set_font("Arial", "B", 16)
pdf.cell(0, 10, "Sample Rare Diseases Report", ln=True, align="C")
pdf.ln(10)

pdf.set_font("Arial", "", 12)
for idx, row in sample_df.iterrows():
    disease_name = row.get("disease_name", "Unknown Disease")
    symptoms = row.get("symptoms", "No symptoms listed")
    description = row.get("description", "No description available")

    pdf.set_font("Arial", "B", 14)
    pdf.cell(0, 10, f"Disease: {disease_name}", ln=True)
    pdf.set_font("Arial", "", 12)
    pdf.multi_cell(0, 8, f"Symptoms: {symptoms}")
    pdf.multi_cell(0, 8, f"Description: {description}")
    pdf.ln(5)

# Save PDF
pdf.output("sample_rare_diseases_actual.pdf")
print("PDF generated: sample_rare_diseases_actual.pdf")
