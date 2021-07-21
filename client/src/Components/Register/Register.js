import React, { Component } from "react";
import "./Register.css";
export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      num: "",
      email: "",
      password: "",
      nameErr: "",
      numErr: "",
      emailErr: "",
      passwordErr: "",
    };
  }
  handleSignup = (e) => {
    e.preventDefault();
    const flag = this.validateForm();
    if (flag) {
      alert("success!!!!");
      console.log("SUCCEESS!!!!!");
    }
  };
  handleName = (e) => {
    this.setState({
      name: e.target.value,
      nameErr: "",
    });
    console.log("name  = ", this.state.name);
  };
  handleNum = (e) => {
    this.setState({
      num: e.target.value,
      numErr: "",
    });
  };
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
  validateForm = () => {
    let nameErr = "";
    let numErr = "";
    let emailErr = "";
    let passwordErr = "";

    if (!this.state.name) {
      nameErr = "Enter Location";
    }
    if (nameErr) {
      this.setState({ nameErr });
    }
    if (!this.state.num) {
      numErr = "Enter Location";
    }
    if (numErr) {
      this.setState({ numErr });
    }
    if (!this.state.email) {
      emailErr = "Enter Location";
    }
    if (emailErr) {
      this.setState({ emailErr });
    }
    if (!this.state.password) {
      passwordErr = "Enter Location";
    }
    if (passwordErr) {
      this.setState({ passwordErr });
      return false;
    }
    return true;
  };
  render() {
    return (
      <div>
        <div>
          <div className="ownerDetail">
            <div className="registerDetail">
              <h1>Create Account</h1>
              <form>
                <div className="rname">
                  <label> Name </label>
                  <input
                    // required
                    type="text"
                    onChange={this.handleName}
                    className={`${
                      this.state.nameErr !== "" ? "inputError" : ""
                    }`}
                  ></input>
                </div>
                <div className="rnum">
                  <label> Mobile Number </label>
                  <input
                    // required
                    type="number"
                    onChange={this.handleNum}
                    className={`${
                      this.state.numErr !== "" ? "inputError" : ""
                    }`}
                  ></input>
                </div>
                <div className="remail">
                  <label> Email Address </label>
                  <input
                    // required
                    type="email"
                    onChange={this.handleEmail}
                    className={`${
                      this.state.emailErr !== "" ? "inputError" : ""
                    }`}
                  ></input>
                </div>
                <div className="rpassword">
                  <label> Password </label>
                  <input
                    // required
                    type="password"
                    onChange={this.handlePassword}
                    className={`${
                      this.state.passwordErr !== "" ? "inputError" : ""
                    }`}
                  ></input>
                </div>
                <div className="rsignup">
                  <button type="submit" onClick={this.handleSignup}>
                    Signup
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
