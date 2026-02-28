import os
import glob
import shutil
from PIL import Image
from pillow_heif import register_heif_opener

register_heif_opener()

source_dir = r"C:\Users\garya\OneDrive\Bureau\photo enzo\Nouveau dossier\Exportation sans titre"
dest_dir = r"c:\Users\garya\Enzo\frontend\public\gallery"

# Clear existing images in output dir
if os.path.exists(dest_dir):
    shutil.rmtree(dest_dir)
os.makedirs(dest_dir, exist_ok=True)

# Get all images
files = glob.glob(os.path.join(source_dir, "*.jpg")) + \
        glob.glob(os.path.join(source_dir, "*.HEIC")) + \
        glob.glob(os.path.join(source_dir, "*.heic"))

print(f"Found {len(files)} images to process...")

for idx, f in enumerate(files):
    try:
        img = Image.open(f)
        img.thumbnail((1200, 1200), Image.Resampling.LANCZOS)
        output_path = os.path.join(dest_dir, f"{idx+1}.webp")
        img.save(output_path, "WEBP", quality=80)
        print(f"Saved {output_path}")
    except Exception as e:
        print(f"Error processing {f}: {e}")

print("Image conversion complete.")
