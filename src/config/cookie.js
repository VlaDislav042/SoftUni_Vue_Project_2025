import Cookies from 'js-cookie';

export const getCookie = name => Cookies.get(name);
export function setCookie(name, value, expiresInMin) {
  const expires = new Date(new Date().getTime() + expiresInMin * 60 * 1000);
  Cookies.set(name, value, { expires });
}
