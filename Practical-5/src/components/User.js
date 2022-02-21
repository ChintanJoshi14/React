import React from "react";
import "./User.css";
import { Lock, Trash } from "react-feather";
import d1 from '../images/d1-modified.png';

function User(props) {

  return (
      

      <div className="user-details" >

        {/* image with name and email divs */}
        <div className="image-with-name">
          <div className="image-format">
            <img src={d1} title="image" width="50px"></img>
          </div>
          <div className="name-format">
              <div className="name">
            {props.name}
            </div>
            <div className="email">
            {props.email}
            </div>
          </div>
        </div>
        

        {/* status show divs */}
        <div>
        {props.status == "Active" 
        ?
        <div className="greenColor">Active</div> 
        : 
        <select className="dropdown-layout">
        <option>{props.status}</option>
        <option value="0">Active</option>
        </select>
        }
        </div>
        
        {/* access show div */}
        <div className="userAccessLevel">
        { props.access == "Owner"
        ?
        <div className="owner">Owner</div>
        :
        <select className="dropdown-layout">
        <option>{props.access}</option>
        </select>
        }
        </div>
        
        {/* show icon based on level of access */}
        <div className="userAccessLevelIcon">
          {props.access == "Owner" && <Lock className="grey-out"/>}
          {props.access != "Owner" && <Trash className="grey-out"/>}
        </div>
        
      </div>
  );
}

export default User;
