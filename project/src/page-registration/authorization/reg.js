import request from '../../services/request';

async function checkUser(name, email, password, messageError) {
  if (name && (/\w+@\w+\.\w+/.test(email)) && (password.length > 5)) {
    const form = document.getElementById('reg');
    const result = await request('registration', 'POST', {
      name, email, password, progress: [],
    });

    // if ()

    if (!result.status) {
      messageError.classList.add('display-block');
    } else {
      form.submit();
    }
  } else {
    messageError.classList.add('display-block');
  }
}

export default async function regUser(e) {
  e.preventDefault();
  const name = document.getElementById('name-reg').value.trim();
  const email = document.getElementById('email-reg').value.trim();
  const password = document.getElementById('pass-reg').value.trim();
  const messageError = document.getElementById('error-reg');

  checkUser(name, email, password, messageError);
}
