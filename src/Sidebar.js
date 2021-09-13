import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import BottomOption from './BottomOption';


const Sidebar = () => {
    return (
        <div className='sidebar'>
           
            <div className='sidebar__top'>
                <Avatar src='https://avatars.githubusercontent.com/u/8461930?s=460&v=4'/>
                <div className='sidebar__option'>
                    <h2>codingguru205</h2>
                    <h4>Coding Guru</h4>
                </div>
                <h3 className='switch'>Switch</h3>
            </div>

            <div className='sidebar__middle'>
                <h3>Suggestions For You</h3>
                <h4>See All</h4>
            </div>

            <div className='sidebar__bottom'>
                <BottomOption username='Javascript' surname='javascript' src='https://miro.medium.com/max/4725/1*6ahbWjp_g9hqhaTDSJOL1Q.png'/>
                <BottomOption username='Python' surname='python' src='https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67'/>
                <BottomOption username='Flutter' surname='flutter' src='https://miro.medium.com/max/1000/1*ilC2Aqp5sZd1wi0CopD1Hw.png'/>
                <BottomOption username='ReactJS' surname='react' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'/>
                <BottomOption username='NodeJS' surname='node' src='https://miro.medium.com/max/3200/1*xdo0UBpyszvD7-7EH4TkIA.png'/>
                <BottomOption username='VueJS' surname='vue' src='https://3lhowb48prep40031529g5yj-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/logo-vuejs-min.png'/>
            </div>
                
            <div className='sidebarBottom__last'>
                <h2 style={{marginTop:10,cursor:'pointer'}}>About.Help.Press.API.Jobs.Privacy.Terms.Locations</h2>
                <h2 style={{marginTop:10,cursor:'pointer'}}>Top Accounts.Hash.tags.Language.English</h2>
                <h2 style={{marginTop:20}}>© 2021 INSTAGRAM FROM FACEBOOK</h2>
            </div>    
        </div>
    );
};

export default Sidebar;