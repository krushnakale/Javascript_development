const colors = ['red','green','blue','violet','yellow'];
let currentColor = 0;
    

function colorChange(){
    console.log('clicked')
    document.body.style.backgroundColor = colors[currentColor];
    currentColor = (currentColor + 1) % colors.length; 

    if (currentColor === 0) {
        document.body.style.backgroundColor = 'defaultColor'; // Replace 'defaultColor' with your actual default color
    }

}
   

