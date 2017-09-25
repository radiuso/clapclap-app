import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar = () => (
  <Menu
    fixed="top"
  >
    <Menu.Item header as={NavLink} to="/" name="ClapCalp" />
  </Menu>
);

export default Navbar;
