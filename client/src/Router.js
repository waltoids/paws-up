import React from 'react';
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Router = () => (
    <BrowserRouter>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/chat" component={Chat} />
    </Switch>
    </BrowserRouter>
)

export default Router;
