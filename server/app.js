const express = require('express');
const app = express();  

//Routers
const userRouter = require('./routes/user');
app.use("/user",userRouter);

//const userRouter = require('./routes/customer');
//app.use("/customer",userRouter);



app.listen(3001, () => {
    console.log("Server has started on port 3001");
});
 
