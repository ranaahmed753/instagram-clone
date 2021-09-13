import React, { useEffect, useState } from 'react';
import './App.css';
import Post from './Post';
import db from './firebase';
import Header from './Header';
import {BrowserRouter,Switch,Route,Link, useHistory} from "react-router-dom";
import Inbox from './Inbox';
import Explore from './Explore';
import Story from './Story';
import Sidebar from './Sidebar';
import Profile from './Profile';
const App = () => {
  const [posts,setPosts] = useState([]);
  

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
    setPosts(snapshot.docs.map(doc => doc.data()))
    ));
  },[]);

  return (
    <div className='app'>
      
     
      <BrowserRouter>
        <Header/>
        <Switch>
        
        <Route exact path='/'>
          <div className='app__parent'>
            <div className='app__left'>
            <Story/>
          
              {posts.map(post => (
                <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
         
              ))}

            </div>

            <div className='app__right'>
            <Sidebar/>
            </div>
            
          </div>
         
          </Route>
          
          <Route path='/inbox'>
            <Inbox/>
          </Route>
          
          <Route path='/explore'>
            <Explore/>
          </Route>

          <Route path='/profile'>
            <Profile/>
          </Route>
        </Switch>
      </BrowserRouter>
      
     
    </div>
  );
};

export default App;