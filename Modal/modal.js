
function buttonClick() {
    const modal1 = document.getElementById("modal");

    if (modal1.style.display === "none" || modal1.style.display === "") {
        modal1.style.display = "block";
    } else {
        modal1.style.display = "none";
        
    }
}


function closeModal() {
    const modal = document.getElementById("modal");
    if (modal.style.display === "block") {
        modal.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    function closeButton() {
        let closeBtn = document.getElementById("interactiveElement");
  
        if (closeBtn) {
            closeBtn.addEventListener("click", function () {
                console.log("Close button clicked");
        
            });
        }
    }

  
      closeButton();
});
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

const cancelButton = document.getElementById("interactivElement")
function clickCancelButtonAndCloseModal(){
    if (cancelButton){
        cancelButton.click();
    }
    closeModal();
    
}
clickCancelButtonAndCloseModal();
