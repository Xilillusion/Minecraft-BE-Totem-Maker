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