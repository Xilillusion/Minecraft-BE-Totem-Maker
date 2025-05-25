# Minecraft BE Totem Texture Pack Maker

## Introduction
A simple web app to generate custom Minecraft Bedrock Edition Totem of Undying texture packs. Users can upload their own images and (optionally) a pack icon.
Click the download button to download a `.mcpack` file for easy import into Minecraft.

## Advantages
- **It is a web** Just run the Python server and open your browser.
- **User-friendly:** Intuitive interface with a simple cropping tool.
- **Brainless:** Is your image in .png format? Does it have a size of 1 by 1? It does not matter. 

## Overview
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
2. Open your browser and go to [http://127.0.0.1:5000/](http://127.0.0.1:5000/)
3. Upload your image and (optionally) a pack icon.
4. Download the generated `.mcpack` file and import it into Minecraft Bedrock Edition.

---
