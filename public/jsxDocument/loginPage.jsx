import React from 'react';
import {Link} from 'react-router';
require('../css/login.css');

class Login extends React.Component {
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-4 col-md-offset-6" id="login">

                    <div className="divClass">
                        <label htmlFor="inputStuID">学号</label>
                        <input className="inputClass" type="text" placeholder="Student ID"/>
                    </div>

                    <div className="divClass" >
                        <label htmlFor="inputPassword">密码</label>
                        <input className="inputClass" type="password"  placeholder="Password"/>
                    </div>

                    <div>
                        <div className="button-center">
                            <button type="submit" className="btn btn-primary"  id="btnLogin">登录</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    }
}

class Logo extends React.Component {
    render() {
        return <div id="logo"></div>
    }
}


class LoginPage extends React.Component {
    render() {
        return <div className="loginPage">
            <Logo />,
            <Login />
        </div>
    }
}
export default LoginPage;