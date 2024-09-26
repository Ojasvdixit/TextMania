//!This is the main file which will run

require("dotenv").config();
const express = require('express');
const cors= require('cors');
const app= express();
const router =  require("./router/auth-router");

const contactRoute= require("./router/contact-router");

const connectDb= require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

//?let's tackle CORS

const corsoptions={
  
  origin: "http://localhost:3000",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
}

app.use(cors(corsoptions));

app.use(express.json());  //? Middleware 

//? app.use(express.json);: This Line of code adds Express middleware that parses incoming request bodies with JSON payloads. It's important to place this before any routes that need to handle JSON data in the request body. • This middleware is responsible for parsing JSON data from requests, and it should be applied at the beginning of your middleware stack to ensure it's available for all subsequent route handlers.


// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'ojasvdixit1@gmail.com', // Replace with your email
//     pass: 'your-email-password', // Replace with your email password or app password if using Gmail
//   },
// });


//! Mount the router: to use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use("/api/auth", router);             //? from here  it will check out to auth-router.js file 
app.use('/api/form', contactRoute);


// app.get('/',(req,res)=>{    // to get  response from server
//   res.status(200).send("Welcome to my official page");
// })

// app.get('/register',(req,res)=>{    // to get  response from server
//   res.status(200).send("Welcome to registation page");
// })


app.use(errorMiddleware);   //!using it before connection if any error occurs it will not connect


const PORT = 5000;
connectDb().then(()=>{   // connecDb return promse therefor uses .then()

app.listen(PORT,()=>{
  console.log(`server is running at port no: ${PORT}`);

});
  
})
