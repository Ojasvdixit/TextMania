const mongoose =require("mongoose")
// const URL="mongodb://127.0.0.1:27017/";

// const URL= "mongodb+srv://Ojasv123:1Tso6kSZInUgInTb@cluster0.enjln.mongodb.net/Ojasv123?retryWrites=true&w=majority&appName=Cluster0";

// mongoose.connect(URL);
 const URL= process.env.MONGODB_URI;


const connectDb = async ()=>{
  try{
   await mongoose.connect(URL);
  console.log("Connection successful to DB");
  }
  catch(error){
    console.error("database connection failed");
    process.exit(0);
  }
}

module.exports = connectDb;

