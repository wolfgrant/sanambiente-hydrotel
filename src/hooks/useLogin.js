import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jsonData from '../configs/jsonForLogin.json';
import { emailRegex as regex } from '../configs/regex.js';
import useGetTreeItems from './useGetTreeItems.js';

const useLogin = () => {
  const {getTreeItemsList} = useGetTreeItems()
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const emailR = regex

  const loginUser = async (formData) => {
    const { username, password } = formData;
    const usuarios = jsonData.usuarios;

    const usuarioencontrado = usuarios.find(
      (usuario) => usuario.usuario === username && usuario.password === password
    );
    const response = await getTreeItemsList()
    console.log(response)
    /* if (usuarioencontrado) {
      localStorage.setItem('token', btoa(`${username}:${password}`));
      setLoginError('');
      navigate('/dashboard');
    } else {
      setLoginError('Usuario o contraseña incorrectos');
    } */
  };

  return {
    loginUser,
    loginError,
    emailR,
  };
};

export default useLogin;