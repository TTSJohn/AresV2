import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Dashboard from './components/Dashboard';
import About from './components/About';
import CustomFooter from './components/CustomFooter';
import ContactUs from './components/ContactUs';
import WorkoutChallenges from './components/WorkoutChallenges';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CustomNavbar />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/workoutchallenges" component={WorkoutChallenges} />
          <CustomFooter />
        </div>
      </Router>
    );
  }
}

export default App;
