const Login = () => {
  return (
    <div id="login-page">
      <p className="error-msg"></p>
      <div className="container">
        <div className="h1-container">
          <h1>Login</h1>
        </div>
        <form>
          <div className="username-container">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              required
            />
          </div>
          <div className="password-container">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="btn-container">
            <button type="submit" id="login-btn">
              LOG IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
