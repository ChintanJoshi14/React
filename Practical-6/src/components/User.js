import React from "react";
import "./User.css";
import { Lock, Trash } from "react-feather";
import { useDispatch } from "react-redux";
import { hoverController } from "../store/hover";

function User(props) {
  const dispatch = useDispatch();

  function hoverEnterHandler(event) {
    event.preventDefault();
    dispatch(hoverController.showCard());
    props.onHover({
      firstName: props.firstName,
      lastName: props.lastName,
      email: props.email,
      avatar: props.avatar,
      status: props.status,
      access: props.access,
    });
    // props.onDemo(props);
  }

  function hoverLeaveHandler(event) {
    dispatch(hoverController.hideCard());
    props.onHover({
      firstName: props.firstName,
      lastName: props.lastName,
      email: props.email,
      avatar: props.avatar,
      status: props.status,
      access: props.access,
    });
  }

  return (
    <div
      className="user-details"
      onMouseEnter={hoverEnterHandler}
      onMouseLeave={hoverLeaveHandler}
    >
      {/* image with name and email divs */}
      <div className="image-with-name">
        <div className="image-format">
          <img src={props.avatar} title="image" width="50px"></img>
        </div>
        <div className="name-format">
          <div className="name">
            <span>{props.firstName} </span>
            {props.lastName}
          </div>
          <div className="email">{props.email}</div>
        </div>
      </div>

      {/* status show divs */}
      <div>
        {props.id == 1 || props.id == 7 ? (
          <div className="greenColor">Active</div>
        ) : (
          <select className="dropdown-layout">
            <option>{props.status}</option>
            <option value="0">Active</option>
          </select>
        )}
      </div>

      {/* access show div */}
      <div className="userAccessLevel">
        {props.id == 1 || props.id == 7 ? (
          <div className="owner">Owner</div>
        ) : (
          <select className="dropdown-layout">
            <option>{props.access}</option>
          </select>
        )}
      </div>

      {/* show icon based on level of access */}
      <div className="userAccessLevelIcon">
        {props.access == "Owner" && <Lock className="grey-out" />}
        {props.access != "Owner" && <Trash className="grey-out" />}
      </div>
    </div>
  );
}

export default User;
