const errorMiddleware = (err, req, res, next) => {

  const status = err.status || 500;  // Ensure it's a valid status code
  const message = err.message || "Backend Error";
  const extraDetails = err.extraDetails || "Error from Backend";

  // Return a response with status and JSON object containing error details
  return res.status(status).json({   message, extraDetails });
};

module.exports = errorMiddleware;
