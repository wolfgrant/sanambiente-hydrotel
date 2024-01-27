import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { emailRegex as regex } from '../configs/regex.js';
import useGetLogin from './useGetLogin.js';

const useLogin = () => {
  const { getTreeItemsList } = useGetLogin()
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const emailR = regex

  const loginUser = async (formData) => {
    const { username, password } = formData;

    /* const usuarioencontrado = usuarios.find(
      (usuario) => usuario.usuario === username && usuario.password === password
    ); */

    const response = await getTreeItemsList(btoa(`${username}:${password}`))
    console.log(typeof response)
    if (typeof response === 'string' && response.includes('401')){
      setLoginError('Usuario o contraseña incorrectos.');
    } else if (response) {
      localStorage.setItem('token', btoa(`${username}:${password}`));
      setLoginError('');
      navigate('/dashboard');
    } else {
      setLoginError('Ha ocurrido un error, porfavor intentelo más tarde.');
    }
  };

  return {
    loginUser,
    loginError,
    emailR,
  };
};

export default useLogin;