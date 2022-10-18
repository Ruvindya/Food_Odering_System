import React from 'react';
import axios from "axios"; //use: pass data from frontend to backEnd
import { useEffect,useState } from "react";
import "../../App.css";
//import {useNavigate} from 'react-router-dom';


const InfoUser = () => { 

  const [data, setuserNames] = useState([]); //take user names into the string array

  const [loading, setLoading] = useState(true);

  // useEffect( ()=>{
  //   axios.get("http://localhost:3001/user/details/").then(async (response) => {
  //       console.log(await response.data);
  //       setuserNames(await  response.data);
  //     })
  // },[]);

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('http://localhost:3001/user/details/');
        setuserNames(response);
        console.log(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);



    // const handleDelete = (id) => {

    //   axios.delete(`http://localhost:3001/students/delete/${id}`).then((response) => {
        
    //     alert("Student Deleted Successfully");
    //     console.log(response.data);
    //   }
    //   ).catch((err) => {
    //     console.log(err);
    //     alert("Student Not Deleted");
    //   })
    //   ;
    // };
    


  return (
      <div >
                  <div className='userTable'>
                      <table>
                              <tr>
                                  <td className='columnName'><h3>UserID</h3></td>
                                  <td className='columnName'><h3>Name</h3></td>
                                  <td className='columnName'><h3>Email</h3></td>
                                  <td className='columnName'> <h3>userName</h3></td>

                              </tr>
                              {data.map((value,key)=>(
                              <tr key={key}>
                                  <td className='columnData'>{value.userID}</td> 
                                  <td className='columnData'>{value.name}</td>
                                  <td className='columnData'>{value.email}</td>
                                  <td className='columnData'>{value.userName}</td>

                                  {
                                    //<td><button onClick={() => toUpdateUser(value.userID)}>Edit</button></td>
                                  //<td><button onClick={() => handleDelete(value.Student_ID)}>Remove</button></td>
                                  }
                              </tr>

                               ))}
                      </table>   
                  </div>

      </div>
    )
  }

export default InfoUser