import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import '../css/CustomFooter.css';


class CustomFooter extends Component {
	render() {
		return (
			<div className="custFoot">
            <div className='phantom' />
            <div className='style'>
            <Row>
            <div className='footerText'>
            <Col xs={8} sm={4}>
            	<p>2018 TanookiDev</p>
            </Col>
            <Col xs={8} sm={4}>
            	<p>Terms and Conditions</p>
            </Col>
           <Col xs={8} sm={4}>
           <Link to="/about">
                  <p>About Us</p>
                  </Link>
            </Col>
            </div>
            </Row>
            </div>
        </div>
        
			);
		}
	}

export default CustomFooter;