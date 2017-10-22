import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Input, Dropdown } from 'semantic-ui-react';
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
      <Dropdown item text="My user">
        <Dropdown.Menu>
          <Dropdown.Item icon="settings" text="Account Settings" />
          <Dropdown.Item as={NavLink} to="/logout" icon="log out" text="Logout" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>
);

export default Navbar;
