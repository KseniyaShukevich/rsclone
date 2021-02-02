import getUserToken from '../../services/data-user';
import request from '../../services/request';

const btnSave = document.querySelector('#btn-save');
const inputEmail = document.querySelector('#new-email');
const inputImage = document.querySelector('#file');
const containerImagePreview = document.querySelector('#image-preview');
const emailErrorMessage = document.querySelector('#email-error-message');
const inputCurrPass = document.querySelector('#curr-password');
const currPassErrorMessage = document.querySelector('#currPass-error-message');
const inputNewPass = document.querySelector('#new-password');
const newPassErrorMessage = document.querySelector('#new-pass-error-message');
const inputRepeatNewPass = document.querySelector('#repeat-new-password');
const repeatNewPassErrorMessage = document.querySelector('#repeat-new-pass-error-message');
const saveErrorMessage = document.querySelector('#save-error-message');
const emailErrorMessageReg = document.querySelector('#email-error-message-reg');
const successSaveMessage = document.querySelector('#success-save-message');

(async function addOldPhoto() {
  const result = await request('/user/api/userData', 'POST', { token: getUserToken() });
  if (result[0].image) {
    containerImagePreview.src = result[0].image;
  } else {
    containerImagePreview.src = 'avatar.jpg';
  }
}());

(function addUserToken() {
  const userToken = document.querySelector('#user-token');
  userToken.value = getUserToken();
}());

function loadImage() {
  if (inputImage.files && inputImage.files[0]) {
    const reader = new FileReader();
    reader.addEventListener('loadend', (e) => {
      containerImagePreview.src = e.target.result;
    });
    reader.readAsDataURL(inputImage.files[0]);
  }
}

function updateImage() {
  const formElement = document.querySelector('#user-settings');
  const req = new XMLHttpRequest();
  req.open('POST', 'settings/api/image');
  req.send(new FormData(formElement));
}

function changeUserName() {
  const name = document.querySelector('#new-name').value.trim();
  if (name) {
    request('/settings/api/name',
      'PUT',
      { name, token: getUserToken() });
  }
}

function changeUserEmail() {
  const email = inputEmail.value.trim();
  if (email) {
    request('/settings/api/email',
      'PUT',
      { email, token: getUserToken() });
  }
}

async function isFreeEmail(email) {
  if ((/^[a-z0-9_.]+@\w+\.\w+$/i.test(email))) {
    const result = await request('/settings/api/email', 'POST', { email });
    if (result.length && !emailErrorMessageReg.classList.contains('display-block')) {
      emailErrorMessageReg.classList.add('display-block');
    }
    if (result.length) {
      return false;
    }
  }
  return true;
}

async function checkEmailFormat() {
  const email = inputEmail.value.trim();
  if (email && !(/^[a-z0-9_.]+@\w+\.\w+$/i.test(email))) {
    if (!emailErrorMessage.classList.contains('display-block')) {
      emailErrorMessage.classList.add('display-block');
      inputEmail.classList.add('error-color');
    }
    return false;
  }
  isFreeEmail(email);
  emailErrorMessage.classList.remove('display-block');
  return true;
}

function deleteError(e, el) {
  e.target.classList.remove('error-color');
  el.classList.remove('display-block');
}

function updateUserPass(currPass, newPass, repeatNewPass) {
  if ((newPass === repeatNewPass) && (newPass.length > 5) && (repeatNewPass.length > 5)) {
    request('/settings/api/password', 'PUT', {
      currPass, newPass, token: getUserToken(),
    });
  }
}

async function checkCurrPassword() {
  const currPass = inputCurrPass.value.trim();
  if (currPass) {
    const result = await request('/settings/api/password', 'POST', {
      currPass, token: getUserToken(),
    });
    if (!result.password) {
      if (!inputCurrPass.classList.contains('error-color')) {
        inputCurrPass.classList.add('error-color');
        currPassErrorMessage.classList.add('display-block');
      }
      return false;
    }
  }
  return true;
}

function checkNewPassword() {
  const newPass = inputNewPass.value.trim();
  if (newPass && (newPass.length < 6)) {
    if (!inputNewPass.classList.contains('error-color')) {
      inputNewPass.classList.add('error-color');
      newPassErrorMessage.classList.add('display-block');
    }
  }
}

function checkRepeatNewPass() {
  const newPass = inputNewPass.value.trim();
  const repeatNewPass = inputRepeatNewPass.value.trim();
  if (newPass !== repeatNewPass) {
    if (!inputRepeatNewPass.classList.contains('error-color')) {
      inputRepeatNewPass.classList.add('error-color');
      repeatNewPassErrorMessage.classList.add('display-block');
    }
  }
}

function changePassword() {
  const currPass = inputCurrPass.value.trim();
  const newPass = inputNewPass.value.trim();
  const repeatNewPass = inputRepeatNewPass.value.trim();
  if (currPass && newPass && repeatNewPass) {
    updateUserPass(currPass, newPass, repeatNewPass);
  }
}

function isCorrectNewPass() {
  const newPass = inputNewPass.value.trim();
  const repeatNewPass = inputRepeatNewPass.value.trim();
  if (((newPass === repeatNewPass) && (newPass.length > 5) && (repeatNewPass.length > 5))
   || (!newPass && !repeatNewPass)) {
    return true;
  }
  return false;
}

function getSuccessMessage() {
  successSaveMessage.classList.add('display-block');
  setTimeout(() => {
    successSaveMessage.classList.remove('display-block');
  }, 3000);
}

function getErrorMessage() {
  saveErrorMessage.classList.add('display-block');
  setTimeout(() => {
    saveErrorMessage.classList.remove('display-block');
  }, 3000);
}

function updateUser() {
  updateImage();
  changeUserName();
  changeUserEmail();
  changePassword();
}

async function changeUserData(e) {
  e.preventDefault();
  const email = inputEmail.value.trim();
  const isCorrectPass = await checkCurrPassword();
  const isFree = await isFreeEmail(email);
  const isValidEmail = await checkEmailFormat();
  if (isValidEmail && isCorrectPass && isCorrectNewPass() && isFree) {
    updateUser();
    getSuccessMessage();
  } else {
    getErrorMessage();
  }
  e.target.blur();
}

btnSave.addEventListener('click', changeUserData);
inputImage.addEventListener('change', loadImage);
inputEmail.addEventListener('blur', checkEmailFormat);
inputEmail.addEventListener('focus', (e) => { deleteError(e, emailErrorMessage); });
inputEmail.addEventListener('focus', () => {
  emailErrorMessageReg.classList.remove('display-block');
});
inputCurrPass.addEventListener('blur', checkCurrPassword);
inputCurrPass.addEventListener('focus', (e) => { deleteError(e, currPassErrorMessage); });
inputNewPass.addEventListener('blur', checkNewPassword);
inputNewPass.addEventListener('focus', (e) => { deleteError(e, newPassErrorMessage); });
inputRepeatNewPass.addEventListener('blur', checkRepeatNewPass);
inputRepeatNewPass.addEventListener('focus', (e) => { deleteError(e, repeatNewPassErrorMessage); });
