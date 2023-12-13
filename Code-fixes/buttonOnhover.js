//contrast lacks button/links on hover or focus
function buttonHoverContrast(selector, color){
    let button = document.querySelector(selector)

    button.addEventListener("mouseover", function(){
        button.style.color = color;      
    })
    button.addEventListener("mouseout", function(){
        button.style.color = '';
    })
    button.addEventListener("focus", function(){
        button.style.color = color;
    })
   
    button.addEventListener("focusout", function(){
        button.style.color = '';
    })
}
buttonHoverContrast("#navbarSupportedContent > ul > li:nth-child(6) > a","blue")

//ActiveUserinterface-boundary
function activeUserInterface(selector, borderColor){
// Find the input field using the provided selector
    let inputField = document.querySelector(selector)
        inputField.style.border= borderColor
}
//Invoking function
activeUserInterface("#edit-keys", "2px solid gray");



// heading  
function headingMarkup(selector, headingLevel) {
    let heading = document.querySelector(selector)
    heading.setAttribute("role","heading")
    heading.setAttribute("aria-level",headingLevel)
    
}
headingMarkup("body > div.dialog-off-canvas-main-canvas > section.home-tagline > div > div > div > p",'3');