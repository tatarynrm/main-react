import React from 'react'
import { addres } from '../../data/addresDB'
// console.log(addres);
const Addres = () => {
    return (
        <div className='addres'>
            <h2>м.Львів</h2>
            <ul>
                {addres.map(item => <li className='addres-street' key={item.id}>{item.street}</li>)}
            </ul>

        </div>
    )
}

export default Addres