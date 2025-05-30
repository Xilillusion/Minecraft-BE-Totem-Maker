// i18n
const translations = {
  en: {
    langBtn: "中文",
    title: "Custom Totem of Undying Generator",
    madeBy: "Made by",
    uploadTip: "Upload your image and pack info (optionally) to create a Minecraft BE totem of undying texture pack.",
    packName: "Pack Name:",
    packDescription: "Pack Description:",
    totemImage: "Totem Image (Required):",
    skinImage: "Skin Image (Required, 64x64, 128x128 in schedule):",
    packIcon: "Pack Icon:",
    download: "Download",
    confirm: "Crop",
    foldMetaShow: "Show Pack Info ▼",
    foldMetaHide: "Hide Pack Info ▲",
    mode2D: "2D Image",
    mode3D: "3D Player Skin",
    skinSizeError: "Skin image must be 64x64 or 128x128 pixels. Please re-upload.",
    armType: "Arm Type",
    armTypeNormal: "Normal",
    armTypeSlim: "Slim",
    noTotemImage: "No image uploaded."
  },
  zh: {
    langBtn: "English",
    title: "自定义不死图腾<br>生成器",
    madeBy: "作者",
    uploadTip: "上传图片/玩家皮肤和材质包信息（可选），生成基岩版不死图腾材质包。",
    packName: "材质包名称：",
    packDescription: "材质包描述：",
    totemImage: "上传贴图（必填）：",
    skinImage: "玩家皮肤（必填，64x64，128x128尚未完成）：",
    packIcon: "材质包图标：",
    download: "下载",
    confirm: "裁剪",
    foldMetaShow: "显示材质包信息 ▼",
    foldMetaHide: "隐藏材质包信息 ▲",
    mode2D: "2D图片",
    mode3D: "3D玩家皮肤",
    skinSizeError: "皮肤图片必须为64x64或128x128像素，请重新上传。",
    armType: "手臂类型",
    armTypeNormal: "普通",
    armTypeSlim: "纤细",
    noTotemImage: "未上传贴图。"
  }
};

let currentLang = "en";
function setLang(lang) {
  currentLang = lang;
  window.currentLang = lang; // Ensure global currentLang is updated
  const t = translations[lang] || translations.en;
  document.querySelector('h1').innerHTML = t.title;
  // Update subtitle with GitHub icon/link
  document.querySelector('.subtitle').innerHTML =
    `${t.madeBy} <a href="https://github.com/Xilillusion/Minecraft-BE-Totem-Maker" target="_blank" style="color:inherit;text-decoration:underline;"><b>Xilillusion</b></a>` +
    `<a href="https://github.com/Xilillusion" target="_blank" style="vertical-align:text-bottom;margin-left:4px;display:inline-block;">` +
    `<svg height="20" width="20" viewBox="0 0 16 16" fill="#24292f" style="vertical-align:text-bottom;">` +
    `<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
      0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
      -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2
      -3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.12 0 0 .67-.21 2.2.82.64
      -.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.92.08
      2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01
      1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>` +
    `</svg></a>`;
  document.querySelector('.subtitle.secondary').textContent = t.uploadTip;
  document.querySelector('label[for="packName"]').textContent = t.packName;
  document.querySelector('label[for="packDescription"]').textContent = t.packDescription;
  document.querySelectorAll('.section-label')[0].textContent = t.packIcon;
  document.querySelectorAll('.section-label')[1].textContent = t.totemImage;
  // Add for skin label (3D mode)
  const skinLabel = document.getElementById('skinLabel');
  if (skinLabel) skinLabel.textContent = t.skinImage;
  document.querySelector('input[type="submit"]').value = t.download;
  document.getElementById('langSwitcher').textContent = t.langBtn;
  // Set 3D download button text
  const downloadBtn3D = document.getElementById('downloadBtn3D');
  if (downloadBtn3D) downloadBtn3D.textContent = t.download;
  // Arm type switch translation
  const armTypeLabel = document.getElementById('armTypeLabel');
  const armTypeNormalLabel = document.getElementById('armTypeNormalLabel');
  const armTypeSlimLabel = document.getElementById('armTypeSlimLabel');
  if (armTypeLabel) armTypeLabel.textContent = t.armType;
  if (armTypeNormalLabel) armTypeNormalLabel.textContent = t.armTypeNormal;
  if (armTypeSlimLabel) armTypeSlimLabel.textContent = t.armTypeSlim;
  // Update fold button text
  const foldBtn = document.getElementById('foldMetaBtn');
  if (foldBtn) {
    // Use global folded state
    foldBtn.textContent = window.folded ? t.foldMetaShow : t.foldMetaHide;
  }
  // Update all crop buttons if present
  document.querySelectorAll('button[id^="cropBtn"]').forEach(btn => {
    btn.textContent = t.confirm;
  });
  // Update mode switch buttons
  const mode2DBtn = document.getElementById('mode2D');
  const mode3DBtn = document.getElementById('mode3D');
  if (mode2DBtn) mode2DBtn.textContent = t.mode2D;
  if (mode3DBtn) mode3DBtn.textContent = t.mode3D;
}

document.getElementById('langSwitcher').addEventListener('click', function() {
  setLang(currentLang === "en" ? "zh" : "en");
});

// Auto-detect browser language on first load
window.addEventListener('DOMContentLoaded', function() {
  let lang = navigator.language.startsWith('zh') ? 'zh' : 'en';
  setLang(lang);
});

// Expose translations and currentLang globally for popup translation
window.translations = translations;
window.currentLang = currentLang;