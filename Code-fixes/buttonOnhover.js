//button lacks contrast 

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
buttonHoverContrast("#block-disaster-disastercentral-system-main > div > div > div.sitemap-item.sitemap-plugin--menu.sitemap-item--menu-main > div > ul > li:nth-child(6) > a","blue")