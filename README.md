# Minecraft BE Totem Generator
A simple web app to generate custom Minecraft Bedrock Edition Totem of Undying texture packs. Users can upload their own images and (optionally) enter pack information.

<img src="https://github.com/user-attachments/assets/0a1680bb-7063-49eb-b661-2eda316420e9" alt="ScreenShot" width="800"/>

## Advantages
- **支持中文：** 自动识别+右上角切换中英文 (虽然感觉没有中文应该也能看得懂)

  <img src="https://github.com/user-attachments/assets/1d8567b0-83ba-420d-bf02-86c9a3598e7d" alt="ScreenShot" width="500"/>

- **It is just a web:** Just run the Python server and open your browser. Also able to put this on your website
- **User-friendly:** Intuitive interface with a simple cropping tool.
- **Brainless:** Is your image in .png format? Does it have a size of 1 by 1? We handle these for you.

## Usage

1. Visit https://xilillusion.github.io/Minecraft-BE-Totem-Maker/ (RECOMMENDED)
   
   OR

   Download and run `index.html`
2. Upload your image and (optionally) a pack icon.
3. Download the generated `.mcpack` file and import it into Minecraft Bedrock Edition.

## Introduction
- **index.html** main file
- **background.js** Background images display
- **cropper.js** Cropper tool and its related functionalities
- **fold.js** Function to hide and show the pack info
- **i18n.js** English and Chineses Translation
- **mcpack.js** Pack the images and info into .mcpack file
- **preview.js** Preview of the uploaded images
- **totem.js** Animation of the big totem in the background

## Prerequisites
- Internet

Install dependencies with:
```bash
Money to pay your Internet operator
```
