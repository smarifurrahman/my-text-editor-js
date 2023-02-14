// font size
document.getElementById('font-size').addEventListener('change', function (event) {
    const fontSize = event.target.value + 'px';
    const textarea = document.getElementById('input-textarea');
    textarea.style.fontSize = fontSize;
})

// font case
document.getElementById('font-case').addEventListener('click', function () {
    setNewClassInTextarea('uppercase');
});

// color
document.getElementById('text-color').addEventListener('change', function (event) {
    console.log(event.target.value);
    const textColor = event.target.value;
    const textarea = document.getElementById('input-textarea');
    textarea.style.color = textColor;
});