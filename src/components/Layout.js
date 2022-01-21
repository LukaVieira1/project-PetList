import { Link, Outlet } from "react-router-dom";
import AuthStatus from "./AuthStatus";

function Layout() {
  return (
    <div>
      <AuthStatus />
      <ul>
        <li>
          <Link to="/">Lista de Pets</Link>
        </li>
        <li>
          <Link to="/protected">Inserir um Pet</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

export default Layout;
