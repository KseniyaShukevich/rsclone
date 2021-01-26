import getUserToken from '../services/data-user';
import request from '../services/request';
import { LSTORAGEID } from '../services/constants';

const exit = document.querySelector('#exit');

function fillUserAccount(dataUser) {
  const userName = document.querySelector('#user-name');
  const userPhoto = document.querySelector('#user-photo');
  userName.textContent = dataUser[0].name;
  if (dataUser[0].image) {
    userPhoto.style.backgroundImage = `url("./${dataUser[0].image}")`;
  } else {
    userPhoto.style.backgroundImage = 'url("./blank_photo.jpg")';
  }
}

async function getUserData() {
  const token = getUserToken();
  if (token !== '0') {
    const dataUser = await request('/user/api/userData', 'POST', { token });
    fillUserAccount(dataUser);
  } else {
    document.body.style.display = 'none';
    window.location.href = '/';
  }
}

function goOutUser() {
  localStorage.setItem(`${LSTORAGEID}token`, 0);
}

getUserData();

exit.addEventListener('click', goOutUser);
