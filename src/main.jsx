  import { StrictMode } from "react";
  import { createRoot } from "react-dom/client";
  import "./index.css";
  import "bootstrap/dist/css/bootstrap.min.css";
  import "bootstrap/dist/js/bootstrap.bundle.min.js";
  import { store } from "./redux/store.js";
  import { Provider } from "react-redux";

  import AppRouter from "./Utility/AppRouter.jsx";

  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </StrictMode>
  );
