// Preview the selected image
function previewImage(inputId, previewId) {
  const input = document.getElementById(inputId);
  const preview = document.getElementById(previewId);
  input.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        preview.src = e.target.result;
        preview.style.display = 'block';
      };
      reader.readAsDataURL(file);
    } else {
      preview.src = '';
      preview.style.display = 'none';
    }
  });
}
previewImage('imageInput', 'imagePreview');
previewImage('iconInput', 'iconPreview');
previewImage('skinInput', 'skinPreview');

// Skin dimension check for 3D mode
document.getElementById('skinInput').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (!file) return;
  const img = new Image();
  img.onload = function() {
    if (
      window.currentMode === '3D' &&
      !((img.width === 128 && img.height === 128) || (img.width === 64 && img.height === 64))
    ) {
      showPopup('skinSizeError');
      event.target.value = '';
      document.getElementById('skinPreview').src = '';
      document.getElementById('skinPreview').style.display = 'none';
    }
  };
  img.src = URL.createObjectURL(file);
});