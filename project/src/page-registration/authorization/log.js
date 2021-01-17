import request from '../../services/request';

const logBtn = document.getElementById('btn-log');
const form = document.getElementById('log');

async function checkUser(e) {
  e.preventDefault();
  const email = document.getElementById('email-log').value;
  const password = document.getElementById('password-log').value;
  const response = await request('getStatusLog', 'POST', { email, password });
  // const r = await request('redirect');
  // const response = await request('log', 'POST', { email, password });
  if (response.status === '401') {
    const message = document.querySelector('.message-error');
    message.classList.add('display-block');
  } else {
    form.submit();
    // const r = await request('redirect');
    // document.location.href = './main.html';
    console.log(response.user[0]);
  }
}

logBtn.addEventListener('click', checkUser);
