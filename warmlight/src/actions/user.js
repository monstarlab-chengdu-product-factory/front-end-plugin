import request from '../utils/request';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (username, password) => ({
  type: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
  payload: new Promise(resolve => {
    setTimeout(() => {
      resolve({ username, password });
    }, 1000);
  })
});
