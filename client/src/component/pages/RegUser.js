import React from 'react';
import axios from "axios";
import {useState } from "react";
import "../../App.css";
import { v4 as uuid } from 'uuid';

function RegUser() {

  
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [userName, setuserName] = useState('');
  const [password, setPassword] = useState('');


  const RegUser =  (e) => {
    e.preventDefault();

    console.log(name)

    var err = false;

    const newUser = {  
      userID: uuid(),
      name: name,
      email: email,
      userName: userName,
      password: password
    }
    
    try {
         axios.post('http://localhost:3001/user/register', newUser);    

    } catch (error) {

   console.log(error);

             err = true;

          
    }
          
  
    setname("");
    setemail("");
    setuserName("");
    setPassword("");
 
}
  
  return (
   
  <form   onSubmit={RegUser} >

    <div className="header-wraper">
      <div className="Registration" >

        <h1 className='Topic' >Registration</h1>
                <div className="form-group"></div>

                
                 <label>First Name</label>
                <input type="text" placeholder="ex:Name"  name="Name" required  
                value={name}  onChange={(e) => setname(e.target.value)} 
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