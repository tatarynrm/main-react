import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ShopCart = () => {


    return (
        <div className='shop-cart'>

            <Link className='header__cart' to={'/shop-cart-page'}>
                <img src="https://la.ua/wp-content/themes/lapiec/assets/frontend/img/icons/shopping-cart.svg" alt="" />

                <span>100грн</span>
            </Link>



        </div>
    )
}

export default ShopCart