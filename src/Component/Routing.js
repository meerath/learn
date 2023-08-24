import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import Post from './Post'
import Home from './Home'
import PostDetails from './PostDetails'
import Profile from './Profile'
const Routing=()=>{
    return(
          <BrowserRouter>
          <Header/>
              <div className='container'>
                
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/post" component={Post}/>
                  <Route exact path="/profile" component={Profile}/> 
                  <Route exact path="/postDetails" component={PostDetails}/> 

                
              </div>
          <Footer/>
          </BrowserRouter>
    )
} 
export default Routing