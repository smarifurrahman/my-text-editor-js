function setTextareaAlignStyle(alignType) {
    const textarea = document.getElementById('input-textarea');
    textarea.style.textAlign = alignType;
}

function setNewClassInTextarea(className, clickedEventId) {
    const textarea = document.getElementById('input-textarea');
    textarea.classList.toggle(className);
    const bgColor = document.getElementById(clickedEventId);
    bgColor.classList.toggle('bg-[#3C80F6]');
}

function getInputValueById(inputId) {
    return document.getElementById(inputId).value;
}