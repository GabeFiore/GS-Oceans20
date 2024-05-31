function Login() {
  return (
    <>
      <div className="h-screen w-full font-sans bg-custom-gradient flex justify-center items-center">
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <form className="max-w-sm m-auto p-10 bg-white bg-opacity-25 rounded shadow-xl">
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
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm text-white">Senha</label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                  type="password"
                  id="password"
                  placeholder="Digite a sua senha"
                  arial-label="password"
                  required
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
    </>
  );
}

export default Login;
