import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../assets/logo_silver.png';

const Header = () => {
  return (
    <header>
      <Link to="/home">
        <h1>
          <img src={logo} alt="logo" className="logo"></img>
        </h1>
      </Link>
      <h1></h1>
      <nav>
        <ul>
          <li>
            <Link to="/collection" className="links">
              COLLECTION
            </Link>
          </li>
          <li>
            <Link to="/playlist" className="links">
              PLAYLIST
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);