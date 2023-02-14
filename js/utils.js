function setTextareaAlignStyle(alignType, clickedEventId) {
    const textarea = document.getElementById('input-textarea');
    textarea.style.textAlign = alignType;
    const bgColor = document.getElementById(clickedEventId);
    bgColor.classList.add('bg-[#3C80F6]');
}

function removePreviousClass(clickedEventId) {
    const allEventId = ['align-left', 'align-center', 'align-right', 'align-justify'];
    for (const eventId of allEventId) {
        if(eventId !== clickedEventId) {
            const bgColor = document.getElementById(eventId);
            bgColor.classList.remove('bg-[#3C80F6]');
        }
    }
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