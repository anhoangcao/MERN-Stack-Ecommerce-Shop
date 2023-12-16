import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./redux/store";

const root = document.getElementById('root');

const rootElement = createRoot(root);

rootElement.render(
  <Provider store={Store}>
    <App />
  </Provider>
);

reportWebVitals();
