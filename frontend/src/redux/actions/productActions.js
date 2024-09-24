import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
  const res = await axios.get('/api/products');
  dispatch({ type: 'FETCH_PRODUCTS', payload: res.data });
};

export const createProduct = (product) => async (dispatch) => {
  const res = await axios.post('/api/products', product);
  dispatch({ type: 'CREATE_PRODUCT', payload: res.data });
};
