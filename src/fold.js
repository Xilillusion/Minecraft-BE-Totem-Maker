window.folded = false; // Make folded global

document.addEventListener('DOMContentLoaded', function() {
  const foldBtn = document.getElementById('foldMetaBtn');
  const metaFields = document.getElementById('metaFields');
  foldBtn.addEventListener('click', function() {
    window.folded = !window.folded;
    metaFields.style.display = window.folded ? 'none' : '';
    
    // Update button text based on current state and language
    const t = window.translations[window.currentLang] || window.translations.en;
    foldBtn.textContent = window.folded ? t.foldMetaShow : t.foldMetaHide;
  });
});