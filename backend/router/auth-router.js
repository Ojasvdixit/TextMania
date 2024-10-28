const express = require("express");
const router = express.Router();
const { home, register, login } = require("../controllers/auth-controller");  
const { signupschema, loginschema } = require("../validators/auth-validators");
const validate = require("../middlewares/validate-middleware");

// Route for home

router.route("/").get(home);

// Route for registration (with validation)
router.route("/register").post(validate(signupschema), register);

// Route for login (with validation)
router.route("/login").post(validate(loginschema), login);

module.exports = router;
