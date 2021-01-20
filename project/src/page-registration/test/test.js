import { Modal } from 'bootstrap';
import request from '../../services/request';

const contact = [{
  id: 2,
  name: 'ssfdf',
  value: 'fffffAf',
  marked: false,
}];
const id = 2;

async function getResult() {
  const data = await request('contacts');
  const dataPost = await request('contacts', 'POST', contact);
  const result = await request(`contacts/${id}`, 'DELETE');

  const updated = await request(`contacts/${id}`, 'PUT', { ...contact, marked: true });
  // синхронизация фронтенда и бэкенда
  contact.marked = updated.marked;

  console.log(data);
  console.log(dataPost);
  console.log(result);
}

function switchColorTheme() {
  const switchThemeButton = document.querySelector('.form-switch_color');

  switchThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
      localStorage.setItem('colorTheme', 'dark');
    } else {
      localStorage.setItem('colorTheme', 'light');
    }
  });
}

function setColorTheme() {
  const colorValue = localStorage.getItem('colorTheme');
  const switchThemeInput = document.querySelector('.form-switch_color input');

  if (colorValue === 'dark') {
    document.body.classList.add('dark');
    switchThemeInput.setAttribute('checked', '');
  }
}

getResult();
switchColorTheme();
setColorTheme();
