// import { Pagination } from '@mui/material'
import React from 'react'
import { pizzas } from '../../data/pizzaDB'
import CardItem from '../card/CardItem'
import Faq from '../faq/Faq'
import SimpleSlider from '../slick-slider/SimpleSlider'
import uniqid from 'uniqid';
import axios from 'axios'



const Pizza = () => {

    const onAddToCard = (obj) => {
        console.log(obj);
        axios.post('https://6252b0d27f7fa1b1dde8d205.mockapi.io/order', obj)

    }
    return (
        <div className='pizza content container'>
            <SimpleSlider />
            <h2 className='page-title'>Піцца</h2>
            <div className="pizza-content content">

                {pizzas.map((item, id) => <CardItem
                    name={item.name}
                    desc={item.desc}
                    img={item.img}
                    imgHover={item.imgHover}
                    id={item.id}
                    price={item.price}
                    weight={item.weight}
                    size={item.size}
                    key={uniqid()}
                    onClick={(obj) => onAddToCard(obj)}
                />)}
            </div>
            <Faq />


        </div>
    )
}

export default Pizza