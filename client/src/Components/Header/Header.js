import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logoHotel from "../../asset/logoHotel.jpg";
import { Button, Menu, MenuItem, Segment } from "semantic-ui-react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import "./Header.css";
import icon from "./logo2.png";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { get } from "lodash";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <div className="my-div">
        <Segment className="my-seg">
          <Menu secondary className="my-menu">
            <div className="logo">
              <MenuItem as={NavLink} to="/">
                <img src={icon}></img>
                <p className="headline">Booking Engine</p>
              </MenuItem>
            </div>

            <Menu.Item position="right" as={NavLink} to="/aboutUs">
              <p className="About">About Us</p>
            </Menu.Item>
            <Menu.Item
              position="right"
              id="addProperty"
              as={NavLink}
              to="/logIn"
            >
              Add Property
            </Menu.Item>
          </Menu>
        </Segment>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    propertyList: state.propertyList,
    dateRange: get(state, "dateRange", []),
    roomVal: state.roomVal,
    adultVal: state.adultVal,
    childVal: state.childVal,
    propertyEmptyList: get(state, "propertyEmptyList", []),
  };
};

export default connect(mapStateToProps, null)(withRouter(Header));
