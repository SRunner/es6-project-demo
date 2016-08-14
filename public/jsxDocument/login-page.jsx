import React from 'react';
require('../css/login-page.css');

class Login extends React.Component {
    loginClick() {
        let name = $('#inputStuID').val();
        let password = $('#inputPassword').val();
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/login',
            async: true,
            data: {name: name, password: password},
            success: function(result) {
                if (result == "SUCCESS") {
                    location.href = '/#/homePage';
                } else if (result == 'NO INFO') {
                    alert('NO YOU INFO');
                } else if (result == 'passwordError') {
                    alert('Password Error');
                } else if (result == 'personalInfo') {
                    location.href = '/#/personalInfoPage';
                }
            },
            error: function (result) {
                console.log(result);
            }
        })
    }

    render() {
        return <div className="container">
            {/*<form className=" col-md-4 col-md-offset-4 form-horizontal">*/}
            <h3 className="title">登录校园Runner</h3>
            <div className="form-group">
                <label htmlFor="inputStuID" className="col-md-2 control-label">学号</label>
                <div className="col-md-10">
                    <input type="text" className="form-control" id="inputStuID" placeholder="Student ID"/>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputPassword" className="col-md-2 control-label">密码</label>
                <div className="col-md-10">
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                </div>
            </div>
            <div className="form-group">
                <div className="button-center">
                    <button type="submit" className="btn btn-primary" onClick={this.loginClick}>登录</button>
                    <button type="reset" className="btn btn-primary">重置</button>
                </div>
            </div>
            {/*</form>*/}
        </div>
    }
}

class Logo extends React.Component {
    render() {
        return <div className="logo"> runner logo</div>
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