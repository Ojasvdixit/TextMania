//? This is middleware 

const validate = (schema)=>async(req, res, next)=>{
  try{
      const parseBody = await schema.parseAsync(req.body);
      req.body= parseBody;
      next();
  }
  catch(err){
    // console.log(err);
    const status= 422;

    const message = "Fill the input properly";

    const extraDetails = err.message;
    const error={
      status,
      message,
      extraDetails
    }
   console.log(message);   
    // res.status(400).json({msg :message})

    next(error);
  }

}

module.exports= validate;