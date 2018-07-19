import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from "./login.js";
import Routes from './Routes';
import Test from './test';
import App from "./App";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
