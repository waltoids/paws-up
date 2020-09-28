import React, { Component, Fragment } from 'react';
import Header from '../src/layouts/Header';
import Router from '../src/Router';

export default class extends Component {
    render() {
      return <Fragment>
          <Header/>
          <Router/>
          
        </Fragment>
      
      }
    }       



