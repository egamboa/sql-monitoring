import React from 'react';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavItem } from 'react-bootstrap';

function AppNav () {

  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <i class="fas fa-database"></i> Performance Monitor
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <IndexLinkContainer to="/">
          <NavItem>Sga</NavItem>
        </IndexLinkContainer>
        <LinkContainer to="/tablespace">
          <NavItem>Tablespaces</NavItem>
        </LinkContainer>
        <LinkContainer to="/logs">
          <NavItem>Logs</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>);
}

export default AppNav;
