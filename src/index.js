import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import Context from './context/context'
import App from './App';

const MainApp = () => {
  const [totalSum, setTotalSum] = useState(0);


  return (
    <React.StrictMode>
      <Context.Provider value={{ totalSum, setTotalSum }}>
        <App />
      </Context.Provider>

    </React.StrictMode>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MainApp />
);

