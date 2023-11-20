
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const openModalButton = document.getElementById("openModalButton");
    const closeButton = document.getElementById("interactiveElement");

    function toggleModal() {
        modal.style.display = modal.style.display === "none" || modal.style.display === "" ? "block" : "none";
        if (modal.style.display === "block") {
            trapFocus();
        } else {
            openModalButton.focus(); // Set focus back to the button when the modal closes
        }
    }

    function trapFocus() {
        const focusableElements = modal.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
        const firstElement = focusableElements[0];

        // Set focus to the first focusable element inside the modal
        if (firstElement) {
            firstElement.focus();
        }

        modal.addEventListener("keydown", function (e) {
            if (e.key === 'Tab') {
                const lastElement = focusableElements[focusableElements.length - 1];

                if (e.shiftKey) {
                    // Shift + Tab
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else {
                    // Tab
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }

    openModalButton.addEventListener("click", toggleModal);
    if (closeButton) {
        closeButton.addEventListener("click", toggleModal);
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && modal.style.display === "block") {
            toggleModal();
        }
    });
});


