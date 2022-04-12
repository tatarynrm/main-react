import React from 'react'
import { salads } from '../../data/saladsDB'
import CardItem from '../card/CardItem'
const Salads = ({ name, img }) => {
    return (
        <div className='slads-content main-content content container'>
            <h2 className='page-title'>Салати</h2>
            {salads.map(item => <CardItem name={salads.name} img={salads.img} />)}
        </div>
    )
}

export default Salads