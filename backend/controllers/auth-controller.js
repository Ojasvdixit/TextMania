//! In express.js , controller refers to a part of our code that is responsible for handling the application's logic, It is used to process-incoming-requests, interact wth models(data sources) and send responses back to clients. 

//! They help to organize our application by seperating concerns and following the MediaDeviceInfo(Model-view-controller) deign pattern .

const User =require("../models/user-model");

const bcrypt= require("bcryptjs");

const home= async(req,res)=>{
  try{
    res.status(201).send("Welcome to my official home page of my router");
  }
  catch(error){
    console.log(error);
    res.status(500).send({ msg: "Internal Server Error" });
    
  }

}

//! Registration Logic

const register= async(req,res)=>{
  try{
   // console.log(req.body);

    const {username , email , phone , password}= req.body;

    const userExist = await User.findOne({email}) ;

    if(userExist){
      return res.status(400).json({msg:"email already exists"})
    }

    //hash the password
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

   const userCreated= await User.create({username ,
      email ,
      phone ,
      password  ,   // hash_password
    });

    res.status(201).json({msg: "registration successful",
       token : await userCreated.generateToken(), 
       userId: userCreated._id.toString(),
       });

  }
  catch(error){
    res.status(500).json("Internal Server error");    
  }

};

//! user login logic

const login = async (req,res)=>{

  try{
     const {email, password } = req.body;

    const userExist = await User.findOne({email}) ;
    console.log(userExist);
    
    if(!userExist){
      return res.status(400).json({msg: "Invalid credential"});

    }
   
   // const user = await bcrypt.compare(password, userExist.password);

    const user = await userExist.comparePassword(password);
    
    if(user){
        res.status(200).json({
        msg: "Login successful",
        token : await userExist.generateToken(), 
        userId: userExist._id.toString(),
    })
   }

  }
  catch(error){
    // res.status(500).json("Internal Server error");    

    next(error);
  }
}

module.exports={home , register, login};
