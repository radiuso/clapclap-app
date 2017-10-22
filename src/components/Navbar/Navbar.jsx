import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Input, Icon } from 'semantic-ui-react';
import './Navbar.scss';

const Navbar = () => (
  <Menu
    fixed="top"
  >
    <Menu.Item
      header
      as={NavLink}
      to="/"
      name="ClapCalp"
    />

    <Menu.Menu className="search-menu" position="left">
      <Menu.Item className="search-item">
        <Input className="search-input" icon="search" placeholder="Search..." />
      </Menu.Item>
    </Menu.Menu>

    <Menu.Menu position="right">
      <Menu.Item>
        <Icon name="user" /> My user
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Navbar;
