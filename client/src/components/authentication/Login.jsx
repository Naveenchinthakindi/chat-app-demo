import { Button, Heading, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
  const [formValues, setFormValues] = useState({
    email:"",
    password: "",
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  console.log("formValues ", formValues);

  return (
    <VStack>
      <Heading alignSelf="start">Email</Heading>
      <Input
        name="email"
        placeholder="Enter Your Name"
        value={formValues.email}
        required
        onChange={handleForm}
      />
      <Heading alignSelf="start">Password</Heading>
      <Input
        name="password"
        required
        placeholder="Enter Your Password"
        value={formValues.password}
        onChange={handleForm}
      />
      <Button bg="blue.300">Sign In</Button>
    </VStack>
  );
};

export default Login;
