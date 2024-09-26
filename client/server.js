// // server.js
// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Contact form route to send email
// app.post('/api/contact', (req, res) => {
//   const { name, email, message } = req.body;

//   // Create a transporter object with email service details
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL, // Your email address
//       pass: process.env.PASSWORD // Your email password or app password
//     }
//   });

//   const mailOptions = {
//     from: email, // Sender's email from the form
//     to: process.env.EMAIL, // Your email address
//     subject: `Contact Form Submission from ${name}`,
//     text: `You have received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
//   };

//   // Send the email
  
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       res.status(500).json({ msg: 'Failed to send email' });
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.status(200).json({ msg: 'Email sent successfully' });
//     }
//   });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

