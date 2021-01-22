import getUserToken from '../../services/data-user';
import request from '../../services/request';

const btnSave = document.querySelector('#btn-save');

const inputImage = document.querySelector('#file');
const containerImagePreview = document.querySelector('#image-preview');

// (async function addNameOfOldImage() {
//   const oldImage = document.querySelector('#old-image');
//   const response = await request('/user/api/image', 'PUT', { token: getUserToken() });
//   console.log(response.image);
//   oldImage.value = response.image;
// }());

const userToken = document.querySelector('#user-token');
userToken.value = getUserToken();

function loadImage() {
  if (inputImage.files && inputImage.files[0]) {
    const reader = new FileReader();
    reader.addEventListener('loadend', (e) => {
      containerImagePreview.src = e.target.result;
    });
    reader.readAsDataURL(inputImage.files[0]);
  }
}

inputImage.addEventListener('change', loadImage);

async function changeUserName() {
  const name = document.getElementById('new-name').value.trim();
  if (name) {
    const result = await request('/user/api/changeUserName',
      'PUT',
      { name, token: getUserToken() });
  }
}

async function changeUserEmail() {
  const email = document.getElementById('new-email').value.trim();
  if (/^[a-z0-9_.]+@\w+\.\w+$/i.test(email)) {
    const result = await request('/user/api/changeUserEmail',
      'PUT',
      { email, token: getUserToken() });
  }
}

async function updateUserPass(currPass, newPass) {
  const result = await request('/user/api/updatePass', 'POST', {
    currPass, newPass, token: getUserToken(),
  });
  console.log(result);
  console.log(typeof result.password);
}

function changePassword() {
  const currPass = document.getElementById('curr-password').value.trim();
  const newPass = document.getElementById('new-password').value.trim();
  if (currPass && newPass) {
    updateUserPass(currPass, newPass);
  }
}

function changeUserData(e) {
  // e.preventDefault();
  changeUserName();
  changeUserEmail();
  changePassword();
}

btnSave.addEventListener('click', changeUserData);
