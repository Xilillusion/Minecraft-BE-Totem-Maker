window.folded = false; // Make folded global

document.addEventListener('DOMContentLoaded', function() {
  const foldBtn = document.getElementById('foldMetaBtn');
  const metaFields = document.getElementById('metaFields');
  foldBtn.addEventListener('click', function() {
    window.folded = !window.folded;
    metaFields.style.display = window.folded ? 'none' : '';
    // Use translation if available
    if (typeof translations !== "undefined" && typeof currentLang !== "undefined") {
      const t = translations[currentLang] || translations.en;
      foldBtn.textContent = window.folded ? t.foldMetaShow : t.foldMetaHide;
    } else {
      foldBtn.textContent = window.folded ? 'Show Pack Info ▼' : 'Hide Pack Info ▲';
    }
  });
});