import { render } from "preact";
import "./index.css";
import router from "./router/index.tsx";
import { RouterProvider } from "react-router-dom";

render(<RouterProvider router={router} />, document.getElementById("app")!);
