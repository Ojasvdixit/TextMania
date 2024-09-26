const { z } = require("zod");

// creating an object schema

const signupschema = z.object({
  username: z
    .string({ required_error: "name is required" })
    .trim()
    .min(3, { message: "name must be at least 3 characters." })
    .max(255, { message: "name must not exceed 255 characters." }),

  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "invalid email address" })
    .min(3, { message: "email must be at least 3 characters." })
    .max(255, { message: "email must not exceed 255 characters." }),

  phone: z
    .string({ required_error: "phone is required" })
    .trim()
    .min(10, { message: "phone must be at least 10 characters." })
    .max(20, { message: "phone must not exceed 20 characters." }),

  password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(7, { message: "password must be at least 7 characters." })
    .max(1024, { message: "password must not exceed 1024 characters." }),
});

const loginschema = z.object({
  email: z
    .string({ required_error: "email is required." })
    .trim()
    .email({ message: "invalid email address." })
    .min(3, { message: "email must be at least 3 characters." })
    .max(255, { message: "email must not exceed 255 characters." }),

  password: z
    .string({ required_error: "password is required." })
    .min(7, { message: "password must be at least 7 characters." })
    .max(1024, { message: "password must not exceed 1024 characters." }),
});

module.exports = { signupschema, loginschema };
