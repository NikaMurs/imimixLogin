const registrateButton = document.querySelector('.registrateButton');
const greenButton = document.querySelector('.greenButton');
const blueButton = document.querySelector('.blueButton');


const registrationStart = document.querySelector('.registrationStart');
const registrationConfirm = document.querySelector('.registrationConfirm');
const registrationSMS = document.querySelector('.registrationSMS');



registrateButton.onclick = () => { //перейти к подтверждению имени
    registrationStart.classList.add('hide');
    registrationConfirm.classList.remove('hide');
}

greenButton.onclick = () => { //перейти к смс
    registrationConfirm.classList.add('hide');
    registrationSMS.classList.remove('hide');
}

blueButton.onclick = () => { //вернуться к регистрации
    registrationConfirm.classList.add('hide');
    registrationStart.classList.remove('hide');
}


