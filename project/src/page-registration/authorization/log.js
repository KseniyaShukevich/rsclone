import { v4 as uuidv4 } from 'uuid';
import request from '../../services/request';
import checkInputs from './logic';
import { LSTORAGEID } from '../../services/constants';

const logBtn = document.getElementById('btn-log');
const form = document.getElementById('log');

function addToLStorage(response, token) {
  if (!response) {
    const message = document.querySelector('.message-error');
    message.classList.add('display-block');
  } else {
    localStorage.setItem(`${LSTORAGEID}token`, token);
    form.submit();
  }
}

async function checkUser(e) {
  e.preventDefault();
  const email = document.getElementById('email-log').value.trim();
  const password = document.getElementById('password-log').value.trim();
  const token = uuidv4();
  const response = await request('/api/log', 'POST', { email, password, token });

  checkInputs('email-log', 'password-log');
  addToLStorage(response, token);
}

logBtn.addEventListener('click', checkUser);
