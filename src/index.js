import React from 'react';
import {
BrowserRouter as Router,
Route,
Link
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
