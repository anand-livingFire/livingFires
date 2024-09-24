import axios from 'axios';

export const createPaymentIntent = async (amount) => {
  const response = await axios.post('/api/payment/create-payment-intent', { amount });
  return response.data;
};

export const confirmPayment = async (paymentIntentId) => {
  const response = await axios.post('/api/payment/confirm-payment', { paymentIntentId });
  return response.data;
};
