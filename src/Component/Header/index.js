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
  DropdownItem,
  Container } from 'reactstrap';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
      <React.Fragment>
        <div className='bg-white'>
          <Container>
            <Navbar className='px-0 py-0' light expand='md'>
              <NavbarBrand href='/'><h6 className='mb-0 text-capitalize'>{this.props.brandName}</h6></NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className='ml-auto' navbar>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      <img src={maroof} className='user-img' alt='User Profile' />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <FontAwesomeIcon icon="sign-out-alt" /> Sign Out
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
          </Container>
        </div>
      </React.Fragment>
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

