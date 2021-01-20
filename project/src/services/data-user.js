import { LSTORAGEID } from './constants';

export default function getUserToken() {
  return localStorage.getItem(`${LSTORAGEID}token`);
}
