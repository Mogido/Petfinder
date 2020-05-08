import React from 'react';
import './app-header';
import { Link } from 'react-router-dom';

const AppHeader = () => {
    return (
        <header className="app-header">
            <Link to='/'>
                <div>Home</div>
            </Link>
            <Link to="/liked">
                <div>Liked</div>
            </Link>
            <Link to="/all">
                <div>Show all</div>
            </Link>
        </header>
    );
};

export default AppHeader;