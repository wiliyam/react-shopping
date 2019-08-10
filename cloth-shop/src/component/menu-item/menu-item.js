import React from 'react';
import './menu-item.scss'


const menuItem = (props) => {

    console.log(props)
    return ( 
    <div style={{backgroundImage:`url(${props.imgUrl})`}} className={`${props.size} menu-item`}>
        <div className='background-image'  style={{backgroundImage:`url(${props.imgUrl})`}}>

        </div>
    <div className='content'>
        <h1 className='title'>{props.title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
    </div>
</div> );
}
 
export default menuItem;