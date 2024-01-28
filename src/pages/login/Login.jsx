// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Login.scss';
import useInputChange from '../../hooks/useInputChange.js';
import { sqlInyectionRegex } from '../../configs/regex';
import useGetLogin from '../../hooks/useGetLogin.js'

function Login() {

    const { formData, handleInputChange } = useInputChange({
        username: '',
        password: ''
    });

    const { loginError, loginUser } = useGetLogin();
    const regexSQL = sqlInyectionRegex

    const handleSubmit = (event) => {
        event.preventDefault();
        loginUser(formData);
    };

    const isButtonDisabled = formData.username === '' || formData.password === '' || formData.password.length < 5 || formData.username.length < 5;

    return (
        <div className="login-container">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Usuario</label>
                <input
                    type="text"
                    id="username"
                    value={formData.username}
                    onChange={(e) => handleInputChange('username', e.target.value, regexSQL)}
                    placeholder="Ingrese su usuario"
                />

                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder="Ingrese su contraseña"
                />

                <button type="submit" disabled={isButtonDisabled}>
                    Iniciar Sesión
                </button>
            </form>
            {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
        </div>
    );
}

export default Login;