import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar = () => (
  <Menu>
    <NavLink to="/" className="item">Clap Clap</NavLink>
    <NavLink to="/test" className="item" activeClassName="active">Test</NavLink>
  </Menu>
);

export default Navbar;
