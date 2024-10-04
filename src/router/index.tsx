import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { App } from "../app";
import ProtectedRoutes from "../components/protectedRoutes";
import Register from "../pages/register";
import Cookies from "js-cookie";
import HomePage from "../pages/HomePage";

const isLoggedIn = Boolean(Cookies.get("jwt"));
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <ProtectedRoutes to="/register" isLoggedIn={isLoggedIn}>
            <App />
            <HomePage />
          </ProtectedRoutes>
        }
      ></Route>

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
