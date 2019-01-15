import React, { Component } from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Table,
  Col } from 'reactstrap'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import maroof from '../../Assets/img/maroof.jpg'

export default class UserProfile extends Component {
	constructor (props) {
		super(props);
    this.state = { modal: false };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
	render() {
    return (
      <React.Fragment>
        <Card className='user-card'>
          <CardBody>
            <div className='mx-auto'>
              <img className='user-profile' src={maroof} alt='Maroof' />
            </div>
            <CardTitle className='my-3 text-center text-info text-capitalize'>
              <h6 className='mb-0'>{this.props.userName}</h6>
            </CardTitle>
            <Row className='mb-3'>
              <Col lg={12}>
                <Button className='btn-block btn-sm shadow-none' outline color="info" onClick={this.toggle}>
                <FontAwesomeIcon icon="eye" className='mr-2' /> Education
                </Button>
              </Col>
            </Row>
            <p className='my-1 text-capitalize font-12'>
              <FontAwesomeIcon icon="check-square" className='mr-2' />
              <b>Role: </b>{this.props.softwareEngineer}
            </p>
            <p className='text-capitalize mb-1'>
              <FontAwesomeIcon icon="check-square" className='mr-2' />
              <b>Company: </b>{this.props.company}
            </p>
            <p className='text-capitalize mb-1'>
              <FontAwesomeIcon icon="check-square" className='mr-2' />
              <b>Experience: </b>{this.props.experience}
            </p>
            <p className='text-capitalize mb-1'>
              <FontAwesomeIcon icon="check-square" className='mr-2' />
              <b>Address: </b>{this.props.address}
            </p>
            <p className='mb-1'>
              <FontAwesomeIcon icon="check-square" className='mr-2' />
              <b>Email: </b>{this.props.email}
            </p>
            <p className='text-capitalize mb-0'>
              <FontAwesomeIcon icon="check-square" className='mr-2' />
              <b>Phone: </b>{this.props.Phone}
            </p>
          </CardBody>
        </Card>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Education</ModalHeader>
          <ModalBody>
            <Table className='mb-0'>
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Board / University</th>
                  <th>School / College</th>
                  <th>Year of Passing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">SSC (10th) </th>
                  <td>CBSE Board</td>
                  <td>ML convent Allahabad </td>
                  <td>2004</td>
                </tr>
                <tr>
                  <th scope="row">HSC (12th)</th>
                  <td>CBSE Board</td>
                  <td>ML convent Allahabad</td>
                  <td>2006</td>
                </tr>
                <tr>
                  <th scope="row">COMPUTER SCIENCE (B.TECH)</th>
                  <td>JNTU Hyderabad</td>
                  <td>Greenfort Engineering College Hyd</td>
                  <td>2011</td>
                </tr>
              </tbody>
            </Table>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}
UserProfile.propTypes = {
  userName: PropTypes.string,
  softwareEngineer: PropTypes.string,
  company: PropTypes.string,
  experience: PropTypes.string,
  address: PropTypes.string,
  email: PropTypes.string,
  Phone: PropTypes.string
}
UserProfile.defaultProps = {
  userName: '',
  softwareEngineer: '',
  company: '',
  experience: '',
  address: '',
  email: '',
  Phone: ''
}