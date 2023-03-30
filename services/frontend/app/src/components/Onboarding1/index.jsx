import { Link, useNavigate } from "react-router-dom";
import profile from "./profile.jpeg"
import profile2 from "./Kyedae2.jpeg"
import profile3 from "./profile3.jpg"
import progress from "./progress1.png"
import './index.css';
import ProfileCard from "../ProfileCard"
import profilepic from "./profilepic.png"

import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Icon,
    Stack,
    Button,
    ButtonGroup,
    IconButton,
    Text,
    Tooltip,
    Image,
    Flex,
    Container, InputRightAddon,
    VStack,
    // FormErrorMessage, 
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
    extendTheme

} from '@chakra-ui/react';
import React, { useState } from "react";
import { BsArrowRightShort, BsQuestionCircle } from 'react-icons/bs';
import { GrAdd } from 'react-icons/gr';
import { IoIosAddCircleOutline } from 'react-icons/io';

export default function Onboarding1() {
    const navigate = useNavigate();
    const handleProceed = () => {
        navigate("/onboarding2");
    };
    // const history = useHistory();

    const [isClickedFemale, setClickedFemale] = useState(false);

    const handleClickFemale = () => {
        setClickedFemale(!isClickedFemale);
        setGender("Female")
    };

    // const activeColorOthers = isClickedOthers ? '#F0F0F0' : '#F9D88A';

    const [isClickedMale, setClickedMale] = useState(false);

    const handleClickMale = () => {
        setClickedMale(!isClickedMale);
        setGender("Male")
    };

    const [isClickedOthers, setClickedOthers] = useState(false);

    const handleClickOthers = () => {
        setClickedOthers(!isClickedOthers);
        setGender("Others")
    };

    // const basicBoxStyles = {
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     textAlign: 'center',
    //     boxSize: '250px',
    //     color: 'white',
    //     textShadow: '0 0 20px black',
    //     fontWeight: 'bold',
    //     fontSize: '20px',
    //     px: 4,
    //     // background:'./profile.jpeg',
    // }




    const [displayName, setDisplayName] = useState("")
    const [age, setAge] = useState("")
    const handleAgeChange = (e) => {
        if (e.key === "Enter") {
            setAge(e.target.value + " years");
        }
    }
    const [gender, setGender] = useState("")


    const myNameString = JSON.stringify(displayName);
    localStorage.setItem('myName', myNameString);
    console.log(myNameString)

    const myAgeString = JSON.stringify(age);
    localStorage.setItem('myAge', myAgeString);

    const myGenderString = JSON.stringify(gender);
    localStorage.setItem('myGender', myGenderString);

    return (
        <div>
            <Box>
                <Box width="85%" height="550px" mx="auto">
                    <Box justifyContent='center' mt='14' display='flex'>
                        <Image ml="-15px" src={progress} alt='progress bar' h='35' w='350px' />
                    </Box>
                    <Box w='800px' h='80'  >
                        <Heading mt="15px" fontSize="24" fontWeight="700" lineHeight="0.8">Before we get started...</Heading>
                        <Text color="#6A6A6A" lineHeight="0.8">Let’s set up your basic information! This helps us get to know you. ✍</Text>
                    </Box>
                    <Box w='1100px' h='400' mt='15'>
                        <Flex>
                            <Box w='220px' h='278'>
                                <Flex direction='column'>
                                    <Box mt='20'>
                                        <Heading fontSize='18' fontWeight="600" lineHeight="0.6">
                                            Profile Pictures</Heading>
                                        <Text mt={2} color="#6A6A6A" fontWeight="400" fontSize="14">
                                            Images of yourself to be seen by others.</Text>
                                    </Box>
                                    <Spacer />
                                    <Box mt='45'>
                                        <Heading fontSize='18' fontWeight="600" lineHeight="0.6">
                                            Personal Information</Heading>
                                        <Text mt={2} color="#6A6A6A" fontSize="13" fontWeight="400">
                                            Provide information about yourself.</Text>
                                    </Box>
                                </Flex>
                            </Box>

                            <Box bg="" w='580px' h='450' ml='40' mt="10px">
                                <Flex direction='column'>
                                    <Box h='140'>
                                        <Flex direction="row">
                                            <Box w='100px' h='100' borderWidth='1px' borderRadius='12px' position="relative" bg='#FCEDC9' backgroundSize='cover' backgroundImage={profile} backgroundPosition='center'></Box>
                                            <Box w='100px' h='100' ml='20' borderWidth='1px' borderRadius='12px' position="relative" bg='#FCEDC9' backgroundSize='cover' backgroundImage={profile2} backgroundPosition='center'></Box>
                                            <Box w='100px' h='100' ml='20' borderWidth='1px' borderRadius='12px' position="relative" bg='#FCEDC9' backgroundSize='cover' backgroundImage={profile3} backgroundPosition='center'></Box>
                                            <Icon
                                                as={IoIosAddCircleOutline}
                                                w='20px'
                                                h='20'
                                                mt='50'
                                                ml='20'
                                                color="#6A6A6A"
                                            />
                                        </Flex>
                                    </Box>
                                    <Spacer />
                                    {/* inputs for name + bday + gender */}
                                    <Box mt='15' width="470px" bg="" >
                                    <Text color="#818181" fontSize="14px" fontWeight="600"
                                            mt="5px" ml="15px" mb="5px" position="absolute">Display Name</Text>
                                        <Input
                                            mt="0px"
                                            w='445px'
                                            h='40px'
                                            borderRadius='12px'
                                            border='transparent'
                                            bg='#F0F0F0'
                                            fontSize='15px'
                                            fontFamily='helvetica'
                                            outline='none' value={displayName}
                                            onChange={(e) => setDisplayName(e.target.value)}
                                            style={{ paddingTop: "15px", paddingLeft: "15px" }}
                                        />
                                        
                                        <Text color="#818181" fontSize="14px" fontWeight="600"
                                            mt="20px" ml="15px" mb="5px" position="absolute">Full Name</Text>
                                        <Input 
                                            mt="15px"
                                            w='445px'
                                            h='40px'
                                            borderRadius='12px'
                                            border='transparent'
                                            bg='#F0F0F0'
                                            fontSize='15px'
                                            fontFamily='helvetica'
                                            outline='none'
                                            style={{ paddingTop: "15px", paddingLeft: "15px" }}
                                        />

                                        <Box mt='15px' display="flex" alignItems='center'>
                                            <Text fontSize='13px' color="#6A6A6A">Age</Text>
                                            <Spacer />
                                            <Input
                                                w='35px'
                                                h='30'
                                                mr="30px"
                                                pl="15px"
                                                borderRadius='12px'
                                                border='transparent'
                                                bg='#F0F0F0'
                                                fontSize='16px'
                                                type="text"
                                                outline='none'
                                                onKeyDown={handleAgeChange}
                                                // onChange={(e)=>setAge(e.target.value)}
                                                fontFamily='helvetica'
                                            // focusBorderColor="transparent"
                                            ></Input>
                                            <Text ml="50px" fontSize='13px' color="#6A6A6A">Gender</Text>
                                            <Text
                                                as='button'
                                                borderRadius='12px'
                                                w='70px'
                                                h='30px'
                                                ml="10px"
                                                borderStyle={"solid"}
                                                border='transparent'
                                                bg={isClickedFemale ? '#F9D88A' : '#F0F0F0'}
                                                // _hover={{ bg: "#FCEDC9", color: "black" }}
                                                onClick={() => { handleClickFemale() }}
                                            >
                                                Female
                                            </Text>
                                            <Box
                                                as='button'
                                                borderRadius='12px'
                                                w='70px'
                                                h='30px'
                                                ml='8px'
                                                borderStyle={"solid"}
                                                border='transparent'
                                                bg={isClickedMale ? '#F9D88A' : '#F0F0F0'}
                                                // _hover={{ bg: "#FCEDC9", color: "black" }}
                                                onClick={handleClickMale}
                                            >
                                                Male
                                            </Box>
                                            <Box
                                                as='button'
                                                borderRadius='12px'
                                                w='70px'
                                                h='30px'
                                                ml='8px'
                                                mr="10px"
                                                borderStyle={"solid"}
                                                border='transparent'
                                                bg={isClickedOthers ? '#F9D88A' : '#F0F0F0'}
                                                // _hover={{ bg: "#FCEDC9", color: "black" }}
                                                onClick={handleClickOthers}
                                            >
                                                Others
                                            </Box>
                                        </Box>
                                    </Box>
                                </Flex>
                            </Box>

                            <Box height="400px" ml="-50px" mt="-50px" bg="">
                                <Text color="#5A5A5A" mb="-20px" fontSize='14px' fontWeight="600" ml="5px"> This is how others view your mini profile:</Text>
                                <ProfileCard mt="0px" bg="" name={displayName} age={age} gender={gender}
                                    icon={profilepic}
                                    bio="This roommate has no description yet!" match="? Match"
                                    tag1="?" tag2="?" more="+ ? more"

                                />
                            </Box>
                        </Flex>
                    </Box>
                    {/* bottom page buttons */}
                    <Box mt='-10px' bg="">
                        <Button className="backbutton"
                            fontSize="14px"
                            rightIcon={<BsArrowRightShort />}
                            fontWeight="500px"
                            onClick={handleProceed}
                            style={{
                                marginLeft: "955px",
                                width: "100px",
                                height: "30px",
                                borderRadius: "12px",
                                backgroundColor: "#F9D88A",
                                borderColor: "#F9D88A", // set the border color to a solid color
                                borderStyle: "solid",
                                boxShadow: "none"
                            }}>
                            Proceed
                        </Button>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

