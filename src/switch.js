// Mode switch logic
function setMode(mode) {
  // Show/hide input rows
  document.getElementById('totemInputRow').style.display = (mode === '2D') ? '' : 'none';
  document.getElementById('skinInputRow').style.display = (mode === '3D') ? '' : 'none';
  // Show/hide arm type switch
  document.getElementById('armTypeRow').style.display = (mode === '3D') ? '' : 'none';
  // Button styles
  document.getElementById('mode2D').style.background = (mode === '2D') ? '#0078d7' : '#e0e0e0';
  document.getElementById('mode2D').style.color = (mode === '2D') ? '#fff' : '#0078d7';
  document.getElementById('mode3D').style.background = (mode === '3D') ? '#0078d7' : '#e0e0e0';
  document.getElementById('mode3D').style.color = (mode === '3D') ? '#fff' : '#0078d7';

  // Show/hide download buttons
  const downloadBtn = document.getElementById('downloadBtn');
  const downloadBtn3D = document.getElementById('downloadBtn3D');
  if (mode === '3D') {
    if (downloadBtn) downloadBtn.style.display = 'none';
    if (downloadBtn3D) downloadBtn3D.style.display = '';
  } else {
    if (downloadBtn) downloadBtn.style.display = '';
    if (downloadBtn3D) downloadBtn3D.style.display = 'none';
  }

  // Save mode for i18n
  window.currentMode = mode;
}

// Default: 2D mode
window.addEventListener('DOMContentLoaded', function() {
  setMode('2D');
  // Attach 3D download button handler
  const downloadBtn3D = document.getElementById('downloadBtn3D');
  if (downloadBtn3D) {
    downloadBtn3D.addEventListener('click', function(e) {
      if (window.handle3DPackSubmit) {
        window.handle3DPackSubmit(e);
      }
    });
  }
});
document.getElementById('mode2D').addEventListener('click', function() {
  setMode('2D');
});
document.getElementById('mode3D').addEventListener('click', function() {
  setMode('3D');
});