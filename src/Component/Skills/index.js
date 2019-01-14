import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import PropTypes from 'prop-types';

export default class Skills extends Component {
  constructor (props) {
    super (props);
    this.state = {

    }
  }
  render () {
    return (
      <React.Fragment>
        <ListGroup className='mt-4'>
          <ListGroupItem active tag="button" action>
            <h6 className='text-capitalize'>{this.props.Skills}</h6>
          </ListGroupItem>
          <ListGroupItem tag="button" action>
            <span className='text-info'>FRONTEND JS:</span> - React Js, Angular Js, Vue Js, Jquery 
          </ListGroupItem>
          <ListGroupItem tag="button" action>
            <span className='text-info'>FRONTEND Frameworks:</span> - Bootstrap 4, SCSS, Materialize CSS, HTML5, CSS3
          </ListGroupItem>
          <ListGroupItem tag="button" action>
          <span className='text-info'>BACKEND:</span> -Node.Js, PHP
          </ListGroupItem>
          <ListGroupItem disabled tag="button" action>
            <span className='text-info'>DATABASES:</span> -MySql, MongoDB
          </ListGroupItem>
        </ListGroup>
      </React.Fragment>
    )
  }
}
Skills.propTypes = {
	Skills: PropTypes.string
}
Skills.defaultProps = {
	Skills: ''
}