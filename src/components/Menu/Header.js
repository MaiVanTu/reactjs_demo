import React from 'react';

function Header() {
  return (
    <div>
        
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand" href="#">Lesson 2: Components</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a>Home</a>
            </li>
            <li>
              <a>Category</a>
            </li>
          </ul>
        </nav>
        
    </div>
  );
}

export default Header;
