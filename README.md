# Make Your Own 3D Totem
A simple web app to generate custom Minecraft Bedrock Edition Totem of Undying texture packs. Users can upload their own images and (optionally) enter pack information.

**Support both 64\*64 and 128\*128 skin**

  <img width="800" alt="ScreenShot" src="https://github.com/user-attachments/assets/498f8bb4-ebd5-419d-85b2-d0940e2cf417" />

## Introduction 
- **支持中文：** 自动识别+右上角切换中英文 (虽然感觉没有中文应该也能看得懂)

  <img width="500" alt="ScreenShot" src="https://github.com/user-attachments/assets/11144d35-0e3e-4df1-b483-f672714cea0c" />
- **Just a web:** Just run the Python server and open your browser. Also able to put this on your website
- **Compatible:** Each pack has its own UUID --multiple packages can be installed.
- **User-friendly:** Intuitive interface with a simple cropping tool.
- **Brainless:** Is your image in .png format? Does it have a size of 1 by 1? We will handle these with you.

## Usage

1. Visit https://xilillusion.github.io/Minecraft-BE-Totem-Maker/ (RECOMMENDED)

   OR https://minecraft-be-totem-maker.pages.dev/ 
   
   OR Download and run `index.html`
3. Upload your image and (optionally) a pack icon.
4. Download the generated `.mcpack` file and import it into Minecraft Bedrock Edition.

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

## References
- JSZip: http://stuartk.com/jszip
- 3D Totem Generator by Asaki Yuki: https://github.com/AsakiYuki/3d-totem-generator (reverse engineering; the original code is very smelly)
