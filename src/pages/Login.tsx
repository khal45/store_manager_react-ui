// Imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../assets/styles/login-styles.module.css";

const Login = () => {
  // state declarations
  const [errorMessage, setErrorMessage] = useState<string>("");

  // hooks
  const navigate = useNavigate();

  const handleLogin = async (formData: FormData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    const apiUrl = "https://store-manager-server.onrender.com/api/v1";

    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      };
      const response = await fetch(apiUrl, options);
      const data = await response.json();

      if (!response.ok) {
        if (data.message) {
          setErrorMessage(data.message);
        } else {
          setErrorMessage("Login failed! check credentials and try again.");
        }
      }

      if (data.success) {
        const oneDay = 60 * 60 * 24;
        const token = data.accessToken;
        document.cookie = `accessToken=${token}; path=/; max-age=${oneDay}; secure; samesite=strict;`;
        navigate("/products");
      }
    } catch (error) {
      console.error("Error making request", error);
    }
  };

  return (
    <div className={styles.loginPage}>
      {errorMessage && <p className={styles.errorMsg}>{errorMessage}</p>}
      <div className={styles.container}>
        <div className={styles.h1Container}>
          <h1>Login</h1>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleLogin(new FormData(event.currentTarget));
          }}
        >
          <div className={styles.usernameContainer}>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              required
            />
          </div>
          <div className={styles.passwordContainer}>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div className={styles.btnContainer}>
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
