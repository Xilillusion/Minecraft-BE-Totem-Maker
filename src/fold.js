document.addEventListener('DOMContentLoaded', function() {
  const foldBtn = document.getElementById('foldMetaBtn');
  const metaFields = document.getElementById('metaFields');
  let folded = false;
  foldBtn.addEventListener('click', function() {
    folded = !folded;
    metaFields.style.display = folded ? 'none' : '';
    // Use translation if available
    if (typeof translations !== "undefined" && typeof currentLang !== "undefined") {
      const t = translations[currentLang] || translations.en;
      foldBtn.textContent = folded ? t.foldMetaShow : t.foldMetaHide;
    } else {
      foldBtn.textContent = folded ? 'Show Pack Info ▼' : 'Hide Pack Info ▲';
    }
  });
});