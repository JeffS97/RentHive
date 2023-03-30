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
import React, { Component, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import bigbee from ".//bigbee.png"
import facebook from ".//facebook.png"
import google from ".//google.png"
import NavbarPrelogin from "../Navbars/NavbarPrelogin"

export default function Signup() {

  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate("/login");
  };
  const handleSignUp=()=>{
    navigate("/onboarding1")
  }

  return (
    <>
    <NavbarPrelogin text="Log In"/>
    <Flex>
      <Box display="flex" justifyContent="center" alignItems="center" width="100%" padding="32px">

        <Box display="flex" justifyContent="center" alignItems="center" width="60%" height="75vh" >
          <Image src={bigbee} alt="logo" width="100%" height="100%" objectFit="contain"/>
        </Box>
        <Box width="500px" >

          <Stack textAlign="flex-start" flex-direction="column">
            <Heading font-family="Inter" font-style="normal" color="#110B03" mb="-15px"
              fontWeight="700"
              font-size="36px"
            >
              Still finding a roommate?
            </Heading>
            <Heading font-family="Inter" font-style="normal" color="#110B03" mb="4px"
              fontWeight="700"
              font-size="36px"
            >
              We've got your back.
            </Heading>
            <Heading font-family="Inter" font-style="normal" fontSize="16px"
              color="#6A6A6A"
              fontWeight="400"
              font-size="20px"
              height="24px"
            >
              Create an account to get started with RentHive.
            </Heading>
          </Stack>

          <Stack as="form"
            justifyContent="center"
            align-content="space-between"
          >
            <FormControl id="email" mt={16}>
              <FormLabel color="#4E4E4E" fontWeight="600" font-size="20px">Email</FormLabel>
              <Input focusBorderColor='#FD909D' type="email" placeholder=" Enter your email"
                fontWeight="400"
                color="#110B03"
                width="400px"
                height="27px"
                borderStyle="solid"
                mt={3}
                style={{ borderRadius: '5px', borderWidth: '0.7px', borderColor: '#81818' }}
              />
            </FormControl>

            <FormControl id="password" mb={8} >
              <FormLabel color="#4E4E4E" fontWeight="600" font-size="20px">Password</FormLabel>
              <Input focusBorderColor='#FD909D' type="password" placeholder=" Enter your password"
                fontWeight="400"
                color="#110B03"
                width="400px"
                height="27px"
                mt={3}
                borderStyle="solid"
                style={{ borderRadius: '5px', borderWidth: '0.7px', borderColor: '#81818' }}
              />

            </FormControl>

            <FormControl id="confirm password" mt={16}>
              <FormLabel color="#4E4E4E" fontWeight="600" font-size="20px">Confirm Password</FormLabel>
              <Input focusBorderColor='#FD909D' type="password" placeholder=" Enter your password"
                fontWeight="400"
                color="#110B03"
                width="400px"
                height="27px"
                mt={3}
                borderStyle="solid"
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
                  onClick={handleSignUp}
                >
                  Sign Up
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
                  borderStyle="solid"
                  borderRadius="10px"
                  leftIcon={<Image src={google} height="22px" />}
                >
                  Sign Up with Google
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
                  borderStyle="solid"
                  borderRadius="10px"
                  leftIcon={<Image src={facebook} height="22px" />}
                >
                  Sign Up with Facebook
                </Button>

                <Box width="400px" display="flex" justifyContent="center" alignItems="center" >
                  <Text
                    color="#4E4E4E"
                    fontWeight="500"
                    // width="130px"
                    textAlign="center"
                    fontSize="12px"
                    height="15px"
                    marginRight="2px"
                    cursor= "default"
                  >
                    Already have an account?
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
                    onClick={handleLogIn}
                  >
                    Log In
                  </button>
                </Box>
              </Stack>
            </FormControl>
          </Stack>

        </Box>
      </Box>
    </Flex>
    </>
  );
}
