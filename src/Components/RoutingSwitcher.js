import React from 'react';
import { Route, Switch} from "react-router-dom";
import  TopRatedList  from './TopRatedList';
import  LatestMovie from './LatestMovie';
import  Upcoming from './Upcoming';
import Favorites from './Favorites';
import Login from './Login';

const ROUTING = <Switch>
                    <Route exact path="/top-rated" component={ TopRatedList } />
                    <Route path="/latest" component={ LatestMovie } />
                    <Route path="/upcoming" component={ Upcoming } />
                    <Route path="/favorites" component={ Favorites } />
                    <Route path="/login" component={ Login } />
                </Switch>

export default ROUTING;                