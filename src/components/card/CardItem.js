import React, { useEffect, useState } from 'react'
import ButtonOrder from '../buttonOrder/ButtonOrder'
import ShopCart from '../cart/ShopCart'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { RemoveCircle } from '@mui/icons-material';


const CardItem = ({ name, id, desc, img, price, weight, size, imgHover }) => {
    const [over, setOver] = useState(false)
    const [count, setCount] = useState(1);
    // const [productCount, setProdcutCount] = useState();
    const totalPrice = count * price;
    useEffect(() => {
        console.log('1');
    }, [count, over])





    const btnPlus = () => {
        setCount(() => count + 1)
    }
    const btnMinus = () => {
        if (count > 1) {
            setCount(() => count - 1)
        }

    }
    const addToCard = () => {
        let order = [name, price, img, count, totalPrice]
        localStorage.setItem('order', [order])
        console.log(order);



    }


    return (
        <div className='card-item' >

            <div className="product-size" >
                <span className='weight-title'>{weight ? weight : null} <small>грм</small> </span>
                <span className='size-title' >{size ? size : null} см</span>
            </div>

            <div onMouseOver={() => setOver(false)}
                onMouseOut={() => setOver(true)}
                className="product-img">
                <img
                    src={over ? img : imgHover}
                    alt={name}
                />
            </div>

            <div className="product-title">
                <h2 className='product-title-item'>{name}</h2>
            </div>

            <div className="product-desc">
                <p className='card-desc' >{desc}</p>
            </div>

            <div className="product-order">
                <div className="product-price">
                    <span className='product-price-span'>{totalPrice}</span>
                    <small> грн</small>
                </div>
                <div className="produt-count">
                    <button onClick={btnMinus} className='btn-minus btn-count cu-p'>
                        <RemoveCircle sx={{ fill: 'red' }} />
                    </button>
                    <h3>{count}</h3>

                    <button onClick={btnPlus} className='btn-plus btn-count cu-p'>
                        <AddBoxIcon sx={{ fill: 'green' }} />
                    </button>

                </div>
                <div className="product-order">
                    <ButtonOrder addToCard={addToCard} />
                </div>
            </div>

        </div>
    )
}

export default CardItem