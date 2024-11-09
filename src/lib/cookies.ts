import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getToken = (): string => cookies.get('login_token');

export const setToken = (token: string) => {
  cookies.set('login_token', token, { path: '/' });
};

export const removeToken = () => cookies.remove('login_token', { path: '/' });
