import React from 'react';
import './Inbox.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';

const Inbox = () => {
    return (
        <div className='inbox'>
            
            <div className='inbox__parent'>
                <div className='inbox__left'>
                    <div className='inbox__option'>
                        <div className='inboxOption__left'>
                        <h2>codingguru205</h2>
                        <IconButton>
                            <ExpandMoreIcon/>
                        </IconButton>
                        </div>
                        
                        <IconButton className='inboxOption__edit'>
                            <EditIcon/>
                        </IconButton>
                    </div>
                </div>
                <div className='inbox__right'>
                    <TelegramIcon/>
                    <h2>Your Messages</h2>
                    <h3>Send private photos and messages to a friend or group</h3>
                    <button onClick={() => alert('send message')}>Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default Inbox;