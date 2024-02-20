
// export the SignupForm component
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
// import hooks for mutations and our mutations
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [addUser] = useMutation(ADD_USER);
  // set state for form validation
  const [validated] = useState(false);
  // using the apollo hook  useMutation pass the
  // ADD_USER mutation in order to talk to graphql
  // addUser will hold the output and error the error

  
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

 

  // create function to handle form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true); // Set validated to true to trigger validation feedback
      return;
    }
  
    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data, error } = await addUser({
        variables: { ...userFormData }
      });
  
      if (error) {
        throw new Error(error.message); // Throw the error message received from the server
      }
  
      // Check if there's an error returned by the mutation
      if (data?.addUser?.error) {
        throw new Error(data.addUser.error);
      }
      
      // Assuming that addUser returns a token
      const token = data.addUser.token;
      Auth.login(token);
      console.log(data);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }
  
    // Reset the form after submission
    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };
  
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };
  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your signup!
        </Alert>

        <Form.Group>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your username"
            name="username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type="invalid">
            Username is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email address"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={
            !(
              userFormData.username &&
              userFormData.email &&
              userFormData.password
            )
          }
          type="submit"
          variant="success"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SignupForm;