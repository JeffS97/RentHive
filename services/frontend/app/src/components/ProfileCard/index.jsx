import {
  Box,
  FormControl, FormLabel,
  Input,
  Stack,
  Button, IconButton,
  Text, Image, Badge,
  Flex,
  Select,
  // FormErrorMessage,
  Heading,
  Icon,
  InputGroup,
  InputRightElement,
  ChakraProvider,
  Card, CardHeader, CardBody, CardFooter, Divider, Avatar
} from '@chakra-ui/react';


import { FiFacebook } from 'react-icons/fi';
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import banner from ".//banner.png"
import pp from ".//profile pic.png"
import save from ".//save.png"

export default function ProfileCard(name) {
  
  return (
    <>
    <div>name</div>
      <Box mt="20px" ml="20px" bg="yellow" height="169px" width="317px" borderRadius="20px">
        <Image src={banner} height="169px" width="317px" />
        <Flex display="flex" flexDirection="column">
        <Avatar mt="-100px" ml="96px" src={pp} height="125px" width="125px" />
        <Text mt="-190px" ml="10px"
            width="87px" height="32px" bg="#27CA68" fontWeight="600" fontSize="12px" color="#110B03"
            display="flex" justifyContent="center" alignItems="center"
            alignSelf="flex-start" borderRadius="50px"
          >91% Match</Text>
          <Image ml="257px" mt="-35px" src={save} width="48px" height="24px" />
        </Flex>
      </Box>

      <Box  ml="20px" bg="#FCEDC9" height="260px" width="317px" 
      borderBottomLeftRadius="20px" borderBottomRightRadius="20px" 
      borderBottom="1px solid #000000">
        <Flex flexDirection="column" alignItems="center" >
          <Text mt="36px" mb="0"
            fontSize="20px" fontWeight="600" color="#110B03">Celeste Hong</Text>
          <Text mt="2" mb="0"
            fontSize="14px" fontWeight="400" color="#4E4E4E">23 years • Female</Text>

          <Text ml="20px" mr="20px" mt="12" mb="0"
            fontSize="15px" fontWeight="400" color="#110B03">I'm a postgrad student from Korea that loves penguins and peaches!
            It would be a pleasure to meet you :)</Text>
          <Text alignSelf="flex-start" mt="48px" mb="0px" ml="20px" fontSize="14px" fontWeight="400" color="#4E4E4E">You both have in common:</Text>
        </Flex>
        <Box display="flex" justifyContent="flex-start" height="25px" mt="3" ml="20">
          <Flex>
            <Text mt="0"
              width="107px" height="25px" bg="#ED8713" fontWeight="600" fontSize="12px" color="#F5F5F5"
              display="flex" justifyContent="center" alignItems="center"
              alignSelf="flex-start" borderRadius="12px"
            >Bedok</Text>
            <Text mt="0" ml="4px"
              width="107px" height="25px" bg="#ED8713" fontWeight="600" fontSize="12px" color="#F5F5F5"
              display="flex" justifyContent="center" alignItems="center"
              borderRadius="12px"
            >Early bird</Text>
            <Text display="flex" justifyContent="center" alignItems="center" ml="4px" color="#4E4E4E" fontSize="12px" fontWeight="400px"> + 2 more.</Text>
          </Flex>

        </Box>
      </Box>



    </>
  );
}



{/* <Box bg="yellow" width="317px" height="429px" borderRadius="20px" display="flex" flexDirection="column">
<Image src={banner} height="169px" width="317px" />
<Avatar mt="-100px" ml="92px" src={pp} height="125px" width="125px" />
<Box display="flex" flexDirection="column" alignItems="center"
 width="317px" height="169px" >
  
  <Text fontSize="20px" fontWeight="600" color="#110B03">Celeste Hong</Text>
  <Text fontSize="14px" fontWeight="400" color="#4E4E4E">23 years • Female</Text>
  <Text  fontSize="15px" fontWeight="400" color="#110B03">I'm a postgrad student from Korea that loves penguins and peaches!
    It would be a pleasure to meet you :)</Text>
    <Text>You both have in common:</Text>
  <Badge>  </Badge>
</Box>
</Box> */}
