import regUser from './authorization/reg';

const btnGetRegistrationForm = document.querySelector('#get-reg-form');

function callRegistrationFunction() {
  const registrationButton = document.querySelector('#btn-reg');
  registrationButton.addEventListener('click', regUser);
}

btnGetRegistrationForm.addEventListener('click', callRegistrationFunction);

function hideWelcomeBlock() {
  const welcomeBlock = document.querySelector('.welcome-block');

  welcomeBlock.classList.add('animation-swipe-top');
  document.body.classList.remove('overflow-hidden');
}

setTimeout(hideWelcomeBlock, 4000);
