import request from '../../services/request';

const logBtn = document.getElementById('btn-log');
const form = document.getElementById('log');

function checkInputs(...ids) {
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (!el.value.trim()) {
      el.style.borderColor = 'red';
      el.addEventListener('focus', (e) => {
        e.target.style.borderColor = '';
      });
    }
  });
}

async function checkUser(e) {
  e.preventDefault();
  const email = document.getElementById('email-log').value.trim();
  const password = document.getElementById('password-log').value.trim();
  const message = document.querySelector('.message-error');
  const response = await request('getStatusLog', 'POST', { email, password });

  checkInputs('email-log', 'password-log');

  if (response.status === '401') {
    message.classList.add('display-block');
  } else {
    form.submit();
    console.log(response.user[0]);
  }
}

logBtn.addEventListener('click', checkUser);
