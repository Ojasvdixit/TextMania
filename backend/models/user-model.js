// const mongoose = require("mongoose");

// const bcrypt= require("bcryptjs")
// const jwt= require("jsonwebtoken");

// const userSchema = new mongoose.Schema

//   //? documents names->
// ({
//   username:{
//     type: String,
//     required: true,
//   },
//   email:{
//     type: String,
//     required: true,
//   },
//   phone:{
//     type: String,
//     required: true,
//   },
//   password:{
//     type: String,
//     required: true
//   },
//   isAdmin:{
//     type: Boolean,
//     default: false
//   },
// })

// //?secure the password with the bcrypt

// userSchema.pre("save",async function (next) {
//   const user = this;
//   if(!user.isModified("password")){
//     next();
//   }
//   try{
//     const saltround = await bcrypt.genSalt(10);
//     const hash_pass = await bcrypt.hash(user.password, saltround);
//     user.password= hash_pass;

//   }catch(error){
//     next(error);
//   }


//   //!Compare the Password

//   userSchema.methods.comparePassword= async function (password) {
//     return bcrypt.compare(password, this.password);
    
//   }
// })

// //?JSON web tokens
//  //! with the help of  userSchema.methods you can create any number of function and use it anywhere
//  userSchema.methods.generateToken =  async function(){
//      try{
//         return jwt.sign({
//           userId : this._id.toString(),     //payloads
//           email: this.email,
//           isAdmin: this.isAdmin,


//         }, 
//       process.env.JWT_SECRET_KEY,         //signature
//       {
//         expiresIn : "30d"
//       }
//     )
//      }
//      catch(error){
//       console.error(error);
//      }
//  }


// //? Define the model or collection name

// const User = new mongoose.model("User", userSchema);

// module.exports= User;

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure unique email addresses
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// Hash the password before saving the user document
userSchema.pre("save", async function (next) {
  const user = this;

  // Only hash the password if it has been modified
  if (!user.isModified("password")) {
    return next();
  }

  try {
    const saltRound = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, saltRound);
    next(); // Proceed with saving the user document
  } catch (error) {
    next(error); // Pass any errors to the next middleware
  }
});

// Method to compare the provided password with the hashed password
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Method to generate a JSON web token
userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(), // Payloads
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY, // Signature
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.error(error);
    throw new Error("Token generation failed"); // Throw error if token generation fails
  }
};

// Define the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
