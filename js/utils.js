function setTextareaAlignStyle(alignType) {
    const textarea = document.getElementById('input-textarea');
    textarea.style.textAlign = alignType;
}

function setNewClassInTextarea(className, eventId) {
    const textarea = document.getElementById('input-textarea');
    textarea.classList.add(className);
    const bgColor = document.getElementById(eventId);
    bgColor.classList.add('bg-[#3C80F6]');
}

function getInputValueById(inputId) {
    return document.getElementById(inputId).value;
}

// function clickBgColor(elementId) {
//     const element = document.getElementById(elementId);
//     element.DOCUMENT_TYPE_NODE
// }