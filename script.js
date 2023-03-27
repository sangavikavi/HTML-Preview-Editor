const htmlInput = document.getElementById('html-input');
const preview = document.getElementById('preview');

htmlInput.addEventListener('input', () => {
  preview.innerHTML = htmlInput.value;
});
