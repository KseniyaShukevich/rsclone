import URL from './url';

export default async function request(url, method = 'GET', data = null) {
  const headers = {};
  let body;

  if (data) {
    headers['Content-Type'] = 'application/json';
    body = JSON.stringify(data);
  }

  const response = await fetch(`${URL}${url}`, {
    method,
    headers,
    body,
  });

  if (!response.ok) {
    console.warn('Error', response.statusText);
    return null;
  }

  const result = await response.json();
  return result;
}
