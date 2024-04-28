import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "@/store/store.ts";
import { Provider } from "react-redux";
import InjectTailwind from "./InjectTailwind.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* HOC -> Higher Order Component */}
    <Provider store={store}>
      <BrowserRouter>
      <InjectTailwind>

        <App />
      </InjectTailwind>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
