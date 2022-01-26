import "./App.css";
import { Routes, Route } from "react-router-dom";
import PetForm from "./routes/PetForm";
import Login from "./routes/Login";
import Layout from "./components/Layout";
import Pets from "./routes/Pets";
import { AuthProvider, RequireAuth } from "./context/auth-context";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Pets />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <PetForm></PetForm>
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
