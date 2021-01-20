import './customization/settings';
import getUserToken from '../services/data-user';
import request from '../services/request';
import { LSTORAGEID } from '../services/constants';

const exit = document.getElementById('exit');

async function getUserData() {
  const token = getUserToken();
  if (token !== '0') {
    const dataUser = await request('/user/api/userData', 'POST', { token });
    console.log(dataUser);
  }
}

function goOutUser() {
  localStorage.setItem(`${LSTORAGEID}token`, 0);
}

getUserData();

exit.addEventListener('click', goOutUser);
