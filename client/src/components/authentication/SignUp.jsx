import React, { useState } from "react";
import { Button, Heading, Input, VStack } from "@chakra-ui/react";

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    confirmPassword: "",
    password: "",
    pic: "",
  });

  const handleForm = (e) => {
    const { name, value } = e.target;

    if (name === "pic") {
      console.log(" e.target.files[0] ", e.target.files[0]);
      setFormValues((prev) => ({ ...prev, [name]: e.target.files[0] }));
      return;
    }
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  console.log("formValues ",formValues)

  return (
    <VStack>
      <Heading alignSelf="start">User Name</Heading>
      <Input
        name="name"
        placeholder="Enter Your Name"
        value={formValues.name}
        required
        onChange={handleForm}
      />
      <Heading alignSelf="start">Email</Heading>
      <Input
        name="email"
        required
        placeholder="Enter Your Email"
        value={formValues.email}
        onChange={handleForm}
      />
      <Heading alignSelf="start">Password</Heading>
      <Input
        placeholder="Enter Your Password"
        name="password"
        onChange={handleForm}
        value={formValues.password}
      />
      <Heading alignSelf="start">Confirm Password</Heading>
      <Input
        name="confirmPassword"
        placeholder="Enter Confirm Password"
        value={formValues.confirmPassword}
        onChange={handleForm}
      />
      <Input
        placeholder="Upload Image"
        type="file"
        w="auto"
        p={1.5}
        accept="image/"
        name="pic"
        onChange={handleForm}
      />
      <Button w="auto" bg="blue.200">
        Sign Up
      </Button>
    </VStack>
  );
};

export default SignUp;
