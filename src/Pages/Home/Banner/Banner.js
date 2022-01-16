import React from 'react';
import './Banner.css';
import bannerImg from '../../../images/bannerbackground.png';


const Banner = () => {
    return (
        <div className="div-position">
            <h1 className="txt-position">Best Food Waiting For Your Tummy</h1>
            <img src={bannerImg} alt="" />
        </div>
    );
};

export default Banner;