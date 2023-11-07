const openButton = document.querySelector('[data-open-modal]')
const closeButton = document.querySelector('[data-close-modal]')
const modal = document .querySelector('[data-modal]')

openButton.addEventListener("click", ()=>{
    modal.showModal()   
})
    closeButton.addEventListener("click",()=>{
        modal.close()
    })


    const firstName = document.getElementById('fn')
    const lastName = document.getElementById('ln')
    const email = document.getElementById('email')
    const phoneNumber  = document.getElementById('phone-number')
    const form = document.getElementById('form')
    const errorMessage = document.getElementById('error')

    form.addEventListener('submit', (e) => {
        let messages = [];
        
        if (firstName.value.trim() === '') {
            messages.push('First name is required for');
        }
    
        if (lastName.value === '' || lastName.value === null) {
            messages.push('Last name is required');
            e.preventDefault();
            // errorMessage.innerText = messages.join(', ')
            
        }
    
        if (email.value === '' || email.value === null) {
            messages.push('Email is required');
            e.preventDefault();
            // errorMessage.innerText = messages.join(', ')

        }
    
        if (phoneNumber.value === '' || phoneNumber.value === null) {
            messages.push('Phone number is required');
            e.preventDefault();
            errorMessage.innerText = messages.join(', ')
            

        }
    });
    