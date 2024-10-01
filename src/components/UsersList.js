import React from 'react'
import { useEffect } from 'react';
import { addUser } from '../store/thunks/addUser';


function Userslist() {
 

 const handleUserAdd = () => {
    addUser();
    }

  return (
    <div>
        <h1 className='user'>Users</h1>
        <button onClick={handleUserAdd}>
             + Add User
        </button>
      
    </div>
  )
}

export default Userslist;
