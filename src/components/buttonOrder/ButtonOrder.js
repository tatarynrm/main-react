import { Button } from '@mui/material';
import React from 'react'
let clsOrder = 'order cu-p';

const ButtonOrder = ({ addToCard }) => {
    return (
        // <button onClick={addToCard} className={clsOrder} >Замовити</button>
        <Button onClick={addToCard} variant="contained" sx={{ backgroundColor: 'green', color: 'black' }}>
            Замовити
        </Button>
    )
}

export default ButtonOrder