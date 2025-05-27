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
    packIcon: "Pack Icon:",
    download: "Download",
    confirm: "Crop",
    foldMetaShow: "Show Pack Info ▼",
    foldMetaHide: "Hide Pack Info ▲"
  },
  zh: {
    langBtn: "English",
    title: "自定义不死图腾<br>生成器",
    madeBy: "作者",
    uploadTip: "上传贴图和材质包信息（可选），生成基岩版不死图腾材质包。",
    packName: "材质包名称：",
    packDescription: "材质包描述：",
    totemImage: "图腾贴图（必填）：",
    packIcon: "材质包图标：",
    download: "下载",
    confirm: "裁剪",
    foldMetaShow: "显示材质包信息 ▼",
    foldMetaHide: "隐藏材质包信息 ▲"
  }
};

let currentLang = "en";
function setLang(lang) {
  currentLang = lang;
  const t = translations[lang] || translations.en;
  document.querySelector('h1').innerHTML = t.title; // Use innerHTML for <br>
  // Update subtitle with GitHub icon/link
  document.querySelector('.subtitle').innerHTML =
    `${t.madeBy} <a href="https://github.com/Xilillusion" target="_blank" style="color:inherit;text-decoration:underline;"><b>Xilillusion</b></a>` +
    `<a href="https://github.com/Xilillusion/Minecraft-BE-Totem-Maker" target="_blank" style="vertical-align:text-bottom;margin-left:4px;display:inline-block;">` +
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
  document.querySelector('input[type="submit"]').value = t.download;
  document.getElementById('langSwitcher').textContent = t.langBtn;
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
}

document.getElementById('langSwitcher').addEventListener('click', function() {
  setLang(currentLang === "en" ? "zh" : "en");
});

// Auto-detect browser language on first load
window.addEventListener('DOMContentLoaded', function() {
  let lang = navigator.language.startsWith('zh') ? 'zh' : 'en';
  setLang(lang);
});