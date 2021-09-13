import React from 'react';
import './BottomOption.css';
import { Avatar } from '@material-ui/core';

const BottomOption = ({username,surname,src}) => {
    return (
        <div className='bottom__option'>
             <Avatar src={src}/>
                 <div className='sidebar__option'>
                    <h2>{username}</h2>
                    <h6>{surname}</h6>
                </div>
                <h3 className='follow'>follow</h3>
        </div>
    );
};

export default BottomOption;