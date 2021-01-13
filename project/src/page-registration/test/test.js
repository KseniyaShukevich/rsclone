import request from '../../services/request';

const contact = [
  {
    id: 2, name: 'ssfdf', value: 'fffffAf', marked: false,
  },
];
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

getResult();