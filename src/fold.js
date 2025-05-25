document.addEventListener('DOMContentLoaded', function() {
  const foldBtn = document.getElementById('foldMetaBtn');
  const metaFields = document.getElementById('metaFields');
  let folded = false;
  foldBtn.addEventListener('click', function() {
    folded = !folded;
    metaFields.style.display = folded ? 'none' : '';
    foldBtn.textContent = folded ? 'Show Pack Info ▼' : 'Hide Pack Info ▲';
  });
});