import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import Header from './Component/Header'
import UserProfile from './Component/UserProfile'
import 'bootstrap/dist/css/bootstrap.css'
import './Assets/css/settings.scss'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header
          brandName='Mohd Maroof App'
        />
        <Container className='mt-4'>
          <Row>
            <Col lg={3} md={4} sm={12}>
              <UserProfile userName='Mohd Maroof' />
            </Col>
          </Row>          
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
