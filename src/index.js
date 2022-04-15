import React, { useState } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from "react-dom/client";
import './index.css';
import Context from './context/context'
import App from './App';
import { store } from '../src/store/store';

const MainApp = () => {
  const [totalSum, setTotalSum] = useState(0);


  return (
    <React.StrictMode>
      <Provider store={store}>
        <Context.Provider value={{ totalSum, setTotalSum }}>
          <App />
        </Context.Provider>
      </Provider>
    </React.StrictMode>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MainApp />
);

