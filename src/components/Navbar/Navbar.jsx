import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar = () => (
  <Menu>
    <NavLink to="/" className="item">Clap Clap</NavLink>
    <NavLink to="/ideas" className="item" activeClassName="active">Ideas</NavLink>
  </Menu>
);

export default Navbar;
