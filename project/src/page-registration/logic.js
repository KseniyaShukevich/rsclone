import regUser from './authorization/reg';

const btnGetRegistrationForm = document.querySelector('#get-reg-form');

function callRegistrationFunction() {
  const registrationButton = document.querySelector('#btn-reg');
  registrationButton.addEventListener('click', regUser);
}

btnGetRegistrationForm.addEventListener('click', callRegistrationFunction);
