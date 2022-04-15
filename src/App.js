import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Pizza from './components/pizza/Pizza';
import Promo from './components/promo/Promo';
import Salads from './components/salads/Salads';
import ShopCartPage from './components/shopcart-page/ShopCartPage';
import Context from './context/context';


function App() {
  const { totalSum, setTotalSum } = useContext(Context);
  console.log(totalSum);

  useEffect(() => {
    axios.get('https://6252b0d27f7fa1b1dde8d205.mockapi.io/order')
      .then(res => {
        let total = res.data
        const sum = total.map(item => item.price).reduce((prev, curr) => prev = curr, 0);
        const countTotal = total.map(item => item.count).reduce((prev, curr) => prev + curr, 0);
        let sumTotal = sum * countTotal;
        setTotalSum(sumTotal)
        console.log(sumTotal);
      })
  }, [totalSum])

  return (

    <div className="App">
      <div className="app__container">
        <Router>
          <Header />
          <div className="main-content container">
            <Routes>
              <Route path='/' activeClassName='is-active' element={<Pizza />} />
              <Route path='/promo' element={<Promo />} />
              <Route path='/salads' element={<Salads />} />
              <Route path='/shop-cart-page' element={<ShopCartPage />} />

            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </div>



  );
}

export default App;
