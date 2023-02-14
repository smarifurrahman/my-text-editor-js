document.getElementById('align-left').addEventListener('click', function () {
    removePreviousClass('align-left');
    setTextareaAlignStyle('left', 'align-left');
});

document.getElementById('align-center').addEventListener('click', function () {
    removePreviousClass('align-center');
    setTextareaAlignStyle('center', 'align-center');
});

document.getElementById('align-right').addEventListener('click', function () {
    removePreviousClass('align-right');
    setTextareaAlignStyle('right', 'align-right');
});

document.getElementById('align-justify').addEventListener('click', function () {
    removePreviousClass('align-justify');
    setTextareaAlignStyle('justify', 'align-justify');
});
