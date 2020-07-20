import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/header';
import Uncontrolled from './components/uncontrolled';
import Controlled from './components/controlled';
import User from './components/user';
import LogIn from './components/logIn'

const Routes = () => {
    return (
        <div>
            <Header/>
            <Switch>
                <Route path="/uncontrolled" exact component={Uncontrolled} />
                <Route path="/controlled" exact component={Controlled} />
                <Route path="/user" exact component={User} />
                <Route path="/login" exact component={LogIn} />
            </Switch>
           
        </div>
    )
};

export default Routes;