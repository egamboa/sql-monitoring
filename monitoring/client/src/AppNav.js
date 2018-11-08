import React from 'react';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavItem } from 'react-bootstrap';

function AppNav () {

  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <i className="fas fa-database"></i> Performance Monitor
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <IndexLinkContainer to="/">
          <NavItem>Login</NavItem>
        </IndexLinkContainer>
        <LinkContainer to="/connections">
          <NavItem>Connections</NavItem>
        </LinkContainer>
        <LinkContainer to="/newcon">
          <NavItem>New Connection</NavItem>
        </LinkContainer>
        <LinkContainer to="/results">
          <NavItem>Results</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>);
}

export default AppNav;
