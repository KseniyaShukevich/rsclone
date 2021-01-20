import getUserToken from '../../services/data-user';
import request from '../../services/request';

const btnSave = document.getElementById('btn-save');

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
  e.preventDefault();
  changeUserName();
  changeUserEmail();
  changePassword();
}

btnSave.addEventListener('click', changeUserData);
