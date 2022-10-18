const express = require('express')
const router = express.Router()
const con = require("../connection")


//get details from user table for logging
router.get("/details",async (request, response) => {
    con.query("SELECT * FROM user", (err,result) => {
        if(err){
            console.log(err);
            response.send(err);
        }else{
            response.send(result);           
        }
        });
});



//getting data from New user and inserting to table

router.post("/store", (req,res) => {
    //console.log(req.body);
    const {userID, name, email, userName, password} = req.body;

    console.log(userID);

   const query = "Insert Into file(userID, name, email, userName, password)) Values(?,?,?,?,?)";
    con.query(query, [userID,name,email,userName,password], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send({ msg:'SERVER_ERROR' });
      }
      res.status(200).send({ id:result.insertId });
    })
  });

// router.post("/newUser", (request,response)=>{

//     const userID = request.body.userID;
//     const name = request.body.name;
//     const email = request.body.email;
//     const userName = request.body.userName;
//     const password = request.body.password;


//     connection.query("INSERT INTO user (userID,name,email,userName,password) VALUES (?,?,?,?,?)", 
//     [userID,name,email,userName,password],
//    (err, result) => {
//        if(err){
//            console.log(err);
//            response.send(err);
//        }else{
//         response.send("User details inserted");
//        }
//    });
// });



module.exports = router