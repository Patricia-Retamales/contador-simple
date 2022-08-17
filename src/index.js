import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App.js';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';


let counter = 0;

setInterval(function(){
    ReactDOM.render(<App seconds={counter}/>, document.getElementById('root'));
    counter += 1;
},
1000);