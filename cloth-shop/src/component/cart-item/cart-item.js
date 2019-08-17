import './cart-item.scss'
import React from 'react'



const cartItem=(props)=>(
    <div className='cart-item'>
        <img src={props.item.imageUrl} alt='item'/>
        <div className='item-details'>
            <span className='name'>{props.item.name}</span>
            <span className='price'>{props.item.quantity} x ₹{props.item.price}</span>
        </div>
    </div>
)

export default cartItem