import request from '../../services/request';

const getUserProgress = async (token) => {
  const result = await request('/user/api/progress', 'POST', { token });
  return result;
};
