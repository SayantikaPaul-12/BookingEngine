import React, { Component } from "react";
import "./BasicLayout.css";
import { connect } from "react-redux";
import ImageOne from "../BookNow/Cover.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import {get} from "lodash"
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import RoomNum from "./RoomNum";
import ReactDOM from "react-dom";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";

import DisplayTile from "../DisplayTile/DisplayTile";

export class BasicLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // startDate: null,
      // endDate: null,
    };
  }
  componentDidMount() {
    console.log(this.props, 'here');
    this.setState({
      start: this.props.dateRange.start,
      end:this.props.dateRange.end
    })
  }
  setRooms = (event) => {
    // console.log(event.target.value)
    ReactDOM.render(
      <RoomNum total={event.target.value} />,
      document.getElementById("all-rooms")
    );
  };
  render() {
    const minValue = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    );

    return (
      <div>
        <div className="wrapImage">
          <img src={ImageOne}></img>
        </div>
        {/* DatePicker */}
        <div className="container">
          <DateRangePickerComponent
            placeholder="Check-in/Check-out"
            startDate={this.state.start}
            endDate={this.state.end}
            min={minValue}
            format={"dd-MMM-yy"}
            color={"black"}
            className="datepicker"
          ></DateRangePickerComponent>
          <select
            name="Rooms"
            placeholder="Select Value"
            onChange={this.setRooms}
            value={this.props.roomRange.rooms}
          >
            <option value="0">No.of Room(s)</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div id="all-rooms"></div>
        </div>
        <DisplayTile />
        <DisplayTile />
        <DisplayTile />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  dateRange:  get(state,"dateRange", []),
  roomRange:  get(state,"roomRange",[])
});

export default connect(mapStateToProps,null)(BasicLayout);
