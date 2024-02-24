import React, {  useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faLock} from '@fortawesome/free-solid-svg-icons'
import  './ChangePassword.css'
import ProfilePage from './ProfilePage';
import axios from 'axios';
//import { useEffect } from 'react';

export default function ChangePassword() {


    const [email,setEmail]=useState('');
    const [oldpassword,setOldpassword]=useState('');
    const [newpaasword,setNewpassword]=useState('');
    const [id,setId]=useState();

    const handleChangePassword=(e)=>{
   setId(sessionStorage.getItem('id'));

      handleChangePasswordd(e);
    };
   
const handleChangePasswordd=(e)=>{
    e.preventDefault();
 const user={
        id,
        newpaasword,
        oldpassword
    };

    debugger
    
    axios
    .put("http://localhost:8080/User/password",user)
  .then((response)=>{
    console.log("user registered successfully",response)
    // toast.success("user registered successfully");

  })
  .catch((error)=>{
    // toast.error("something went wrong")
   
    console.log("something went wrong",error.response)
  })

}

return (
<center>
    <div>
                <ProfilePage firstName={email}></ProfilePage>

    <div className="outerdiv">
      <ProfilePage ></ProfilePage>

    <div className="login1">
    <br /> <br />
        <h2 align="center">Change Password</h2>
        <br /> <br /> 
        <div className="icon">
            <FontAwesomeIcon icon={faEnvelope} size="xl" />
          <input
                className="inputBOX"
                type="text"
                autoComplete="off"
                placeholder="Your Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
        </div>
        <br /><br />
        <div className="icon">
            <FontAwesomeIcon icon={faLock} size="xl" /> 
            <input
                className="inputBOX"
                type="password"
                autoComplete="off"
                placeholder="     Old Password"
                value={oldpassword}
                onChange={(e)=>setOldpassword(e.target.value)}
            />
        </div>
        <br /> <br />
        <div className="icon">
            <FontAwesomeIcon icon={faLock} size="xl" />
            <input
                className="inputBOX"
                type="password"
                autoComplete="off"
                placeholder="     New Password"
                value={newpaasword}
                onChange={(e)=>setNewpassword(e.target.value)}
            />
        </div>
        <br />
       


        <br></br>
        <br></br>
        
        <div >
          <button onClick={handleChangePassword}  className='btn btn-primary'>Save Changes</button>
        </div>
        <br></br>
        <br></br>
        <br></br>

    </div>
</div>
</div>

</center>
  )
}
