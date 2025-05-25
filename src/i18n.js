// i18n
const translations = {
  en: {
    langBtn: "中文",
    title: "Totem of Undying Texture Pack Maker",
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
    title: "不死图腾材质包生成器",
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
  document.querySelector('h1').textContent = t.title;
  document.querySelector('.subtitle').innerHTML = `${t.madeBy} <a href="https://github.com/Xilillusion" target="_blank" style="color:inherit;text-decoration:underline;"><b>Xilillusion</b></a>`;
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
    const metaFields = document.getElementById('metaFields');
    const folded = metaFields && metaFields.style.display === 'none';
    foldBtn.textContent = folded ? t.foldMetaShow : t.foldMetaHide;
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