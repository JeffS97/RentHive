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
  Card, CardHeader, CardBody, CardFooter, Divider, Avatar, PinInputDescendantsProvider
} from '@chakra-ui/react';


import { FiFacebook } from 'react-icons/fi';
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import banner from ".//banner.png"
import pp from ".//profile pic.png"
import { TbBookmark } from 'react-icons/tb';
import { HiBookmark } from 'react-icons/hi'
import { BiDotsVerticalRounded } from 'react-icons/bi';

export default function ProfileCard(props) {

  const navigate = useNavigate();

  const mySavedString = localStorage.getItem('mySaved');
  const mySaved = JSON.parse(mySavedString);
  console.log(mySaved)

  const isSaved = mySaved.includes(props.name);

  // const isBookmarked = false;

  // const [bookmarked, setBookmarked] = useState(false);


  const handleProceed = () => {
    // setBookmarked(!bookmarked);
    // props.handleSavedName(props.name);
    if (!isSaved) {
      props.handleSavedName(props.name);
    } else {
      props.handleRemoveName(props.name);
    }
  };

  

  return (
    <>
      <Box ml="8px" mt="30px" mr="5px" width="253.6px" height="343.2px">
        <Box height="135.2px" width="253.6px" borderRadius="20px">
          <Image src={banner} height="100%" width="100%" />
          <Flex display="flex" flexDirection="column">
            <Avatar mt="-80px" ml="75px" src={props.icon} height="100px" width="100px" />
            <Text mt="-150px" ml="8px"
              width="69.6px" height="25.6px" bg="#27CA68" fontWeight="600" fontSize="10px" color="#110B03"
              display="flex" justifyContent="center" alignItems="center"
              alignSelf="flex-start" borderRadius="50px"
            >{props.match}</Text>

            {isSaved ? (
              <HiBookmark onClick={() => handleProceed(props.name)}
                style={{
                  marginLeft: "205px", marginTop: "-35px", width: "20px", height: "20px",
                }} />
            ) : (
              <TbBookmark  onClick={() => handleProceed(props.name)}
              style={{
                marginLeft: "205px", marginTop: "-35px", width: "20px", height: "20px",
              }} />
            )}
            <BiDotsVerticalRounded style={{ marginLeft: "225px", marginTop: "-20px", width: "20px", height: "20px" }} />
          </Flex>
        </Box>


        <Box bg="#FCEDC9" height="208px" width="253.6px"
          borderBottomLeftRadius="20px" borderBottomRightRadius="20px"
          borderBottom="1px solid #000000">
          <Flex flexDirection="column" alignItems="center" >
            <Text mt="29px" mb="0"
              fontSize="18px" fontWeight="600" color="#110B03">{props.name}</Text>
            <Text mt="-1px" mb="0"
              fontSize="13px" fontWeight="400" color="#4E4E4E">{props.age} • {props.gender}</Text>
              
            <Text ml="20px" mr="20px" mt="7" mb="-10"  display="flexWrap" width="210px"
            style={{overflowWrap: 'break-word'}}
              fontSize="13px" fontWeight="400" color="#110B03">{props.bio} </Text>
            <Text alignSelf="flex-start" mt="43px" mb="0px" ml="20px"
              fontSize="12px" fontWeight="400" color="#4E4E4E">You both have in common:</Text>
          </Flex>
          <Box display="flex" justifyContent="flex-start" height="25px" ml="20" position="absolute">
            <Flex width="100%">
              <Text mt="12px"
                width="85.6px" height="20px" bg="#ED8713" fontWeight="600" fontSize="11px" color="#F5F5F5"
                display="flex" justifyContent="center" alignItems="center" alignSelf="center"
                borderRadius="12px"
              >{props.tag1}</Text>
              <Text mt="12px" ml="4px"
                width="85.6px" height="20px" bg="#ED8713" fontWeight="600" fontSize="11px" color="#F5F5F5"
                display="flex" justifyContent="center" alignItems="center" alignSelf="center"
                borderRadius="12px"
              >{props.tag2}</Text>

              <Text display="flex" justifyContent="center" alignItems="center"
                ml="4px" color="#4E4E4E" fontSize="10px" fontWeight="400px">{props.more}</Text>
            </Flex>
          </Box>
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
