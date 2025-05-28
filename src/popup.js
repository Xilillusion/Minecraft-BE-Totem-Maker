// Helper for custom popup
function showPopup(message) {
  let popup = document.getElementById('customPopup');
  if (popup) {
    // Use translation if message is a known key
    if (window.translations && window.currentLang && window.translations[window.currentLang] && window.translations[window.currentLang][message]) {
      document.getElementById('popupMsg').textContent = window.translations[window.currentLang][message];
    } else {
      document.getElementById('popupMsg').textContent = message;
    }
    popup.style.display = 'block';
    document.getElementById('popupCloseBtn').onclick = function() {
      popup.style.display = 'none';
    };
  }
}