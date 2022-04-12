import React from 'react'


const PromoItem = ({ img, link }) => {

    return (
        <div className='promo-item-product'>
            <div className="promo-item-inner">
                <img src={img} alt={link} />
            </div>
            <button data-id={link} className='promo-btn'>Детальніше</button>
        </div>
    )
}

export default PromoItem