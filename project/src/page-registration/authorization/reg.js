import { v4 as uuidv4 } from 'uuid';
import request from '../../services/request';
import checkInputs from './logic';
import { LSTORAGEID } from '../../services/constants';

async function addUser(name, email, password) {
  const token = uuidv4();
  const result = await request('/api/registration', 'POST', {
    name, email, password, token,
  });

  localStorage.setItem(`${LSTORAGEID}token`, token);
  return result;
}

function addErrorClassesPassword(password) {
  const errorPassword = document.querySelector('#error-password');

  if ((password.length < 6) && !errorPassword.classList.contains('opacity-1')) {
    errorPassword.classList.add('opacity-1');
  }
}

function addErrorClassesEmail(email) {
  const errorEmail = document.querySelector('#error-email');

  if (!(/^[a-z0-9_.]+@\w+\.\w+$/i.test(email)) && !errorEmail.classList.contains('opacity-1')) {
    errorEmail.classList.add('opacity-1');
  }
}

async function checkUser(name, email, password) {
  const messageError = document.querySelector('#error-reg');

  if (name && (/^[a-z0-9_.]+@\w+\.\w+$/i.test(email)) && (password.length > 5)) {
    const form = document.querySelector('#reg');
    const result = await addUser(name, email, password);

    if (!result) {
      if (!messageError.classList.contains('opacity-1')) {
        messageError.classList.add('opacity-1');
      }
    } else {
      form.submit();
    }
  } else {
    if (!messageError.classList.contains('opacity-1')) {
      messageError.classList.add('opacity-1');
    }
    addErrorClassesPassword(password);
    addErrorClassesEmail(email);
  }
}

export default async function regUser(e) {
  e.preventDefault();
  const name = document.querySelector('#name-reg').value.trim();
  const email = document.querySelector('#email-reg').value.trim();
  const password = document.querySelector('#pass-reg').value.trim();

  checkInputs('name-reg', 'email-reg', 'pass-reg');
  checkUser(name, email, password);
}
