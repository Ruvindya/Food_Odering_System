const express = require('express');
const app = express();
const con = require("./connection");
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const userRouter = require('./routes/user');

app.use(session({
	secret: 'secret',    //change the secret key
	resave: true,
	saveUninitialized: true
}));

//Routers

app.use("/user",userRouter);


app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
app.use(cors());
app.use(express.json());


//const userRouter = require('./routes/customer');
//app.use("/customer",userRouter);

app.listen(3001, () => {
    console.log("Server has started on port 3001");
});




