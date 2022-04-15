import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios';
import Context from '../../context/context';

const ShopCart = () => {

    const { totalSum, setTotalSum } = useContext(Context);
    console.log(totalSum);
    useEffect(() => {

    }, [totalSum])

    return (
        <div className='shop-cart'>

            <Link className='header__cart' to={'/shop-cart-page'}>
                <img src="https://la.ua/wp-content/themes/lapiec/assets/frontend/img/icons/shopping-cart.svg" alt="" />

                <span>{totalSum} грн</span>
            </Link>
            <div className='emoji'>{totalSum > 90 ? '🙂🙂🙂' : "🙁🙁🙁" && totalSum < 10 ? 'Замовте щось' : null}</div>


        </div>
    )
}

export default ShopCart