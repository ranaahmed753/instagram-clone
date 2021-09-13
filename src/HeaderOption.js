import { Avatar } from '@material-ui/core';
import React from 'react';
import './HeaderOption.css';



const HeaderOption = ({Icon,avatar}) => {
    return (
        <div className='headerOption'>
            {Icon && <Icon className='headerOption__icon'/>}
            {avatar && <Avatar src={avatar} className='headerOption__avatar'/>}
            
        </div>
    );
};

export default HeaderOption;