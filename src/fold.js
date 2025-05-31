window.folded = false; // Make folded global

document.addEventListener('DOMContentLoaded', function() {
  const foldBtn = document.getElementById('foldMetaBtn');
  const metaFields = document.getElementById('metaFields');
  foldBtn.addEventListener('click', function() {
    window.folded = !window.folded;
    metaFields.style.display = window.folded ? 'none' : '';
  });
});