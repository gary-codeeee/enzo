import fitz # PyMuPDF
import sys

try:
    doc = fitz.open("C:\\Users\\garya\\Enzo\\21AABED2-BE70-4BEA-9CE2-13F8F08990A5.pdf")
    page = doc.load_page(0)
    # Get high-resolution pixmap by zooming
    zoom = 4.0
    mat = fitz.Matrix(zoom, zoom)
    pix = page.get_pixmap(matrix=mat, alpha=True)
    pix.save("C:\\Users\\garya\\Enzo\\frontend\\public\\logo.png")
    print("Logo successfully converted to PNG.")
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
