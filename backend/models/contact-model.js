//! const userSchema = new mongoose.Schema

// or

const {Schema, model} = require('mongoose');

const contactSchema = new Schema (
  {
    username: {type :String, required: true},
    email: {type :String, required: true},
    message: {type :String, required: true}

  }
)

//?Creating a model or collection

const Contact = new model('Contact', contactSchema);

module.exports= Contact;


