import React from 'react';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'
import { Navbar, NavDropdown, Nav, MenuItem, NavItem } from 'react-bootstrap';

import grailsLogo from './images/grails-cupsonly-logo-white.svg';
import 'whatwg-fetch';

function AppNav ({serverInfo, clientInfo}) {

  const {environment, appprofile, appversion, grailsversion, reloadingagentenabled, artefacts, plugins} = serverInfo; 

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
        <Nav pullRight>
          <NavDropdown eventKey="4" title="Application Status " id="app-status">
            <MenuItem eventKey="4.1">Environment: {environment}</MenuItem>
            <MenuItem eventKey="4.2">Grails profile: {appprofile}</MenuItem>
            <MenuItem eventKey="4.2">Grails version: {grailsversion}</MenuItem>
            <MenuItem eventKey="4.3">React version: {clientInfo.react.replace('^', '')}</MenuItem>
            <MenuItem eventKey="4.3">Server version: {appversion}</MenuItem>
            <MenuItem eventKey="4.3">Client version: {clientInfo.version}</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4.4">Reloading active: {reloadingagentenabled ? 'true' : 'false'}</MenuItem>
          </NavDropdown>
          <NavDropdown eventKey="4" title="Artefacts " id="artefacts">
            <MenuItem eventKey="4.1">Controllers: {artefacts ? artefacts.controllers : 0}</MenuItem>
            <MenuItem eventKey="4.2">Domains: {artefacts ? artefacts.domains : 0}</MenuItem>
            <MenuItem eventKey="4.3">Services: {artefacts ? artefacts.services : 0}</MenuItem>
          </NavDropdown>
          <NavDropdown eventKey="4" title="Installed Plugins " id="plugins">
            {plugins ? plugins.map(plugin => {
              return <MenuItem eventKey="4.1" key={plugin.name}>{plugin.name} - {plugin.version}</MenuItem>
            }) : null
            }
          </NavDropdown>
        </Nav>  
      </Nav>
    </Navbar>);
}

export default AppNav;
