import React from 'react';
import Logo from './logo.jsx';
require('../css/logo.css');
import Footer from './footer.jsx';
require('../css/footer.css');
require('../css/login-page.css');

class Login extends React.Component {
  loginClick() {
    let name = $('#StudentID').val();
    let password = $('#Password').val();
    console.log(name+password);
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/login',
      async: true,
      data: {name: name, password: password},
      success: function (result) {
        if (result == "SUCCESS") {
          location.href = '/#/homePage';
        } else if (result == 'personalInfo') {
          location.href = '/#/personalInfoPage';
        }
      },
      error: function (result) {
        if (result.responseText == 'NO INFO') {
          alert('NO YOU INFO');
        } else if (result.responseText == 'passwordError') {
          alert('Password Error');
        }
      }
    })
  }

  render() {
    return (
      <div className="container" id="loginCente">
        <div className="col-md-4 col-md-offset-6" id="login">
          <div className="divClass">
            <label htmlFor="inputStuID">学号</label>
            <input className="inputClass" id="StudentID" type="text" placeholder="StudentID"/>
          </div>

          <div className="divClass">
            <label htmlFor="inputPassword">密码</label>
            <input className="inputClass" type="password" id="Password" placeholder="Password"/>
          </div>

          <div>
            <div className="button-center">
              <button type="submit" className="btn btn-primary" id="btnLogin" onClick={this.loginClick}>登录</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class LoginPage extends React.Component {
  render() {
    return (
      <div className="loginPage">
        <Logo/>
        <Login />
        <Footer/>
      </div>
    )
  }
}
export default LoginPage;
