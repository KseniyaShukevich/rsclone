import getUserToken from '../services/data-user';
import request from '../services/request';
import { LSTORAGEID } from '../services/constants';

const exit = document.querySelector('#exit');
const containerTraining = document.querySelector('#container-training');

function addWordToLStorage(e) {
  const trainingWord = e.target.textContent;
  localStorage.setItem(`${LSTORAGEID}word`, trainingWord);
}

function addStyles(card, isLearned) {
  if (isLearned) {
    card.classList.add('complete');
  } else {
    card.classList.add('not-complete');
  }
}

function createCard(word, isLearned) {
  const card = document.createElement('a');
  card.href = '/training';
  card.className = 'd-block';
  card.textContent = word;
  addStyles(card, isLearned);
  card.addEventListener('click', addWordToLStorage);
  return card;
}

function addTrainings(progress) {
  const keys = Object.keys(progress);
  keys.forEach((key) => {
    containerTraining.append(createCard(key, progress[key].learned));
  });
}

function fillUserAccount(dataUser) {
  const userName = document.querySelector('#user-name');
  const userPhoto = document.querySelector('#user-photo');
  userName.textContent = dataUser[0].name;
  if (dataUser[0].image) {
    userPhoto.style.backgroundImage = `url("./${dataUser[0].image}")`;
  } else {
    userPhoto.style.backgroundImage = 'url("./avatar.jpg")';
  }
  addTrainings(dataUser[0].progress);
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
