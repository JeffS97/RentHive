// import { Link, useNavigate } from "react-router-dom";
// // import Stack from 'react-bootstrap/Stack';
// import { Forms } from 'mdb-angular-ui-kit'
// import React from "react";


import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  IconButton,
  Text,
  Image,
  Flex,
  // FormErrorMessage,
  Heading,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from ".//logo.png"
import facebook from ".//facebook.png"
import google from ".//google.png"


export default function Login() {
  // const { signIn, handleForgotPassword } = useAuthActions();


  // const onSubmitForgotPassword = () => handleForgotPassword.mutateAsync(watch('email'));

  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/Signup");
  };


  return (
    <>
      <Flex>
        <Box display="flex" justifyContent="center" width="60%" height="50%">
          <Image src={logo} alt="logo" width="60%" height="60%" />
        </Box>
        <Box>
          <Stack mx="auto" px={6} py={12} spacing={20} w="md" align="center"
            text-align="centre"
            flex-direction="column"
            padding="32px"
            width="545px"
            height="712px"
          >

            <Box width="500px"  >

              <Stack text-align="centre" flex-direction="column">
                <Heading font-family="Inter" font-style="normal" color="#110B03" mb={2}
                  fontWeight="700"
                  font-size="36px"
                >
                  Welcome Back!
                </Heading>
                <Heading font-family="Inter" font-style="normal" fontSize="16px"
                  color="#6A6A6A"
                  fontWeight="400"
                  font-size="20px"
                  height="24px"
                >
                  Sign in to hop right back to RentHive
                </Heading>
              </Stack>

              <Stack as="form"
                justifyContent="center"
                // onSubmit={handleSubmit(onSubmit)} 
                spacing={4}>
                <FormControl id="email" mb={12} mt={24}>
                  <FormLabel color="#4E4E4E" fontWeight="600" font-size="20px">Email</FormLabel>
                  <Input focusBorderColor='#FD909D' type="email" placeholder=" Enter your email"
                    fontWeight="400"
                    color="#110B03"
                    width="400px"
                    height="27px"
                    mt={3}
                    style={{ borderRadius: '5px', borderWidth: '0.7px', borderColor: '#81818' }}
                  />
                </FormControl>

                <FormControl id="password">
                  <FormLabel color="#4E4E4E" fontWeight="600" font-size="20px">Password</FormLabel>
                  <Input focusBorderColor='#FD909D' type="password" placeholder=" Enter your password"
                    fontWeight="400"
                    color="#110B03"
                    width="400px"
                    height="27px"
                    mt={3}
                    style={{ borderRadius: '5px', borderWidth: '0.7px', borderColor: '#81818' }}
                  />

                </FormControl>


                <FormControl>
                  <Stack spacing={20} justifyContent="center">
                    <Stack
                      align="start"
                      direction={{ base: 'column', sm: 'row' }}
                      justify="space-between"
                    >
                    </Stack>
                    <button
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        cursor: "pointer",
                        color: "#4E4E4E",
                        fontWeight: 500,
                        textAlign: "end",
                        fontSize: "12px",
                        width:"400px",
                        lineHeight: "15px",

                      }}
                      // onClick={handleForgotPassword}
                    >
                      Forget your password?
                    </button>

                    <Button
                      width="400px"
                      type="submit"
                      height="43px"
                      variant="link"
                      bg="#F4A82B"
                      color="white"
                      borderColor="transparent"
                      boxShadow="none"
                      borderRadius="10px"
                    >
                      Log In
                    </Button>
                    <Button
                      width="400px"
                      type="submit"
                      height="43px"
                      fontWeight="550"
                      bg="transparent"
                      color="#4E4E4E"
                      borderColor="#F4A82B"
                      bgGradient=""
                      borderRadius="10px"
                      leftIcon={<Image src={google} height="22px" />}
                    >
                      Log In with Google
                    </Button>
                    <Button
                      width="400px"
                      type="submit"
                      height="43px"
                      fontWeight="550"
                      bg="white"
                      color="#4E4E4E"
                      borderColor="#F4A82B"
                      bgGradient=""
                      borderRadius="10px"
                      leftIcon={<Image src={facebook} height="22px" />}
                    >
                      Log In with Facebook
                    </Button>

                    <Box width="400px" display="flex" justifyContent="center" alignItems="center" >
                      <Text
                        color="#4E4E4E"
                        fontWeight="500"
                        textAlign="center"
                        fontSize="12px"
                        height="15px"
                        marginRight="2px"
                        cursor= "default"
                      >
                        Dont have an account?
                      </Text>
                      <button
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          cursor: "pointer",
                          color: "#4E4E4E",
                          fontWeight: 700,
                          textAlign: "center",
                          fontSize: "12px",
                          lineHeight: "15px",
                          textDecoration: "underline"
                        }}
                        onClick={handleSignup}
                      >
                        Sign up
                      </button>
                    </Box>
                  </Stack>
                </FormControl>
              </Stack>

            </Box>
          </Stack>
        </Box>
      </Flex>
    </>
  );
};



