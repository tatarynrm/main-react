import React from 'react'
import Logo from '../logo/Logo'
import MenuItem from '../menu/MenuItem'
import { menu } from '../../data/menuDB'
import ShopCart from '../cart/ShopCart'
const Header = () => {


    return (
        <div className="header__wrapper">
            <header className='header'>
                <div className="header__logo">
                    <Logo />
                </div>
                <div className="header__nav">

                    {menu.map((item, idx) =>

                        <MenuItem img={item.img} link={item.link} name={item.name} id={item.id} key={item.id} sub={item.sub_menu} />
                    )}
                </div>

                <div className="header__cart">
                    <ShopCart />
                </div>


            </header>

        </div>

    )
}

export default Header