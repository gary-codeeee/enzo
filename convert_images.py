import os
import glob
from PIL import Image
from pillow_heif import register_heif_opener

register_heif_opener()

source_dir = r"C:\Users\garya\Enzo\site web"
dest_dir = r"c:\Users\garya\Enzo\frontend\public\gallery"

# create if not exists
os.makedirs(dest_dir, exist_ok=True)

# get all jpg and heic files
files = glob.glob(os.path.join(source_dir, "*.jpg")) + glob.glob(os.path.join(source_dir, "*.HEIC")) + glob.glob(os.path.join(source_dir, "*.heic"))

# Just take the first 9 available to keep the grid clean and fast
target_files = files[:9]

for idx, f in enumerate(target_files):
    try:
        img = Image.open(f)
        img.thumbnail((1200, 1200), Image.Resampling.LANCZOS) # resize for web
        output_path = os.path.join(dest_dir, f"{idx+1}.webp")
        img.save(output_path, "WEBP", quality=80)
        print(f"Saved {output_path}")
    except Exception as e:
        print(f"Error processing {f}: {e}")

print("Image conversion complete.")
