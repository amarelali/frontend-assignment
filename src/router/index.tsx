import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { App } from "../app";
import ProtectedRoutes from "../components/protectedRoutes";
import Register from "../pages/register";

const isLoggedIn = false;
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <ProtectedRoutes to="/register" isLoggedIn={isLoggedIn}>
            <App />
          </ProtectedRoutes>
        }
      >
      </Route>

      <Route
        path="register"
        element={
          <ProtectedRoutes to="/" isLoggedIn={!isLoggedIn}>
            <Register />
          </ProtectedRoutes>
        }
      />
    </>
  )
);
export default router;
