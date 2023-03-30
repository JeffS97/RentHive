import { Link, useNavigate } from "react-router-dom";
import profile from "./profile.jpeg"
import progress from "./progressbar.png"
import './index.css';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  ButtonGroup,
  IconButton,
  Text,
  Image,
  Flex,
  Container,
  VStack,
  Heading,
  Spacer,
  InputGroup,
  InputRightElement,
  InputLeftAddon,
  Center,
  background,
  Card, CardHeader, CardBody, CardFooter,
  Divider,
  Badge,
  extendTheme,
  Textarea, InputLeftElement,
} from '@chakra-ui/react';
import { AiOutlineSearch } from "react-icons/ai";
import React, { useState } from "react";
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
import ProfileCard from "../ProfileCard"
import profilepic from "./profilepic.png"
import NavbarOnboarding from "../Navbars/NavbarOnboarding"

var data = require("../Onboarding3/MOCK_DATA.json")


export default function Onboarding2() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/onboarding1");
  };

  const handleProceed = () => {

    navigate("/onboarding3");
};

  const [isClickedFemale, setClickedFemale] = useState(false);

  const handleClickFemale = () => {
    setClickedFemale(!isClickedFemale);
  }


  const [isClickedMale, setClickedMale] = useState(false);

  const handleClickMale = () => {
    setClickedMale(!isClickedMale);
  }

  const [isClickedOthers, setClickedOthers] = useState(false);

  const handleClickOthers = () => {
    setClickedOthers(!isClickedOthers);
  }

  const basicBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxSize: '250px',
    color: 'white',
    textShadow: '0 0 20px black',
    fontWeight: 'bold',
    fontSize: '20px',
    px: 4,
  }

  const [onboardFilter, setOnboardFilter] = useState([])

  const [value, setValue] = useState('')
  const handleValueChange = (e) => {
    setValue(e.target.value)
  }

  const onAdd = (searchTerm) => {
    setValue(searchTerm)
    const abc = [...val, searchTerm]
    setVal(abc)
    setValue("")
    if (searchTerm.split("/").length - 1 > 0) {
      const len = searchTerm.split("/").length
      const temp = searchTerm.split("/")
      const tempArray = [...onboardFilter, temp[len - 1]]
      setOnboardFilter(tempArray)
      console.log(onboardFilter)
    } else {
      const tempArray = [...onboardFilter, searchTerm]
      setOnboardFilter(tempArray)
      console.log(onboardFilter)
    }
  }

  const [val, setVal] = useState([])


  const handleDelete = (i) => {
    const deleteVal = [...val]
    const d = deleteVal.splice(i, 1)
    setVal(deleteVal)

    const deleteOnboardFilter = [...onboardFilter]
    const e = deleteOnboardFilter.splice(i, 1)
    setOnboardFilter(deleteOnboardFilter)
  }

  const myNameString = localStorage.getItem('myName');
  console.log(myNameString)
  const displayName = JSON.parse(myNameString);
  console.log(displayName)

  const myAgeString = localStorage.getItem('myAge');
  const age = JSON.parse(myAgeString);

  const myGenderString = localStorage.getItem('myGender');
  const gender = JSON.parse(myGenderString);

  const [description, setDescription] = useState("")

  //NEED: FUNCTIONALITY FOR TAG

  return (
    <div>
      <NavbarOnboarding/>
      <Box ml="10px" height="550px" width="85%" display="flex" margin="auto" flexDirection="column" alignItems="center">
        <Image mt="15px" src={progress} h='35' w='350px' mx="auto" />
        <Box w='1100px' h='80' mt="10px" alignItems="center">
          <Heading mb="0px" fontSize="24" fontWeight="700" lineHeight="0.8">Awesome! Onto the next step...</Heading>
          <Text color="#6A6A6A" lineHeight="0.8">Add in more details about yourself- This connects others similar to you.</Text>
        </Box>
        <Box  w='1100px' h='200' mt='30px'>
          <Flex>
            <Box w='220px' h='278' mt='-15px'>
              <Flex direction='column'>
                <Box >
                  <Heading fontSize='15' lineHeight="0.6">Additional Information</Heading>
                  <Text mt={2} color="#6A6A6A" fontSize="13">This will let us provide you with a better experience.</Text>
                </Box>

              </Flex>
            </Box>
            <Box w='580px' h='400' ml='40' >
              <Flex direction='column'>
                <Flex >
                  <InputGroup mt="-5px" >
                    <InputLeftElement mt="5px" ml="12px"
                      pointerEvents="none"
                      children={<AiOutlineSearch color="gray.300" />} />
                    <Input
                      height="28px" width="450px" pl="40px"
                      borderRadius="12px" borderColor="transparent"
                      outline="none"
                      type="search"
                      disabled={false}
                      value={value}
                      placeholder="  Search filters..."
                      color=" #5A5A5A"
                      bg='#F0F0F0'
                      fontStyle="italic"
                      fontWeight="400"
                      fontSize="12px"
                      onChange={handleValueChange}
                    // onKeyDown={handleKeyPress}
                    />
                  </InputGroup>
                </Flex>
                <div >
                  <div style={{
                    zIndex: "1", position: "absolute", backgroundColor: "#FEF9EC",
                    marginLeft: "20px", width: "200px", borderRadius: "12px"
                  }}>
                    {data.filter(item => {
                      const searchTerm = value.toLowerCase();
                      const fullName = item.full_name.toLowerCase();
                      return (
                        searchTerm && (fullName.startsWith(searchTerm) || fullName.includes(searchTerm)) && fullName !== searchTerm
                      )
                    }).slice(0, 10)
                      .map((item, index) => (
                        <div style={{ fontSize: "16px" }}

                          onClick={() => onAdd(item.full_name)}
                          key={item.full_name}
                        >{item.full_name}</div>
                      ))}
                  </div>
                </div>
                <Box mt={20} height="24px" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  <Text color="#110B03" fontWeight="600" fontSize="16px" >Interests</Text>
                  <Text color="#110B03" fontWeight="400" fontSize="12px" ml={20}>Currently popular: Sports/Basketball, Hobby/Painting, Shows/Anime</Text>
                </Box>
                <Box >

                  {val.length > 0 ? (
                    <div bg="yellow" style={{ display: "flex", flexWrap: "wrap" }}>
                      {val.map((item, index) => {

                        if (item.includes("sports") || item.includes("hobby") || item.includes("music")) {

                          return (
                            <div key={index}
                              style={{
                                display: "flex", justifyContent: "center",
                                textAlign: "center",
                                alignItems: "center",

                              }}>
                              <Box display="flex" flexDirection="row"
                                minWidth="fit-content" p="0 6px" height="25px"
                                //to toggle different colours for filter chips
                                // bg={item=="My ideal roommate" ? "#ED8713" : "#0A6F94" } 
                                bg="#0A6F94"

                                borderRadius="12px" mr="5px" flexWrap="wrap" mt="10px"
                              >
                                <Text color="#FFFFFF" ml="14px" pr="2px"
                                  fontSize="14px"
                                  fontWeight="500" mt="2px"

                                >{item}</Text>
                                <button style={{
                                  background: 'transparent', borderColor: 'transparent',
                                  color: "#FFFFFF", margin: "0 0 10px"
                                }}
                                  onClick={() => handleDelete(index)}
                                >x
                                </button>
                              </Box>

                              {/* <Text
                                                                ml={countInterests % 3 == 0 ? 0 : 15}
                                                                mt={countInterests >= 3 ? 0 : 12}

                                                                bg="#0A6F94"
                                                                color="#F5F5F5"
                                                                width="140px"
                                                                height="25px"
                                                                fontSize="13px"
                                                                fontWeight="500"
                                                                borderRadius="12px"
                                                                style={{
                                                                    display: "flex",
                                                                    justifyContent: "center",
                                                                    textAlign: "center",
                                                                    alignItems: "center"
                                                                }}
                                                                key={index}>{item}</Text>
                                                            <button
                                                                style={{
                                                                    marginTop: countInterests <= 2 ? '-px' : '-12px', marginLeft: '-25px', width: '25px',
                                                                    height: '25px', background: 'transparent', borderColor: 'transparent',
                                                                    color: "#F5F5F5"
                                                                }}
                                                                onClick={() => handleDelete(index)}
                                                            >x
                                                            </button> */}
                            </div>
                          )
                        }
                      })}
                    </div>
                  ) : (
                    <Text
                      color=" #110B03" fontWeight="400" fontSize="12px" fontStyle="italic"
                    >Empty!</Text>
                  )
                  }

                </Box>
                <Box mt={10} height="24px" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  <Text color="#110B03" fontWeight="600" fontSize="16px" >Traits</Text>
                  <Text color="#110B03" fontWeight="400" fontSize="12px" ml={20}>Try listing traits such as animals, diet, and sleep schedule!</Text>
                </Box>
                <Box >
                  {val.length > 0 ? (
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                      {val.map((item, index) => {
                        if (item.includes("diet") || item.includes("religion") || item.includes("animals") || item.includes("sleep")) {
                          return (
                            <div key={index}
                              style={{
                                display: "flex", justifyContent: "center",
                                textAlign: "center",
                                alignItems: "center",

                              }}>
                              <Box display="flex" flexDirection="row"
                                minWidth="fit-content" p="0 6px" height="25px"
                                //to toggle different colours for filter chips
                                // bg={item=="My ideal roommate" ? "#ED8713" : "#0A6F94" } 
                                bg="#0A6F94"

                                borderRadius="12px" mr="5px" flexWrap="wrap" mt="10px"
                              >
                                <Text color="#FFFFFF" ml="14px" pr="2px"
                                  fontSize="14px"
                                  fontWeight="500" mt="2px"

                                >{item}</Text>
                                <button style={{
                                  background: 'transparent', borderColor: 'transparent',
                                  color: "#FFFFFF", margin: "0 0 10px"
                                }}
                                  onClick={() => handleDelete(index)}
                                >x
                                </button>
                              </Box>

                              {/* <Text
                                                                ml={countTraits % 3 == 0 ? 0 : 15}
                                                                mt={countTraits >= 3 ? 0 : 12}

                                                                bg="#0A6F94"
                                                                color="#F5F5F5"
                                                                width="140px"
                                                                height="25px"
                                                                fontSize="13px"
                                                                fontWeight="500"
                                                                borderRadius="12px"
                                                                style={{
                                                                    display: "flex",
                                                                    justifyContent: "center",
                                                                    textAlign: "center",
                                                                    alignItems: "center"
                                                                }}
                                                                key={index}>{item}</Text>
                                                            <button
                                                                style={{
                                                                    marginTop: countTraits <= 2 ? '-px' : '-12px', marginLeft: '-25px', width: '25px',
                                                                    height: '25px', background: 'transparent', borderColor: 'transparent',
                                                                    color: "#F5F5F5"
                                                                }}
                                                                onClick={() => handleDelete(index)}
                                                            >x
                                                            </button> */}
                            </div>
                          )
                        }


                      })}
                    </div>
                  ) : (
                    <Text
                      color=" #110B03" fontWeight="400" fontSize="12px" fontStyle="italic"
                    >Empty!</Text>
                  )
                  }

                </Box>
                <Box mt={10} height="24px" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  <Text color="#110B03" fontWeight="600" fontSize="16px" >Location</Text>
                </Box>


                {val.length > 0 ? (
                  <div bg="red" style={{ display: "flex", flexWrap: "wrap" }}>
                    {val.map((item, index) => {

                      if (item.includes("Location")) {
                        return (
                          <div key={index}
                            style={{
                              display: "flex", justifyContent: "center",
                              textAlign: "center",
                              alignItems: "center",

                            }}>
                            <Box display="flex" flexDirection="row"
                              minWidth="fit-content" p="0 6px" height="25px"
                              //to toggle different colours for filter chips
                              // bg={item=="My ideal roommate" ? "#ED8713" : "#0A6F94" } 
                              bg="#0A6F94"

                              borderRadius="12px" mr="5px" flexWrap="wrap" mt="10px"
                            >
                              <Text color="#FFFFFF" ml="14px" pr="2px"
                                fontSize="14px"
                                fontWeight="500" mt="2px"

                              >{item}</Text>
                              <button style={{
                                background: 'transparent', borderColor: 'transparent',
                                color: "#FFFFFF", margin: "0 0 10px"
                              }}
                                onClick={() => handleDelete(index)}
                              >x
                              </button>
                            </Box>

                            <button
                              style={{
                                height: '25px', background: 'transparent', borderColor: 'transparent',
                                color: "#F5F5F5"
                              }}
                              onClick={() => handleDelete(index)}
                            >x
                            </button>

                          </div>
                        )
                      }
                    })}
                  </div>
                ) : (
                  <Text
                    color=" #110B03" fontWeight="400" fontSize="12px" fontStyle="italic"
                  >Empty!</Text>
                )
                }



                <Box mt='15'>
                  <Text color="#818181" fontSize="14px" fontWeight="600"
                    mt="5px" ml="15px" mb="0px" position="absolute">Description</Text>
                  <Input
                    mt="0px"
                    w='440px'
                    h='80px'
                    borderRadius='12px'
                    border='transparent'
                    bg='#F0F0F0'
                    fontSize='15px'
                    fontFamily='helvetica'
                    outline='none'
                    style={{ paddingTop: "5px", paddingLeft: "15px" }}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Box>
              </Flex>
            </Box>

            <Box height="400px" ml="-50px" mt="-50px">
              <Text color="#5A5A5A" mb="-20px" fontSize='14px' fontWeight="600" ml="5px"> This is how others view your mini profile:</Text>
              <ProfileCard mt="0px" name={displayName} age={age} gender={gender}
                icon={profilepic}
                bio={description} match="? Match"
                tag1="?" tag2="?" more="+ ? more"

              />
            </Box>
          </Flex>

          <Button
            ml="125px"
            mt="-20px"
              leftIcon={<BsArrowLeftShort />}
              position='absolute'
              onClick={handleBack}
              bg='white'
              borderRadius='12px'
              border='2px'
              borderColor='#F9D88A'
              borderStyle='solid'
              h='37px'
              w='100px'
              padding='8px'
              fontSize='15px'
              fontWeight='500'
              _hover={{ bg: "#FCEDC9", color: "black" }}
              left='0'>
              Go Back
            </Button>
            <Button
            mr="100px"
            mt="-20px"
              rightIcon={<BsArrowRightShort />}
              position='absolute' variant='outline'
              onClick={handleProceed}
              bg='#F9D88A'
              borderRadius='12px'
              border='transparent'
              h='37px'
              w='100px'
              padding='8px'
              fontSize='15px'
              fontWeight='500'
              _hover={{ bg: "#FCEDC9", color: "black" }}
              right='0'>
              Proceed
            </Button>
        </Box>


        
            
          
        
      </Box>
    </div>
  );
}