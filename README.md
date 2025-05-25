# Minecraft BE Totem Texture Pack Maker
A simple web app to generate custom Minecraft Bedrock Edition Totem of Undying texture packs. Users can upload their own images and (optionally) a pack icon.

Click the download button to download a `.mcpack` file for easy import into Minecraft.

<img src="https://github.com/user-attachments/assets/36b0f935-9dad-4862-a4d0-7f146d89fdc8" alt="ScreenShot" width="800"/>

## Advantages
- **支持中文：** 右上角切换中文(虽然感觉没有中文应该也能看得懂)
  <img src="https://github.com/user-attachments/assets/eac90c96-9697-4053-aab6-872ae6150ede" alt="ScreenShot" width="500"/>

- **It is a website:** Just run the Python server and open your browser.
- **User-friendly:** Intuitive interface with a simple cropping tool.
- **Brainless:** Is your image in .png format? Does it have a size of 1 by 1? It does not matter.

## Introduction
- **totem_generator.py**  
  Flask backend. Handles file uploads, image processing and packaging.
- **totem_generator.html**  
  HTML frontend. Provides the UI for uploading, cropping and downloading.

## Prerequisites
- **Pillow** (for image processing)
- **Flask** (for the web server)

Install dependencies with:
```bash
pip install flask pillow
```

## Usage

1. Start the server:

   Run `totem_generator.exe`


      or


   ```bash
   python totem_generator.py
   ```
3. Open your browser and go to [http://127.0.0.1:5000/](http://127.0.0.1:5000/)
4. Upload your image and (optionally) a pack icon.
5. Download the generated `.mcpack` file and import it into Minecraft Bedrock Edition.

---
