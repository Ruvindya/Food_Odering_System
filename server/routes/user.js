const express = require('express')
const router = express.Router()
const connection = require("../connection")

//get details from user table
router.get("/details",async (request, response) => {
    connection.query("SELECT * FROM user", (err,result) => {
        if(err){
            console.log(err);
        }else{
            console.log(result);
            response.send(result);           
        }
        });
});



//getting data from user and inserting to table
router.post("/newUser", (request,response)=>{

    const userID = request.body.userID;
    const name = request.body.name;
    const email = request.body.email;
    const userName = request.body.userName;
    const password = request.body.password;


    connection.query("INSERT INTO user (userID,name,email,userName,password) VALUES (?,?,?,?,?)", 
    [userID,name,email,userName,password],
   (err, result) => {
       if(err){
           console.log(err);
           response.send(err);
       }else{
        response.send("Values inserted");
       }
   });
});



module.exports = router