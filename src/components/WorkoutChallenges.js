import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image, Table, Well, Card, Thumbnail, Button } from 'react-bootstrap';
import '../css/WorkoutChallenges.css';

class WorkoutChallenges extends Component{
	render(){
		return(
			<div>
			<Col xs={6}>
				<Thumbnail>
					<h3>
					300 Challenge
					</h3>
					<p>
					This 20 minute workout will get your blood pumping and get you fit.
					</p>
					<Button bsStyle="primary">300</Button>
				</Thumbnail>
			</Col>			
			<Col xs={6}>
				<Thumbnail>
					<h3>
					Spoke Ropes Workout
					</h3>
					<p>
					This alternative to cardio will get you ripped
					</p>
					<Button bsStyle="primary">Spoke</Button>
				</Thumbnail>
			</Col>
			<Col xs={6}>
				<Thumbnail>
					<h3>
					Kettlebell Hell
					</h3>
					<p>
					A kettlebell sequence that will leave you spent.
					</p>
					<Button bsStyle="primary">Hell</Button>
				</Thumbnail>
			</Col>
			<Col xs={6}>
				<Thumbnail>
					<h3>
					Hip Flow
					</h3>
					<p>
					This warm-up will get your juices flowing.
					</p>
					<Button bsStyle="primary">Flow</Button>
				</Thumbnail>
			</Col>
			</div>
			);
	}
}

export default WorkoutChallenges;