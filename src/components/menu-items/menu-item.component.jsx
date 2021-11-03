import React from "react";
import './menu-item.css';

const MenuItem = ({title, imageURL, size}) =>{
    return(
        <div className={`${size} menu-items`}>
            <div 
            style={{
                backgroundImage : `url(${imageURL})`,
                backgroundSize : 'cover',
                backgroundPosition : 'center'
            }}
            className="bg-image"></div>
                <div className='content'>
                    <h1 className='title'>{title}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
        </div>
    )
}

export default MenuItem;