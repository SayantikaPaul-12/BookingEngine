import React, { Component } from "react";
import "./Login.css";
import { Link, Redirect, withRouter } from "react-router-dom";
import { hashHistory } from "react-router";
export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      emailErr: "",
      passwordErr: "",
    };
  }
  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
      emailErr: "",
    });
  };
  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
      passwordErr: "",
    });
  };
  handleValidate = (e) => {
    let emailErr = "";
    let passwordErr = "";

    if (!this.state.email) {
      emailErr = "Enter email";
    }
    if (emailErr) {
      this.setState({ emailErr });
    }
    if (!this.state.password) {
      passwordErr = "Enter password";
    }
    if (passwordErr) {
      this.setState({ passwordErr });
      return false;
    }
    return true;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const flag = this.handleValidate();
    console.log("Value of flag  = ", flag);
    console.log("this.props = ", this.props.history);
    if (flag) {
      let credentials = {
        email: this.state.email,
        password: this.state.password,
      };
      console.log("credentials = ", credentials);
      // <Redirect to="/AddProperty" />;
      this.props.history.push("/AddProperty");
      // this.props.hashHistory.push("/AddProperty");
    }
    // this.props.history.push("/AddProperty");

    // if (flag) {
    //   alert("success!!! ");
    //   console.log("Value of flag inside  = ", flag);

    // }
  };
  render() {
    return (
      <div>
        <div className="form-container">
          <div className="bg-container">
            <div className="wrap">
              <div className="loginHead">
                <h2>Sign-in to Add Property</h2>
              </div>
              <div className="user">
                Email
                <input
                  type="email"
                  onChange={this.handleEmail}
                  className={`${
                    this.state.emailErr !== "" ? "inputError" : ""
                  }`}
                ></input>
              </div>
              <div className="password">
                Password
                <input
                  type="password"
                  onChange={this.handlePassword}
                  className={`${
                    this.state.passwordErr !== "" ? "inputError" : ""
                  }`}
                ></input>
              </div>
              <div className="login">
                <button onClick={this.handleSubmit}>Login</button>
                <Link to="/AddProperty">
                  login
                  {/* <button>Sign-Up</button> */}
                  {/* <p>SignUp</p> */}
                  {/* <button onClick={this.handleSubmit}>Login</button> */}
                </Link>
              </div>
              <div className="signup">
                Don't have account?
                <Link to="/register">
                  {/* <button>Sign-Up</button> */}
                  <p>SignUp</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
