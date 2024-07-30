const form = document.querySelector('form');
const usernameInput = form.elements.username;

form.addEventListener('submit', (event) => event.preventDefault());

usernameInput.addEventListener('invalid',(event) => {
    event.target.setCustomValidity('');
    if(!event.target.validity.valid){
        event.target.setCustomValidity('Wajib diisi !');
    return;
    }
    
});