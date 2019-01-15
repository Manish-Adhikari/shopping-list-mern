import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
  
class AppNavbar extends Component{
      state = {
          isOpen: false
        };

      toggle = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      render() {
        return (
          <div>
            <Navbar color="dark" dark light expand="sm" className="mb-5">
              <Container>
                  <NavbarBrand href="/">Shopping List</NavbarBrand>
                  <NavbarToggler onClick = {this.toggle} />
                  <Collapse isOpen ={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navar>
                        <NavItem>
                            <NavLink href="https://github.com/Manish-Adhikari">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                  </Collapse>
              </Container>
            </Navbar>
          </div>
        );
      }
}

export default AppNavbar;