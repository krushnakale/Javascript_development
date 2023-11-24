// 'use strict';

'use strict';

const modal = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.open-modal');
const btnCloseModal = document.querySelector('.close-modal');
console.log(btnCloseModal);

const openModal = function () {
    console.log("open button is clicked");
    modal.classList.remove('hidden');
    document.querySelector(".close-modal").focus();
}

const closeModal = function () {
    console.log("close button is clicked");
    modal.classList.add('hidden');
    btnOpenModal.focus();
}

function trapFocus() {
    const focusableElements = modal.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
    const firstElement = focusableElements[0];

    if (firstElement) {
        firstElement.focus();
    }

    modal.addEventListener("keydown", function (e) {
        if (e.key === 'Tab') {
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
btnCloseModal.addEventListener("keydown", trapFocus);

document.addEventListener("keydown", function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
        console.log("Escape key is clicked");
    }
});
