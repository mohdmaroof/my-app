import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
	DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';
import maroof from '../../Assets/img/maroof.jpg'

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="white" light expand="md">
          <NavbarBrand href="/"><h6 className='mb-0'>{this.props.brandName}</h6></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <img src={maroof} className='user-img' alt='User Profile' />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Sign Out
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
	}
}
Header.propTypes = {
	brandName: PropTypes.string
}
Header.defaultProps = {
	brandName: ''
}

export default Header

