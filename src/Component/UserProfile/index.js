import React, { Component } from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'
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
            <CardTitle className='my-3 text-center'>{this.props.userName}</CardTitle>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
UserProfile.propTypes = {
	userName: PropTypes.string
}
UserProfile.defaultProps = {
	userName: ''
}