import React, { Component } from "react";
import "./BasicLayout.css";
import { connect } from "react-redux";
import ImageOne from "../BookNow/Cover3.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import { get } from "lodash";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import DisplayRedux from "../DisplayTile/DisplayRedux";
import { Button } from "semantic-ui-react";
import Menu from "@material-ui/core/Menu";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// export const pureComponentAvailable = true;
// import 'react-calendar/dist/Calendar.css';
import {
  DatePickerComponent,
  DateRangePickerComponent,
} from "@syncfusion/ej2-react-calendars";
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";
import { date, property, room, propRoomType } from "../../actions/index";
import { DateRangePickerInput } from "react-dates";
import AddIcon from "@material-ui/icons/Add";
// import { StarFill } from "react-bootstrap-icons";

export class BasicLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roomAnchor: null,
      roomValue: 1,
      adultValue: 1,
      childValue: 0,
      listOfProperties: [],
      dateError: "",
      cityError: "",
      clicked: false,
      open: false,
      city: "",
    };
  }
  // getRoomNum = (numOfRooms) => {
  //   console.log("checking it", numOfRooms);
  // };
  componentDidMount() {
    this.setState({
      start: this.props.dateRange.start,
      end: this.props.dateRange.end,
    });
    console.log("start = ", this.props.dateRange.start);
    console.log("This.state = ", this.state);

    console.log("props = ", this.props);
  }
  setRooms = (event) => {
    ReactDOM.render(
      <ModalCompo2 total={event.target.value} open={true} />,
      document.getElementById("all-rooms")
    );
  };

  // handleDate = () => {
  //   this.props.date({
  //     start: e.value[0],
  //   });
  //   this.setState({
  //     start: e.value[0],
  //     // end: e.value[1],
  //     dateError: "",
  //     clicked: false,
  //   });
  //   console.log("basiclayout = ", e.value);
  //   console.log("basiclayout0 = ", e.value[0]);
  //   console.log("statr = ", start);
  // };
  // handleValidate = () => {
  //   this.setState({
  //     clicked: true,
  //   });
  //   if (this.state.start == null) {
  //     this.setState({
  //       dateError: "Please select the date",
  //     });
  //   }
  // };
  handleCount = () => {
    let count = 0;
    if ((this.state.childValue + this.state.adultValue) / 4) {
      this.setState({
        roomValue: Math.ceil(this.state.adultValue / 2),
      });
    } else {
      this.setState({
        roomValue: Math.ceil(this.state.childValue / 2),
      });
    }
  };

  handleDec = () => {
    if (this.state.roomValue !== 1) {
      this.setState({
        roomValue: this.state.roomValue - 1,
      });
    }
  };
  handleDecAdult = () => {
    if (this.state.adultValue !== 1) {
      this.setState({
        adultValue: this.state.adultValue - 1,
      });
    }
    this.handleCount();
  };
  handleDecChild = () => {
    if (this.state.childValue !== 0) {
      this.setState({
        childValue: this.state.childValue - 1,
      });
    }
    this.handleCount();
  };
  handleInc = () => {
    this.setState({
      roomValue: this.state.roomValue + 1,
    });
  };
  handleIncAdult = () => {
    this.setState({
      adultValue: this.state.adultValue + 1,
    });
    this.handleCount();
  };
  handleIncChild = () => {
    this.setState({
      childValue: this.state.childValue + 1,
    });
    this.handleCount();
  };
  handleClick = (event) => {
    this.setState({
      roomAnchor: event.currentTarget,
    });
  };
  handleClose = () => {
    this.setState({
      roomAnchor: null,
    });
  };
  // handleFilter = (e) => {
  //   const listCityProp = [...this.state.listOfProperties];
  //   if (e == "") {
  //     console.log("citytyyyy");
  //     this.setState({
  //       listOfProperties: listCityProp,
  //     });
  //     console.log(this.state.listOfProperties, "im here");
  //     return;
  //   }
  //   if (this.state.city !== this.state.listOfProperties.location) {
  //     console.log("loosu");
  //     this.setState({
  //       cityError: "Enter valid city",
  //     });
  //   }

  //   const cityDrop = listCityProp.filter((city) => city.location.includes(e));

  //   this.setState({
  //     listOfProperties: cityDrop,
  //   });

  //   console.log(this.state.listOfProperties);
  // };
  // executeOnClick(isExpanded) {
  //   console.log(isExpanded);
  // }

  render() {
    const minValue = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    );
    console.log("this.state.dateRange", this.state.dateRange);
    console.log("his.state.roomRange", this.state.roomRange);

    return (
      <div className="basiclayoutClass">
        <div className="adjustHeight">
          <img src={ImageOne} style={{ width: "100%" }}></img>
        </div>
        {/* DatePicker */}
        <div className="containerBasic">
          <div className="dateContainerTwo">
            <div className="parentContainerDate">
              <div className="leftOne">
                <DateRangePickerComponent
                  placeholder="Check-in/Check-out"
                  startDate={this.state.start}
                  endDate={this.state.end}
                  min={minValue}
                  format={"dd-MMM-yy"}
                  color={"black"}
                  className="datepicker"
                ></DateRangePickerComponent>
                {/* <DatePickerComponent
                  placeholder="Check-in"
                  // value={this.state.start}
                  // startDate={this.state.start}
                  // endDate={this.state.end}
                  min={minValue}
                  format={"dd-MMM-yy"}
                  color={"black"}
                  // onChange={() => this.handleDate()}
                  // onChange={({ startDate, endDate }) =>
                  //   this.setState({ startDate, endDate })
                  // }
                  className="newDatePicker"
                  showClearButton={false}
                  allowEdit={false}
                /> */}
              </div>
              <div className="rightOne">
                {/* <DatePickerComponent
                  placeholder="Check-out"
                  // value={this.state.start}
                  startDate={this.state.start}
                  // endDate={this.state.end}
                  min={minValue}
                  format={"dd-MMM-yy"}
                  color={"black"}
                  // onChange={() => this.handleDate()}
                  // onChange={({ startDate, endDate }) =>
                  //   this.setState({ startDate, endDate })
                  // }
                  className="newDatePicker"
                  showClearButton={false}
                  allowEdit={false}
                /> */}
              </div>
            </div>
            <div className="roomDetailsTwo">
              <div className="d-flex">
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={this.handleClick}
                  className="roomRangeBasic"
                >
                  <p className="roomText">
                    <i className="users icon ">
                      <p className="value">
                        {(`${this.state.roomValue}`, "Rooms")}
                      </p>
                    </i>
                  </p>
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={this.state.roomAnchor}
                  className="w-100"
                  open={Boolean(this.state.roomAnchor)}
                  onClose={this.handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  elevation={0}
                  getContentAnchorEl={null}
                >
                  <div className="d-flex">
                    {/* <button onClick={this.handleDec}>-</button> */}
                    <p className="menu-drop">Rooms</p>
                    <div className="decre">
                      <button
                        class="circular ui icon button"
                        onClick={this.handleDec}
                      >
                        -<i class="minus circle icon"></i>
                      </button>
                    </div>
                    <p>{this.state.roomValue}</p>
                    <div className="incre">
                      <button
                        class="circular ui icon button"
                        onClick={this.handleInc}
                      >
                        +<i class="plus circle icon"></i>
                      </button>
                    </div>
                  </div>
                  <div className="d-flex">
                    <p className="menu-drop">Adults</p>
                    <div className="a-decre">
                      <button
                        class="circular ui icon button"
                        onClick={this.handleDecAdult}
                      >
                        -<i class="minus circle icon"></i>
                      </button>
                    </div>
                    <p>{this.state.adultValue}</p>
                    <div className="a-incre">
                      <button
                        class="circular ui icon button"
                        onClick={this.handleIncAdult}
                      >
                        +<i class="plus circle icon"></i>
                      </button>
                    </div>
                  </div>
                  <div className="d-flex">
                    <p className="menu-drop">Children</p>
                    <div className="c-decre">
                      <button
                        class="circular ui icon button"
                        onClick={this.handleDecChild}
                      >
                        -<i class="minus circle icon"></i>
                      </button>
                    </div>
                    <p>{this.state.childValue}</p>
                    <div className="c-incre">
                      <button
                        class="circular ui icon button"
                        onClick={this.handleIncChild}
                      >
                        +<i class="plus circle icon"></i>
                      </button>
                    </div>
                  </div>
                </Menu>
              </div>
            </div>
          </div>
        </div>

        <DisplayRedux />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  dateRange: get(state, "dateRange", []),
  roomRange: get(state, "roomRange", []),
  propertyList: get(state, "propertyList", []),
});
const mapDispatchToProps = (dispatch) => {
  return {
    date: bindActionCreators(date, dispatch),
    room: bindActionCreators(room, dispatch),
    // property: bindActionCreators(property, dispatch),
    // propRoomType: bindActionCreators(propRoomType, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BasicLayout));
