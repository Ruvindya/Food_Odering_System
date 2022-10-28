import React from 'react';
import axios from "axios";
import {useState } from "react";
import "../../App.css";
import { v4 as uuid } from 'uuid';


//aluthen ekkenekva reg vena eka livva.. veda karana hati baluve na thama
function RegUser() {

  
  const [userId, setuserId] = useState("");
  const [email, setemail] = useState("");
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");


  const Register =  (e) => {
    e.preventDefault();

    console.log(userId)


    const newUser = {  
      userId: uuid(),
      userName: userName,
      email: email,
      password: password
    }
    
    try {
         axios.post('http://localhost:3001/user/register',newUser);    

    } catch (error) {

   console.log(error);
          
    }
          
    setuserId(" ");
    setemail(" ");
    setuserName(" ");
    setPassword(" ");

}
  
  return (
   
  <form   onSubmit={Register} >

    <div className="header-wraper">
      <div className="Registration" >

        <h1 className='Topic' >Registration</h1>
                <div className="form-group"></div>

                
                 <label>User Name</label>
                <input type="text" placeholder="ex:userName"  name="userName" required  
                value={userName}  onChange={(e) => setuserName(e.target.value)} 
                />
                
               
                   
                <label>email</label>
                <input type="text" placeholder="Ex: Email@gmail.com" name="Email" required  
                value={email}  onChange={(e) => setemail(e.target.value)} 
                />
                
                <label>Password</label>
                <input type="password" placeholder="*****" name="password" required
                value={password} onChange={(e) => setPassword(e.target.value)}
                />

        <button type="submit">Register</button>
      </div>

    </div> 
    </form>
  
  );
}

export default RegUser;