import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Home page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/collection">COLLECTION</Link>
          </li>
          <li>
            <Link to="/playlist">PLAYLIST</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);