import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header'
import  Home  from './Home';
import  Chat  from './Chat';


export default class extends Component {
    render() {
      return <Fragment>

          <Header/>
          <Home/>
          <Chat/>
          
        </Fragment>
      
      }
    }   
