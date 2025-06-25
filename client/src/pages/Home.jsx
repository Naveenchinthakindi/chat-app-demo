import { Box, Container, Text } from "@chakra-ui/react";
import { Tabs } from "@chakra-ui/react";
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu";
import React from "react";
import Login from "@/components/authentication/Login";
import SignUp from "@/components/authentication/SignUp";

const Home = () => {
  return (
    <>
      <Container maxW="xl" centerContent>
        <Box
          d="flex"
          textAlign="center"
          p={3}
          bg="white"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
          color="black"
          w="100%"
        >
          <Text fontSize="4xl" fontFamily="work sans">
            Talk-A-Tive
          </Text>
        </Box>
        <Box
          bg="white"
          p={4}
          borderRadius="lg"
          borderWidth="1px"
          w="100%"
          color="black"
        >

          <Tabs.Root  defaultValue="login" variant="plain" w="100%">
            <Tabs.List  rounded="l3" p="1" w="100%" gap="1.5" bg="transparent">
              <Tabs.Trigger value="login" w="100%" bg="blue.300" color="black" rounded="2xl">
                Login
              </Tabs.Trigger>
              <Tabs.Trigger value="signup" w="100%" bg="blue.300" color="black" rounded="2xl">
                Sign Up
              </Tabs.Trigger>
              <Tabs.Indicator rounded="l2" bg="blue.300" />
            </Tabs.List>
            <Tabs.Content value="login">
              <Login />
            </Tabs.Content>
            <Tabs.Content value="signup">
              <SignUp />
            </Tabs.Content>
          </Tabs.Root>
        </Box>
      </Container>
    </>
  );
};

export default Home;
