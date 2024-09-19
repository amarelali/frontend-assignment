import { render } from "preact";
import "./index.css";
import router from "./router/index.tsx";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./app/store.ts"
render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
  document.getElementById("app")!
);
