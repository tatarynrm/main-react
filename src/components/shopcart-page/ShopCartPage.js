import React from 'react'
import axios from 'axios';


import { useState, useEffect } from 'react';

const ShopCartPage = () => {
    const [pizzas, setPizzas] = useState();
    console.log(pizzas);
    useEffect(() => {
        axios('https://6252b0d27f7fa1b1dde8d205.mockapi.io/pizzas')
            .then(pizzas => setPizzas(pizzas.data))
    }, [])

    return (

        <div className='main-content'>
            <h2 className='page-title'>Ваше замовлення</h2>
            <div className="shop-cart-contet content">
                <div className="shop-cart-inner">
                    <div className="shop-cart-info">
                        <div className="shop-products">
                            Total
                        </div>
                        <div className="count-price">
                            <span className='count'>Count</span>
                            <span className='price'>Price</span>
                        </div>
                    </div>
                    {pizzas.map((item, i) =>
                        <p>{item.name}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ShopCartPage