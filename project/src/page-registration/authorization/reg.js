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

async function checkUser(name, email, password, messageError) {
  if (name && (/^[a-z0-9_.]+@\w+\.\w+$/i.test(email)) && (password.length > 5)) {
    const form = document.querySelector('#reg');
    const result = await addUser(name, email, password);

    if (!result) {
      messageError.classList.add('opacity-1');
    } else {
      form.submit();
    }
  } else {
    messageError.classList.add('opacity-1');
  }
}

export default async function regUser(e) {
  e.preventDefault();
  const name = document.querySelector('#name-reg').value.trim();
  const email = document.querySelector('#email-reg').value.trim();
  const password = document.querySelector('#pass-reg').value.trim();
  const messageError = document.querySelector('#error-reg');

  checkInputs('name-reg', 'email-reg', 'pass-reg');
  checkUser(name, email, password, messageError);
}
