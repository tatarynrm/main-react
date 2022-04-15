import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import uniqid from 'uniqid'
import { motion } from "framer-motion"

const ShopCartPage = () => {

    const [items, setItems] = useState();

    useEffect(() => {
        axios.get('https://6252b0d27f7fa1b1dde8d205.mockapi.io/order')
            .then(item => setItems((item.data)))


    }, [])

    const deleteOrder = (id) => {
        axios.delete(`https://6252b0d27f7fa1b1dde8d205.mockapi.io/order/${id}`)
        setItems((prev) => prev.filter(item => item.id !== id))

    }



    return (
        <div>
            <div className="cart-order-container">
                <div className="cart-order">
                    <div className="order-left"></div>
                    <div className="order-right">
                        <div className="order-tab">
                            <span className="order-tab-produt">Товар</span>
                            <div className="order-count-price">
                                <span className='order-count'>К-сть</span>
                                <span className='order-price'>Ціна</span>
                            </div>
                        </div>
                        <div
                            className="order-items">

                            {items && items.map((item) =>
                                <div className="order-item" key={uniqid()}>
                                    <div className="order-img-text">
                                        <img width='80px' height='80px' src={item.img} alt="" />
                                        <h3>{item.name}</h3>
                                    </div>
                                    <div className="order-counts">

                                        <span className='order-minus order-span'>-</span>

                                        <h4 className='order-counter'>{item.count}</h4>

                                        <span className='order-plus order-span'>+</span>

                                    </div>
                                    <div className="order-prices">
                                        <span className='order-prices-span'>{item.price} грн</span>
                                    </div>
                                    <div onClick={() => deleteOrder(item.id)} className="delete-order">&times;</div>

                                </div>
                            )}

                        </div>
                        <div className="order-checkbox">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Без серветок</label>
                        </div>
                        <div className="order-total">
                            <div className="order-full-price">
                                <span>Разом: 481 грн</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* {items && items.map((item, id) =>
                <div key={item.id}>
                    <p>{item.name}</p>
                    <span>{item.desc}</span>


                </div>
            )} */}
        </div >

    )
}

export default ShopCartPage