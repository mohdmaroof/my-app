import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import UserProfile from '../UserProfile'
import ProfessionalSummary from '../ProfessionalSummary'

export default class Profile extends Component {
  constructor (props) {
    super (props)
    this.state = {

    }
  }
  render () {
    return (
      <React.Fragment>
        <Container className='mt-4'>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <UserProfile
                userName='Mohd Maroof'
                softwareEngineer='Senior Software Developer'
                company='Innoplexus Consulting Service pvt Ltd'
                experience='experience : 6+ Years'
                address='16-2-852 Saidabad New Malakpet Hyderabad Telangana 500059'
                email="maroofs.md@gmail.com"
                Phone= '+91-9616616684'
              />
            </Col>
            <Col lg={6} md={6} sm={12}>
              <ProfessionalSummary
                professional="Professional Summary"
              />
            </Col>
          </Row>          
        </Container>
      </React.Fragment>
    )
  }
}