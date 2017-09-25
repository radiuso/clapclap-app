import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon, Header, Divider } from 'semantic-ui-react';
import './Sidenav.scss';

const Sidenav = () => (
  <Menu
    secondary
    vertical
    className="sidenav"
  >
    <Menu.Item>
      <Header>
        <Icon name="user circle" />
        <Header.Content>
          My Username
        </Header.Content>
      </Header>
      <Divider />
    </Menu.Item>
    <Menu.Item
      as={NavLink}
      to="/ideas"
      activeClassName="active"
    >
      Ideas <Icon name="idea" />
    </Menu.Item>
    <Divider />

    <Menu.Item
      as={NavLink}
      to="/login"
    >
      Logout <Icon name="log out" />
    </Menu.Item>

  </Menu>
);

export default Sidenav;
