import React from 'react'
import PromoItem from '../promoItem/PromoItem';
import { promo } from '../../data/promoDB'


const Promo = () => {
    return (
        <div className='promo container'>

            <h2 className='page-title'>Акції</h2>
            <div className="promo-items">
                {promo.map(item => <PromoItem key={item.img} img={item.img} link={item.link} />)}
            </div>


        </div>
    )
}

export default Promo