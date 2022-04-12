// import { Pagination } from '@mui/material'
import React from 'react'
import { pizzas } from '../../data/pizzaDB'
import CardItem from '../card/CardItem'
import Faq from '../faq/Faq'
import SimpleSlider from '../slick-slider/SimpleSlider'


const Pizza = () => {

    return (
        <div className='pizza content '>
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
                    key={item.id}

                />)}
            </div>
            <Faq />


        </div>
    )
}

export default Pizza