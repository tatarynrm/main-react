// import { Pagination } from '@mui/material'
import React, { useEffect } from 'react'
import axios from 'axios'
import uniqid from 'uniqid';
import { useDispatch, useSelector } from 'react-redux';

import CardItem from '../card/CardItem'
import Faq from '../faq/Faq'
import SimpleSlider from '../slick-slider/SimpleSlider'
// import { pizzas } from '../../data/pizzaDB'
// import { getPizzasSelector } from 'store/pizzas/selectors';
import { getPizzasSelector } from '../../store/pizzas/selectors'; 
import { pizzasActions } from '../../store/pizzas';

const Pizza = () => {
    const dispatch = useDispatch();
    const { pizzas } = useSelector(getPizzasSelector);

    console.log(pizzas);
    const onAddToCard = (obj) => {
        // console.log(obj);
        dispatch(pizzasActions.getPizzas()); 
        // axios.post('https://6252b0d27f7fa1b1dde8d205.mockapi.io/order', obj)

    }

    useEffect(()=>{
        dispatch(pizzasActions.getPizzas()); 
    }, [])

    return (
        <div className='pizza content container'>
            <SimpleSlider />
            <h2 className='page-title'>Піцца</h2>
            <div className="pizza-content content">

                {pizzas && pizzas.map((item, id) => <CardItem
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