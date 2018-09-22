import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/CustomNavbar.css';

class CustomNavbar extends Component {
	render() {
		return (
			<Navbar default collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/">ARES</Link>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
							<NavItem eventKey={1} componentClass={Link} href="/" to="/" className="editNavText">
							Dashboard
						</NavItem>
							<NavItem eventKey={2} componentClass={Link} href="/workoutchallenges" to="/workoutchallenges">
							Workout Challenges
						</NavItem>
						<NavItem eventKey={3} componentClass={Link} href="/about" to="/about">
							About Us
						</NavItem>
							<NavItem eventKey={4} componentClass={Link} href="/login" to="/login">
							Login
						</NavItem>
							<NavItem eventKey={5} componentClass={Link} href="/contactus" to="/contactus">
							Contact Us
						</NavItem>
						</Nav>
					</Navbar.Collapse>
			</Navbar>
			);
	}
}

export default CustomNavbar;