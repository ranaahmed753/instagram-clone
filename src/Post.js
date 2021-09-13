import React, { useState } from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import TelegramIcon from '@material-ui/icons/Telegram';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { IconButton } from '@material-ui/core';
import Modal from 'react-modal';

const Post = ({username,caption,imageUrl}) => {
    const [like,setLike] = useState('');
    const [open,setOpen] = useState(true);
    const handleMoreHorizontal = () => {
      console.log('press');
       
    }
    return (
        <div className='post'>
            <div className='post__header'>
            <Avatar
                className='post__avatar'
                alt=''
                src={imageUrl}
            />
            <h3>{username}</h3>
            <IconButton className='moreHorizontal' onClick={handleMoreHorizontal}>
            <MoreHorizIcon />
            </IconButton>
            
            </div>
           
            <img className='post__image' alt='' src={imageUrl}/>
            <div className='post__footer'>
                <FavoriteBorderIcon  onClick={() => setLike('unlike')}  className='favouriteBorderIcon'/>
                <ModeCommentOutlinedIcon className='modeCommentIcon'/>
                <TelegramIcon className='telegramIcon'/>
                <div className='post__footerRight'>
                    <TurnedInNotIcon className='turnedInnotIcon'/>
                </div>
                
            </div>
            <h4 className='post__text'><strong>{username}: </strong>{caption}</h4>
        </div>
    );
};

export default Post;