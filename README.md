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
```plaintext
├── index.html
├── src\
│   ├── 2Dpack.js      Image to totem texture pack
│   ├── 3Dpack.js      Player skin to totem texture pack
│   ├── background.js  Background images display
│   ├── cropper.js     Cropper tool and its related functionalities
│   ├── fold.js        Function to hide and show the pack info
│   ├── i18n.js        English and Chineses Translation
│   ├── pack.js        Utility tools for 2Dpack and 3Dpack
│   ├── popup.js       Popup menu helper
│   ├── preview.js     Preview of the uploaded images
│   ├── switch.js      Switch between 2D and 3D modes
│   └── totem.js       Animation of the big totem in the background
└── img                Background images
```

## Reference
- JSZip: http://stuartk.com/jszip
- 3D Totem Generator by Asaki Yuki: https://github.com/AsakiYuki/3d-totem-generator (for reverse engineering; the source code is very smelly)
