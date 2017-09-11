import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar = () => (
  <Menu>
    <NavLink to="/" className="item">Clap Clap</NavLink>
    <NavLink to="/subjects" className="item" activeClassName="active">Subjects</NavLink>
  </Menu>
);

export default Navbar;
