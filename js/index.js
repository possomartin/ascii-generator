const fileInput = document.getElementById('imageUpload');

fileInput.addEventListener('dragover', (event) => {
    fileInput.style.border = "2px dotted var(--color-accent)";
    event.preventDefault();
});

fileInput.addEventListener('dragend', (event) => {
    fileInput.style.border = "none";
    event.preventDefault();
});

fileInput.addEventListener('dragleave', (event) => {
    fileInput.style.border = "none";
    event.preventDefault();
});
