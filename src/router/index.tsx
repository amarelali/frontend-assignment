import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { App } from "../app";
import ProtectedRoutes from "../components/ProtectedRoutes";

const isLoggedIn = true;
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
            <h1> register page </h1>
          </ProtectedRoutes>
        }
      />
    </>
  )
);
export default router;
