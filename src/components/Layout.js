import { Link, Outlet } from "react-router-dom";
import AuthStatus from "./AuthStatus";
import "./Layout.css";

function Layout() {
  return (
    <div className="navbar-header">
      <AuthStatus />

      <div className="navbar-titles">
        <Link className="navbar-title" to="/">
          Lista de Pets
        </Link>
        <Link className="navbar-title" to="/protected">
          Inserir um Pet
        </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Layout;
