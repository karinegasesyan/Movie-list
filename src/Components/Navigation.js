import React from 'react';
import { Link } from "react-router-dom";
class Navigation extends React.Component{
    render(){
     
        return(
            <header className="header">
                <img className="logo" src="film-icon.png"/>
                <ul className="links">
                    <li >
                        <Link to={'/popular'} >  Popular Movies </Link>
                    </li>
                    <li>
                        <Link to={'/top-rated'} > Top Rated </Link>
                    </li>
                    <li>
                        <Link to={'/upcoming'} > Upcoming </Link>
                    </li>
                    <li>
                        <Link to={'/now-playing'} > Now Playing </Link>
                    </li>
                    <li>
                        <Link to={'/favorites'} > Favorites </Link>
                    </li>
                </ul>
                <button className="btn logIn">
                    <Link to={'/login'}>Log In</Link>
                </button>
            </header>
        );
    }
}

export default Navigation;