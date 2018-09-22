import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image, Table, Well } from 'react-bootstrap';
import '../css/ContactUs.css'

class ContactUs extends Component{
	render(){
		return(
			<Grid>
			<div className="contactUsTest">
				<h1>ARES</h1>
      				<h5>Please drop us a line and let us know how we can help.</h5>
			
				<form>
					<div>
					  <label>
					    Name: 
					    <input type="text" name="name" />
					  </label>
					</div>
					<div>
					  <label>
					    email: 
					    <input type="text" name="email" />
					  </label>
					</div>
					<div>
					  <label>
					    Message: 
					    <textarea />
					  </label>
					</div>
					  <input type="submit" value="Send Us A Message" />
					</form>
				</div>
			</Grid>
			);
	}
}

export default ContactUs;