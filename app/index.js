import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './config/routes';

import jquery from 'jquery';
import metismenu from 'metismenu';
import bootstrap from 'bootstrap';

import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/font-awesome/css/font-awesome.css'
import './../node_modules/animate.css/animate.min.css'
import './../public/styles/style.css'
import './scripts/metamask.js'

addEventListener('accountLoaded', function(e) {
    console.log("event accountLoaded received!!")
    console.log(web3.eth.accounts) 
}, false);


ReactDOM.render(
<Router history={hashHistory} >{routes}</Router>,
    document.getElementById('root')
);