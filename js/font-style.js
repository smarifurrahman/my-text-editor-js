document.getElementById('text-bold').addEventListener('click', function () {
    setNewClassInTextarea('font-bold', 'text-bold');
});

document.getElementById('text-italic').addEventListener('click', function () {
    setNewClassInTextarea('italic');
});

document.getElementById('text-underline').addEventListener('click', function () {
    setNewClassInTextarea('underline');
});