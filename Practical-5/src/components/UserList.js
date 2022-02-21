import React from 'react';
import './UserList.css';
import User from './User';

function UserList(props) {
    return (
        
        <div className="user-list-wrapper-component">
            <br/><br/>
            {/* <div className='header-wrapper'> */}
            <span className="name-layout">Name</span>
            <span className='status-margin'>Status</span>
            <span className='access'>Access</span>
            {/* </div> */}
        <br/>
        {/* <br/> */}

            {props.users.map((user) => (
            <User key={user.key} name={user.name} email={user.email} 
            status={user.status} access={user.access} isOwner={user.isOwner} imagePath={props.imagePath}/>
            ))}

        </div>
    );

}

export default UserList; 