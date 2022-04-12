import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Pizza from './components/pizza/Pizza';
import Promo from './components/promo/Promo';
import Salads from './components/salads/Salads';
import ShopCartPage from './components/shopcart-page/ShopCartPage';



function App() {
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
