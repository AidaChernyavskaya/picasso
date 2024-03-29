import React from 'react';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/AppRouter";
import {Provider} from "react-redux";
import {store} from "./store";

function App() {
  return (
      <BrowserRouter>
          <Provider store={store}>
              <AppRouter/>
          </Provider>
      </BrowserRouter>
  );
}

export default App;
