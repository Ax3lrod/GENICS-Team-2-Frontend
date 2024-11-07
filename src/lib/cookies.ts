import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getToken = (): string => cookies.get('@ise-its/token');

export const setToken = (token: string) => {
  cookies.set('@ise-its/token', token, { path: '/' });
};

export const removeToken = () =>
  cookies.remove('@ise-its/token', { path: '/' });
