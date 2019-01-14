import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Card, CardBody } from 'reactstrap'

export default class ProjectList extends Component {
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
            <h6 className='text-capitalize'>{this.props.ProjectList}</h6>
            <ul>
              <li className='list-style-type-circle my-2'><a className='text-info' href='http://www.screencpl.com' target='_blank' rel="noopener noreferrer">SCREEN CPL</a></li>
              <li className='list-style-type-circle my-2'><a className='text-info' href='http://www.hivisioninfotech.com' target='_blank' rel="noopener noreferrer">HIVISION</a></li>
              <li className='list-style-type-circle my-2'><a className='text-info' href='http://y3kimaginations.co.in' target='_blank' rel="noopener noreferrer">Y3K</a></li>
              <li className='list-style-type-circle my-2'><a className='text-info' href='http://www.hotelallahabadregency.in' target='_blank' rel="noopener noreferrer">HOTEL ALLAHABAD REGENCY</a></li>
              <li className='list-style-type-circle my-2'><a className='text-info' href='http://shiatsdde.edu.in' target='_blank' rel="noopener noreferrer">SHIATS</a></li>
              <li className='list-style-type-circle my-2'><a className='text-info' href='http://hindlandequipment.com' target='_blank' rel="noopener noreferrer">HINDLAND EQUIPMENT</a></li>
              <li className='list-style-type-circle my-2'><a className='text-info' href='http://sslparivar.com' target='_blank' rel="noopener noreferrer">SSL PARIVAR</a></li>
              <li className="list-style-type-circle my-2"><a className='text-info' href='http://www.drugrepurposingportal.com' target='_blank' rel="noopener noreferrer">DRUG REPORPOSING:</a> </li>
            </ul>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
ProjectList.propTypes = {
	ProjectList: PropTypes.string
}
ProjectList.defaultProps = {
	ProjectList: ''
}