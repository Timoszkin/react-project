import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store, persistedStore } from "./store/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "./context/ThemeProvider";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
