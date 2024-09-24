import axios from 'axios';

export const login = (credentials) => async (dispatch) => {
  const res = await axios.post('/api/auth/login', credentials);
  localStorage.setItem('token', res.data.access_token);
  dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
};
