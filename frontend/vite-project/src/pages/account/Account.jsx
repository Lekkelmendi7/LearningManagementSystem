import React from 'react';
import {MdDashboard, IoMdLogOut} from 'react-icons/md';
import './account.css';
const Account = ({user}) => {
  return (
    <div>
        {user && (
            <div className='profile'>
            <h2>My Profile</h2>
            <div className='profile-info'>
                <p>
                    <strong>Name - {user.name}</strong>
                </p>

                <p>
                    <strong>Email - {user.email}</strong>
                </p>

                <button className='common-btn'><MdDashboard />Dashboard</button>

                <br />

                <button onClick={logoutHandler} className='common-btn' style={{background: "red"}}><IoMdLogOut />Logout</button>
            </div>
        </div>
        ) }
    </div>
  )
}

export default Account
