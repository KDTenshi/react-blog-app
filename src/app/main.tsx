import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./layout/App";
import { Provider } from "react-redux";
import { appStore } from "./store/appStore";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={appStore}>
      <Router>
        <App />
      </Router>
    </Provider>
  </StrictMode>
);
