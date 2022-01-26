import React from "react";
import { useAuth } from "../context/auth-context";
import { useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import "./AuthStatus.css";

function AuthStatus() {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.user) {
    return (
      <Link className="auth-title" to="/protected">
        Faça seu login aqui
      </Link>
    );
  }
  return (
    <h1 className="auth-title">
      Bem vindo {auth.user.name}!
      <button
        className="auth-button"
        onClick={() => {
          auth.logout(() => navigate("/"));
        }}
      >
        Sair
      </button>
    </h1>
  );
}

export default AuthStatus;
