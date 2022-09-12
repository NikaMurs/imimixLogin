const loginButton = document.querySelector('.loginButton');
const loginInput = document.querySelectorAll('.loginInput');

loginButton.onclick = ()=>{ //показать второе поле login
    loginInput[1].classList.remove('hide');
}