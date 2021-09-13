import React from 'react';
import './Header.css';
import Inbox from './Inbox';
import Explore from './Explore';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import TelegramIcon from '@material-ui/icons/Telegram';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import HeaderOption from './HeaderOption';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>
            <div className='header__left'>
                <img 
                  className='headerImage' 
                  alt='' 
                  src='https://www.flaticon.com/svg/vstatic/svg/174/174855.svg?token=exp=1616816236~hmac=4d9af702686a35e0bee803ac689a77b7'
                />

            <div className='header__search'>
                <SearchIcon/>
                <input placeholder='search'/>
            </div>
            
            </div>
           
            <div className='header__right'>
            
               <Link exact activeStyle={{color:'black'}} to='/'>
               <HeaderOption Icon={HomeIcon}/>
               </Link>
                <Link exact activeStyle={{color:'black'}} to='/inbox'>
                <HeaderOption Icon={TelegramIcon}/>    
                </Link>
               <Link exact activeStyle={{color:'black'}} to='/explore'>
               <HeaderOption Icon={ExploreIcon}/>
               </Link>
               <Link>
               <HeaderOption Icon={FavoriteBorderIcon}/>
               </Link>
               <Link exact activeStyle={{color:'black'}} to='/profile'>
               <HeaderOption avatar='https://www.hazimzakariya.com/images/IG_Sonny.jpeg'/>
               </Link>
               
            </div>
           
           
        </div>
    );
};

export default Header;