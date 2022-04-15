import React, { useEffect, useState, useContext } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
// import axios from 'axios';
import Context from '../../context/context';
import { getPizzasSelector } from '../../store/pizzas/selectors';

const ShopCart = () => {
    const { pizzas } = useSelector(getPizzasSelector);
    const { totalSum, setTotalSum } = useContext(Context);

    const [xxx, yyy] = useState(true)
    console.log(totalSum);
    useEffect(() => {
        yyy(() => !xxx)
    }, [pizzas])
console.log(pizzas);

    return (
        <div className='shop-cart'>

            <Link className='header__cart' to={'/shop-cart-page'}>
                <img src="https://la.ua/wp-content/themes/lapiec/assets/frontend/img/icons/shopping-cart.svg" alt="" />

                <span>{totalSum} грн</span>
            </Link>
            {xxx && <div className='emoji'>{totalSum > 90 ? '🙂🙂🙂' : "🙁🙁🙁" && totalSum < 10 ? 'Замовте щось' : null}</div>}


        </div>
    )
}

export default ShopCart