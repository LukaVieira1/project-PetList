import "./Login.css";
import { useAuth } from "../context/auth-context";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const data = {
      email,
      password,
    };

    auth.login(data, () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <>
      <div className="container">
        <h1>Faça seu login</h1>
        <div className="login">
          <form className="login-form" onSubmit={handleSubmit}>
            <p>Email</p>
            <input type="email" name="email" />
            <p>Senha</p>
            <input type="password" name="password" />
            <button type="submit">Entrar</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
