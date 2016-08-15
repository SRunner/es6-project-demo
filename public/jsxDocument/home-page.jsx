import React from 'react';
import {Link} from 'react-router';
require('../css/home-page-style.css');

class HomePage extends React.Component {
    render() {
        return (<div>
            <h1>校园Runner</h1>
            <nav className="navbar navbar-default" role="navigation">
                <div>
                    <ul className="nav navbar-nav">
                        <li><Link to="/homePage">首页</Link></li>
                        <li><Link to="/bookPage">图书馆</Link></li>
                        <li><Link to="/deliveryPage">取快递</Link></li>
                    </ul>
                </div>
            </nav>
        </div>)
    }
}

export default HomePage;