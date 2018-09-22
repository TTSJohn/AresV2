import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image, Table, Well } from 'react-bootstrap';
import '../css/Dashboard.css'

class Dashboard extends Component {
	render() {
		return(
      <Grid>
		     <div className="dashboardBody">
		      <div className="row">
		        <div className="col-sm-4">
		            <div className="circle">
		              
		            </div>
		        
		        </div>
		        <div className="col-sm-8 border">
		          <h1>Fred's Dashboard</h1>
		            <div className="dashboardBody">
		              <div className="row">
		                  <div className="card">
		                    <div className="card-body">
		                      <h5 className="card-title">300 Challenge</h5>
		                      <p className="card-text">This 20 minute workout will get your blood pumping and get you fit.</p>
		                      <a href="#" className="btn btn-success">300</a>
		                    </div>
		                  </div>
		              </div>
		            </div>
		        </div>
		      </div>
		    </div>
		</Grid>
      
		);
	}
}

export default Dashboard;