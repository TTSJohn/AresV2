import React, { Component } from 'react';
import { Grid, Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/About.css';

class About extends Component {
	render(){
		return (
			<Grid>
			<h1>Ares</h1>
				<div>
					The natural world conspires against us.  Obstacles confront us everyday.  We need to be prepared for battle physically and mentally to conquer our world. ARES provides a platform for men to challenge other men to increase their fitness levels and master their bodies so that they can conquer their world.
				</div>
			</Grid>
			);
	}

}

export default About;