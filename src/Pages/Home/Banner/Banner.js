import React from 'react';
import './Banner.css';
import bannerImg from '../../../images/bannerbackground.png';
import { Box } from '@mui/material';



const Banner = () => {
    return (
        <Box sx={{ width: 1 }}>
            <div className="boxx">
                <div>
                    <h1 className="txt-position">Banner</h1>
                    <img src={bannerImg} alt="" />
                </div>
            </div>
        </Box>
    );
};

export default Banner;