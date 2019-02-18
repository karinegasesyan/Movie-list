import React from 'react';
import { Route, Switch} from "react-router-dom";
import  Popular  from './Popular';
import Favorites from './Favorites';
import Login from './Login';

const ROUTING = <Switch>
                    <Route exact path="/popular" component={ Popular } />
                    <Route path="/favorites" component={ Favorites } />
                    <Route path="/login" component={ Login } />
                </Switch>

export default ROUTING;                