import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log('Iniciando login com email e senha');
    console.log('Email:', email);
    console.log('Password:', password);

    try {
      const response = await axios.post('/api/login', { email, password });
      console.log('Login bem-sucedido:', response.data);
      alert('Login bem-sucedido!');
      // Redirecionar ou atualizar o estado da aplicação
    } catch (error) {
      console.error('Erro no login:', error);
      alert('Falha no login. Verifique suas credenciais.');
    }
  };

  const handleGoogleLoginSuccess = async (credentialResponse) => {
    console.log('Google Login Success:', credentialResponse);
    try {
      const response = await axios.post('/api/google-login', { token: credentialResponse.credential });
      console.log('Login bem-sucedido com Google:', response.data);
      alert('Login bem-sucedido com Google!');
      // Redirecionar ou atualizar o estado da aplicação
    } catch (error) {
      console.error('Erro ao fazer login com Google:', error);
      alert('Falha no login com Google. Tente novamente.');
    }
  };

  const handleGoogleLoginError = () => {
    console.error('Google Login Failed');
    alert('Falha no login com Google. Tente novamente.');
  };

  return (
    <GoogleOAuthProvider clientId="575274673543-csssfh0g42q4hk6nrqtq9gij1rr1d11g.apps.googleusercontent.com">
      <div className="h-screen w-full font-sans bg-custom-gradient flex justify-center items-center">
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <form onSubmit={handleLogin} className="max-w-sm m-auto p-10 bg-white bg-opacity-25 rounded shadow-xl">
              <p className="text-white text-center text-lg font-bold">LOGIN</p>
              <div className="mt-4">
                <label className="block text-sm text-white" htmlFor="email">
                  E-mail
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                  type="email"
                  id="email"
                  placeholder="Digite o e-mail"
                  aria-label="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm text-white">Senha</label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                  type="password"
                  id="password"
                  placeholder="Digite a sua senha"
                  aria-label="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mt-4 flex justify-between items-center">
                <button
                  className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                  type="submit"
                >
                  Entrar
                </button>
                <a
                  className="inline-block align-baseline font-bold text-sm text-white hover:text-red-400"
                  href="#"
                >
                  Esqueceu a senha?
                </a>
              </div>
              <div className="text-center mt-4">
                <GoogleLogin
                  onSuccess={handleGoogleLoginSuccess}
                  onError={handleGoogleLoginError}
                />
              </div>
              <div className="text-center mt-4">
                <a
                  className="inline-block align-baseline font-bold text-sm text-white hover:text-red-400"
                  href="#"
                >
                  Criar uma conta
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Login;
