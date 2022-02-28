import React from "react";
import "./UserList.css";
import User from "./User";
import { useState, useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UserCard from "./UserCard";
import { useSelector } from 'react-redux';

function UserList(props) {

  const isHover= useSelector(state => state.hover.cardVisibility);
  // console.log(isHover);

  const [userList, setUserList] = useState([]);
  const [card, setCard] = useState({});

  let listOfUsers = [];
  // const arrayDemo = [];

  function handleAPICall_1() {
    fetch("https://reqres.in/api/users?page=1")
      .then((data) => {
        return data.json();
      })
      .then((JSONData) => {
        listOfUsers = JSONData.data;
        listOfUsers.map((item) => {
          item.access = "Read";
          item.status = "Inactive";
          item.owner = false;
          return item;
        });

        setUserList(listOfUsers);
        console.log(listOfUsers);
      });

    setUserList(listOfUsers);
  }

  function handleAPICall_2() {
    fetch("https://reqres.in/api/users?page=2")
      .then((data) => {
        return data.json();
      })
      .then((JSONData) => {
        listOfUsers = JSONData.data;
        listOfUsers.map((item) => {
          item.access = "Read";
          item.status = "Inactive";
          item.owner = false;
          return item;
        });

        setUserList(listOfUsers);
        console.log(listOfUsers);
      });

    setUserList(listOfUsers);
  }

  useEffect(() => {
      handleAPICall_1('https://reqres.in/api/users?page=1');
  }, []);


  function hoverHandler(data) {
    setCard(data);
    

  }

  return (
    <div className="flex-design">
    <div className="user-list-wrapper-component">
      <br />
      <br />
      <span className="name-layout">Name</span>
      <span className="status-margin">Status</span>
      <span className="access">Access</span>
      <br />
      
      {
          userList.map((user) => {
              return <User onHover={hoverHandler}
              id={user.id}
              firstName={user.first_name}
              lastName = {user.last_name}
              email = {user.email}
              avatar = {user.avatar} 
              status = {user.status}
              access = {user.access}
              />
          })
      }

      <div className="pagination-layout">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item" onClick={handleAPICall_1}>
              <a class="page-link">
                1
              </a>
            </li>

            <li class="page-item" onClick={handleAPICall_2}>
              <a class="page-link">
                2
              </a>
            </li>
          </ul>
        </nav>
      </div>
      </div>

      <div>
        <div className="user-card">  
      {isHover && <UserCard data={card} />}
      </div>
    </div>
      

    </div>
  );
}

export default UserList;
