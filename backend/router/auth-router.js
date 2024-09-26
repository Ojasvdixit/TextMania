// const express =require("express");
// const router = express.Router();
// const {home, register, login} = require("../controllers/auth-controller")  
// const signupschema= require("../validators/auth-validators");
// const loginschema = require("../validators/auth-validators")
// const validate = require("../middlewares/validate-middleware")
// //const register= require("../controllers/auth-controller")
// // router.get('/',(req,res)=>{    // to get  response from server
// //   res.status(200).send("Welcome to my official page of my router");
// // });

// //? OR

// //! But in this u can do mutile tasks like get .post i.e further chaining 

// // router.route("/").get((req,res)=>{    // to get  response from server
// //   res.status(200).send("Welcome to my official page of my router");
// // });
 
// router.route("/").get(home);

// // router.route("/register").get((req,res)=>{    // to get  response from server
// //   res.status(200).send("Welcome to my registration page of  router");
// // });

// //! OR

// router
// .route("/register")
// .post( validate(signupschema), register);

// router.route("/login").post(validate(loginschema) ,login);



// module.exports = router;   // this is necesarry for express

const express = require("express");
const router = express.Router();
const { home, register, login } = require("../controllers/auth-controller");  
const { signupschema, loginschema } = require("../validators/auth-validators"); // Destructure both schemas in one import
const validate = require("../middlewares/validate-middleware");

// Route to the home page
router.route("/").get(home);

// Route for user registration
router.route("/register").post(validate(signupschema), register);

// Route for user login
router.route("/login").post(validate(loginschema), login);

module.exports = router; // Export the router for use in other parts of the application

