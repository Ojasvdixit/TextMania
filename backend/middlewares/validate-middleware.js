const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    // console.log(err);
    const status = 422;

    const message = "Fill the input properly";

    const extraDetails = err.message;

    const error = {
      status,
      message,
      extraDetails,
    };
    console.log(message);
    // res.status(400).json({msg :message})

    next(error);
  }
};

module.exports = validate;


// const validate = (schema) => async (req, res, next) => {
//   try {
//     // Parse and validate request body against the provided schema
//     const parsedBody = await schema.parseAsync(req.body);
//     req.body = parsedBody; // Assign the parsed body to req.body
//     next(); // Proceed to the next middleware or route handler
//   } catch (err) {
//     // If validation fails, create an error response
//     const status = 422; // Unprocessable Entity
//     const message = "Validation error occurred"; // Generic message
//     const extraDetails = err.errors || err.message; // Capture the detailed validation errors

//     const error = {
//       status,
//       message,
//       extraDetails,
//     };

//     console.error("Validation Error:", error); // Log the error for debugging

//     // Optionally, send error response to the client
//     return res.status(status).json(error);
//   }
// };

module.exports = validate;
