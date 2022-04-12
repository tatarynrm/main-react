import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const MenuItem = ({ link, img, name, id, sub }) => {
    return (

        <div className={`menu-item menu-item${id}`} >


            <NavLink className="menu-item-info" to={link}>
                <img className='menu-item-img' src={img} alt="" />
                <span key={id} className='menu-item-name'>{name}</span>
            </NavLink>
            <ul className='sub-menu'>
                {sub && sub.map((item) => <li className='sub-menu-item' key={item.link}><Link to={item.link}>{item.fran}</Link> </li>)}
            </ul>




        </div >

    )
}

export default MenuItem