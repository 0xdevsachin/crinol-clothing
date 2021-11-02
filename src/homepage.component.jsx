import React from "react";
import './homepage.style.css';

const HomePage = () =>{
    return(
        <div className='homepage'>
        <div className='container'>
            <div className='menu-items'>
                <div className='content'>
                    <h1 className='title'>HATS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-items'>
                <div className='content'>
                    <h1 className='title'>JACKETS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-items'>
                <div className='content'>
                    <h1 className='title'>SNICKERS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-items'>
                <div className='content'>
                    <h1 className='title'>WOMEN</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-items'>
                <div className='content'>
                    <h1 className='title'>MEN</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
    )
};

export default HomePage;