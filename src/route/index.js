import React from 'react';
import { HashRouter , Route } from 'react-router-dom';

import Login from './../pages/login/login';
import Home from './../pages/home';

let RouterObjectFn = () => {
    return (
        <HashRouter>
            <Route exact path='/' component={Login}></Route>
            <Route path='/home' component={Home}></Route>
        </HashRouter>
    )
}

export default RouterObjectFn