// font size
document.getElementById('font-size').addEventListener('change', function (event) {
    const fontSize = event.target.value + 'px';
    const textarea = document.getElementById('input-textarea');
    textarea.style.fontSize = fontSize;
});

// font case
document.getElementById('font-case').addEventListener('click', function () {
    setNewClassInTextarea('uppercase', 'font-case');
});

// color
document.getElementById('text-color').addEventListener('change', function (event) {
    const textColor = event.target.value;
    const textarea = document.getElementById('input-textarea');
    textarea.style.color = textColor;
});