"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import { Button } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const SignupSchema = Yup.object().shape({
  
    email: Yup.string().email("Invalid email").required("Required"),
    username: Yup.string()
    .min(3, "Too Short!")
    .max(12, "Too Long!")
    .required("Required"),
     password: Yup.string()
    .min(4, "Too Short!")
    .max(25, "Too Long!")
    .required("Required"),

});
const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screenspace-y-4 my-40  border-blue-400 rounded-3xl">
      <div>
        <p className="text-blue-600  text-3xl font-bold font-serif text-center">
          Register Now
        </p>
      </div>
      <Formik
        initialValues={{
          email: "bibek@gmail.com",
          username: "bibek",
          password: "1234",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors,touched}) => (
            <Form  method="POST">
            <Box
              sx={{ "& .MuiTextField-root": { m: 1, width: "35ch" } }}
              className="flex flex-col items-center space-y-4"
            >
              <Field
                as={TextField} name="email" label="Email" type="text" variant="filled" 
                  />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <Field
                as={TextField} name="username" label="Username" type="text" variant="filled" 
               />
              {errors.username && touched.username ? (
                <div>{errors.username}</div>
              ) : null}
              <Field
                as={TextField}
                name="password"
                label="Password"
                type="password"
               
              />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
              <div className="text-sm flex ">
                <p>Already have and account yet?</p>
                <Link href="/login">
                  <p className="mx-2">Login</p>
                </Link>
              </div>
              <Button variant="contained" type="submit">
                Register
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Page;
