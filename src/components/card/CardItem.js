import React, { useContext, useEffect, useState } from 'react'
import ShopCart from '../cart/ShopCart'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { RemoveCircle } from '@mui/icons-material';
import axios from 'axios';
import Context from '../../context/context';

const CardItem = ({ name, id, desc, img, price, weight, size, imgHover, onClick }) => {
    const [over, setOver] = useState(false)
    const [count, setCount] = useState(1);
    const [cartItems, setCardItems] = useState([]);
    const totalPrice = count * price;
    const { totalSum, setTotalSum } = useContext(Context);

    useEffect(() => {

    }, [])


    const btnPlus = () => {
        setCount(() => count + 1)
    }
    const btnMinus = () => {
        if (count > 1) {
            setCount(() => count - 1)
        }

    }

    const addItems = () => {
        onClick({ name, img, price, count, size });
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
                    <button onClick={addItems} className='order cu-p'>
                        Замовити
                    </button>
                </div>
            </div>

        </div >
    )
}

export default CardItem