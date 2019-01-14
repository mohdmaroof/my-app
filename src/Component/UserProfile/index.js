import React, { Component } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import PropTypes from 'prop-types';
import maroof from '../../Assets/img/maroof.jpg'

export default class UserProfile extends Component {
	constructor (props) {
		super(props)
    this.state = {

    };
	}

	render() {
    return (
      <React.Fragment>
        <Card className='user-card'>
          <CardBody>
            <div className='mx-auto'>
              <img className='user-profile' src={maroof} alt='Maroof' />
            </div>
            <CardTitle className='my-2 text-center text-info text-capitalize'><h6>{this.props.userName}</h6></CardTitle>
            <CardSubtitle className='my-1 text-capitalize text-center font-12'>{this.props.softwareEngineer}</CardSubtitle>
            <p className='text-capitalize text-center mb-1'>{this.props.company}</p>
            <p className='text-capitalize text-center mb-1'>{this.props.experience}</p>
            <p className='text-capitalize text-center mb-1'>{this.props.address}</p>
            <p className='text-capitalize text-center mb-1'>{this.props.email}</p>
            <p className='text-capitalize text-center mb-0'>{this.props.Phone}</p>
          </CardBody>
        </Card>
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