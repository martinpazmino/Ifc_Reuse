import qrcode
from fpdf import FPDF
import os

COLORS = {
    "cambridge_blue": (156, 185, 157),
    "gunmetal": (31, 40, 55),
    "oxford_blue": (31, 40, 58),
    "dark_slate_gray": (28, 71, 68),
    "honeydew": (239, 249, 238)
}

class PassportPDF(FPDF):
    pass  # (If you want you can subclass for future extensions)

def generate_passport_pdf(json_data, obj_path, output_pdf_path, user_name, upload_date, project_name, logo_path):
    # Generate passport ID
    component_type = json_data.get("type", "Unknown")
    express_id = json_data.get("expressID", "00000")
    passport_id = f"ICRP-{component_type}-{express_id}"

    # Generate QR Code
    qr_img = qrcode.make("http://127.0.0.1:8000/catalog/")
    qr_img_path = "qr_code_temp.png"
    qr_img.save(qr_img_path)

    # Prepare PDF
    pdf = FPDF()
    pdf.set_auto_page_break(auto=False, margin=15)

    # Page 1
    pdf.add_page()
    pdf.set_fill_color(*COLORS["honeydew"])
    pdf.rect(0, 0, 210, 297, 'F')
    pdf.image(logo_path, x=145, y=5, w=40)

    pdf.set_font("Arial", 'B', 20)
    pdf.set_text_color(*COLORS["gunmetal"])
    pdf.set_y(30)
    pdf.cell(0, 15, "Component Passport", ln=False, align="L")
    pdf.ln(20)
    pdf.set_draw_color(*COLORS["cambridge_blue"])
    pdf.set_line_width(0.8)
    pdf.line(10, pdf.get_y(), 200, pdf.get_y())
    pdf.ln(5)

    pdf.set_font("Arial", 'I', 14)
    pdf.cell(0, 10, f"Type: {component_type}", ln=True)
    pdf.cell(0, 10, f"Passport ID: {passport_id}", ln=True)
    pdf.ln(5)

    pdf.set_font("Arial", 'B', 14)
    pdf.set_text_color(*COLORS["dark_slate_gray"])
    pdf.cell(0, 10, "Identification", ln=True)
    pdf.set_font("Arial", '', 12)
    pdf.set_text_color(0, 0, 0)
    pdf.cell(0, 8, f"Name: {json_data.get('Name', {}).get('value', 'N/A')}", ln=True)
    pdf.cell(0, 8, f"Project: {project_name}", ln=True)
    pdf.cell(0, 8, f"Upload Date: {upload_date}", ln=True)
    pdf.cell(0, 8, f"Author: {user_name}", ln=True)
    pdf.ln(5)

    # Geometry projection
    thumbnail_path = obj_path.replace(".obj", ".png")
    if os.path.exists(thumbnail_path):
        pdf.set_font("Arial", 'B', 14)
        pdf.set_text_color(*COLORS["dark_slate_gray"])
        pdf.cell(0, 10, "Geometry Projection", ln=True)
        pdf.image(thumbnail_path, x=pdf.get_x() + 20, w=140)
        pdf.ln(10)

    # Technical data
    pdf.add_page()
    pdf.set_fill_color(*COLORS["honeydew"])
    pdf.rect(0, 0, 210, 297, 'F')

    pdf.set_font("Arial", 'B', 14)
    pdf.set_text_color(*COLORS["dark_slate_gray"])
    pdf.cell(0, 10, "Technical Data", ln=True)
    pdf.set_font("Arial", 'B', 12)
    pdf.set_fill_color(*COLORS["cambridge_blue"])
    pdf.cell(60, 10, "Property", border=1, fill=True)
    pdf.cell(120, 10, "Value", border=1, ln=True, fill=True)

    pdf.set_font("Arial", '', 12)
    fields = [
        ("Global ID", json_data.get("GlobalId", {}).get("value", "N/A")),
        ("Model UUID", json_data.get("modelUUID", "N/A")),
        ("Express ID", express_id),
        ("Width", f"{json_data.get('OverallWidth', {}).get('value', 'N/A')} m"),
        ("Height", f"{json_data.get('OverallHeight', {}).get('value', 'N/A')} m"),
        ("Storey", json_data.get("storey", "N/A"))
    ]
    for key, value in fields:
        pdf.cell(60, 10, key, border=1)
        pdf.cell(120, 10, str(value), border=1, ln=True)

    pdf.ln(5)
    pdf.set_font("Arial", 'B', 14)
    pdf.cell(0, 10, "Digital Link", ln=True)
    pdf.image(qr_img_path, x=85, y=pdf.get_y(), w=40)

    # Save PDF
    pdf.output(output_pdf_path)
    os.remove(qr_img_path)
