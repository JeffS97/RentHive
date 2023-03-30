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
  Select,
  // FormErrorMessage,
  Heading,
  Icon,
  InputGroup,
  InputRightElement,
  ChakraProvider,
} from '@chakra-ui/react';

import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import style from ".//style.css"
import addressbook from ".//address-book.png"
import facebook from ".//brand-facebook.png"
import twitter from ".//brand-twitter.png"
import discord from ".//brand-discord.png"
import arrownext from ".//arrownext.png"
import progressIndicator4 from ".//ProgressIndicator4.png"
import back from ".//back.png"
import {FiFacebook} from 'react-icons/fi';

export default function Onboarding4() {

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/onboarding3");
  };


  return (
    <>
      <Box width="80%" display="flex" margin="auto" flexDirection="column" >
      <Image  mt="20px" src={progressIndicator4} height="90%" width="90%" ml="45px" />
        <Heading
          color="#110B03"
          fontWeight="700"
          fontSize="24px"
          mb={-10}

        >
          Almost there!
        </Heading>
        <Text
          color="#6A6A6A"
          fontWeight="400"
          fontSize="16px"
        >
          Connect your accounts to find mutuals with potential roommates.
        </Text>
      </Box>
      <Box width="400px" margin="auto" display="flex" flexDirection="column" alignItems="center">
        <Button
          // className="gradient-button"
          mt={30}
          width="404px"
          height="40px"
          fontWeight="600"
          fontSize="14px"
          backgroundColor="transparent"
          color="#110B03"
          borderStyle="solid"
          borderWidth="2px"
          borderRadius="12px"
          borderColor="#F9D88A"
          // borderStyle="solid"


          leftIcon={<Image src={addressbook} height="22px" />}
        >
          Connect to your contacts
        </Button>
        <Button

          mt={25}
          width="408px"
          type="submit"
          height="40px"
          fontWeight="600"
          fontSize="14px"
          bg=" #1576F1"
          color="#FFFFFF"
          borderColor="transparent"
          borderRadius="10px"
          leftIcon={<Image src={facebook} height="22px" />}
        >
          Connect to Facebook
        </Button>
        
        <Button
          mt={25}
          width="408px"
          type="submit"
          height="40px"
          fontWeight="600"
          fontSize="14px"
          bg="#00ACED"
          color="#FFFFFF"
          borderColor="transparent"
          borderRadius="10px"
          leftIcon={<Image src={twitter} height="22px" />}
        >
          Connect to Twitter
        </Button>
        <Button
          mt={25}
          width="408px"
          type="submit"
          height="40px"
          fontWeight="600"
          fontSize="14px"
          bg="#5865F2"
          color="#FFFFFF"
          borderColor="transparent"
          borderRadius="10px"

          leftIcon={<Image src={discord} height="22px" />}
        >
          Connect to Discord
        </Button>
        <Button
          alignSelf="flex-start"
          mt={30}
          width="120px"
          type="submit"
          height="40px"
          fontWeight="500"
          fontSize="14px"
          backgroundColor="transparent"
          color="#110B03"
          borderStyle="solid"
          borderWidth="2px"
          borderRadius="12px"
          borderColor="#F9D88A"
        // leftIcon={<Image src={google} height="22px" />}
        >
          Skip this step
        </Button>
        <Button
          alignSelf="flex-end"
          mt="-40px"

          width="245px"
          type="submit"
          height="40px"
          fontWeight="50"
          fontSize="14px"
          bg="#F9D88A"
          color="#110B03"
          borderColor="transparent"
          borderRadius="10px"
          rightIcon={<Image src={arrownext} height="80%" width="80%" ml="-2px" />}
        >
          Finish
        </Button>
      </Box>
      <Button 
      mt="70px"
        ml="130px"
        fontSize="14px"
        fontWeight="500px"

        style={{

          width: "100px",
          height: "30px",
          borderRadius: "10px",
          backgroundColor: "transparent ",
          borderStyle: "solid",
          borderColor: "#F9D88A", // set the border color to a solid color
          boxShadow: "none"
        }}
        onClick={handleGoBack}
      leftIcon={<Image src={back} ml="2px"  height="70%" width="70%"/>}
      >
        Go Back
      </Button>
    </>
  );
}