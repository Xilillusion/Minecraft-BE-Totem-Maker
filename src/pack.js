// Utility functions for both 2D and 3D pack scripts
function uuidv4() {
  // UUID v4 generator
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

async function imageFileToPngBlob(file) {
  // Converts any image file to PNG Blob, preserving transparency if possible
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(blob => resolve(blob), 'image/png');
    };
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
}

async function getImagePngBlobFromInput(inputId) {
  // Returns PNG Blob for the file input (after cropping if applied)
  const input = document.getElementById(inputId);
  if (!input.files || !input.files[0]) return null;
  const file = input.files[0];
  // If file is already PNG, just use it; else convert
  if (file.type === "image/png") return file;
  return await imageFileToPngBlob(file);
}
