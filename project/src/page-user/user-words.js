import request from '../services/request';

export default async function getUserProgress(token) {
  const result = await request('/user/api/progress', 'POST', { token });
  return result;
}
