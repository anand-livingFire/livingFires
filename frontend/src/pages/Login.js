import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';
import LoginForm from '../components/Auth/LoginForm';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(login(values));
  };
  console.log("login coming");
  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
