import {Router, Route, IndexRedirect, hashHistory} from 'react-router';
import LoginPage from './jsxDocument/login-page.jsx';
import HomePage from './jsxDocument/home-page.jsx';
import Delivery from './jsxDocument/delivery-page.jsx';
import Book from './jsxDocument/book-page.jsx';
import personalInfo from './jsxDocument/personal-information-page.jsx';
import App from './jsxDocument/app.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
require('jquery');
require("bootstrap-webpack");
import $ from 'jquery';

const route = <Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRedirect to='/LoginPage'/>
        <Route path='LoginPage' component={LoginPage}/>
        <Route path='personalInfoPage' component={personalInfo}/>
        <Route path='homePage' component={HomePage} />
        <Route path='bookPage' component={Book}/>
        <Route path='deliveryPage' component={Delivery}/>
    </Route>
</Router>;

ReactDOM.render(
    route,
    document.getElementById("content")
);
console.log($('#content').text());

if (module.hot) {
    module.hot.accept();
}
