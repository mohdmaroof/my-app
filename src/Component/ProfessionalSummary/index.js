import React, { Component } from 'react'
import { Card, CardBody } from 'reactstrap'
import PropTypes from 'prop-types';
import { Skills } from '../../Component'

export default class ProfessionalSummary extends Component {
  constructor (props) {
    super (props);
    this.state = {

    }
  }
  render () {
    return (
      <React.Fragment>
        <Card className='user-card'>
          <CardBody>
            <h6 className='text-capitalize'>{this.props.professional}</h6>
            <p className='mb-0'>I’m a senior UI developer with 6+ years of experience extensively working on <b>React JS,  AngularJS,</b>  PHP and JAVASCRIPT. Personally driven to enjoy coding and translate the UX exactly on the web format. Quick to adapt to new developments, and in finding effective solutions to problems. </p>
          </CardBody>
        </Card>
        <Skills
          Skills='Skills'
        />
      </React.Fragment>
    )
  }
}

ProfessionalSummary.propTypes = {
	professional: PropTypes.string
}
ProfessionalSummary.defaultProps = {
	professional: ''
}
