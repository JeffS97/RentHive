import { Link, useNavigate } from "react-router-dom";
import profile from "./profile.jpeg"
import profile2 from "./Kyedae2.jpeg"
import profile3 from "./profile3.jpg"
import progress from "./progress1.png"
import './index.css';
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
    Container,
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
import { BsArrowRightShort, BsQuestionCircle} from 'react-icons/bs';
import { GrAdd } from 'react-icons/gr';
import { IoIosAddCircleOutline} from 'react-icons/io';

export default function Onboarding1() {
    const navigate = useNavigate();
    const handleProceed = () => {
      navigate("/onboarding-2");
    };
    // const history = useHistory();

    const [isClickedFemale, setClickedFemale] = useState(false);
  
    const handleClickFemale = () => {
      setClickedFemale(!isClickedFemale);
    };

    // const activeColorOthers = isClickedOthers ? '#F0F0F0' : '#F9D88A';

    const [isClickedMale, setClickedMale] = useState(false);

    const handleClickMale = () => {
        setClickedMale(!isClickedMale);
      };

    const [isClickedOthers, setClickedOthers] = useState(false);

    const handleClickOthers = () => {
          setClickedOthers(!isClickedOthers);
        };

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
        // background:'./profile.jpeg',
      }
    return (
        <div>
            <VStack spacing='25px'>
                <Box w='1100px' h='40' px='2' justifyContent='center' mt='25' display='flex'>
                <Image src={progress} alt='progress bar' h='40' w='400px'/>
                </Box>
            <Box w='1200px' h='80'  >
                <Heading fontSize="21" lineHeight="0.8">Before we get started...</Heading>
                <Text color="#6A6A6A" lineHeight="0.8">Let’s set up your basic information! This helps us get to know you. ✍</Text>
            </Box>
            <Box w='1200px' h='535'  mt='20'>
                <Flex>
                    <Box w='220px' h='278'>
                        <Flex direction='column'>
                        <Box mt='10'>
                            <Heading fontSize='15' lineHeight="0.6">Profile Pictures</Heading>
                            <Text mt={2} color="#6A6A6A" fontSize="13">Images of yourself to be seen by others.</Text>
                        </Box>
                        <Spacer />
                        <Box mt='110'>
                            <Heading fontSize='15' lineHeight="0.6">Personal Information</Heading>
                            <Text mt={2} color="#6A6A6A" fontSize="13">Provide information about yourself.</Text>
                        </Box>
                        </Flex>
                    </Box>
                    
                    <Box w='580px' h='519'ml='40'>
                        <Flex direction='column'>
                        <Box h='140'>
                            <Flex direction="row">
                            <Box w='120px'h='120' borderWidth='1px' borderRadius='12px' position="relative" bg='#FCEDC9' backgroundSize='cover' backgroundImage={profile} backgroundPosition='center'></Box>
                            <Box w='120px'h='120' ml='20' borderWidth='1px' borderRadius='12px' position="relative" bg='#FCEDC9' backgroundSize='cover' backgroundImage={profile2} backgroundPosition='center'></Box>
                            <Box w='120px'h='120' ml='20' borderWidth='1px' borderRadius='12px' position="relative" bg='#FCEDC9' backgroundSize='cover'backgroundImage={profile3} backgroundPosition='center'></Box>
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
                        <Box mt='60'> 
                            <Input 
                                placeholder='Display Name' 
                                w='580px' 
                                h='61' 
                                variant='filled'
                                borderRadius='12px' 
                                border='transparent' 
                                bg='#F0F0F0' 
                                fontSize='16px'
                                outline='none'
                                // focusBorderColor="transparent"
                            ></Input>

                            <Input 
                                placeholder='Full Name' 
                                w='580px'
                                h='61'
                                variant='filled'
                                borderRadius='12px'
                                border='transparent'
                                bg='#F0F0F0' 
                                fontSize='16px'
                                mt='24'
                                outline='none'
                            ></Input>

                            <Box w='580px'h='61' mt='24'>
                                <Flex direction='row' alignItems='center'>
                                <Text fontSize='13px' color="#6A6A6A">Birthday</Text>
                                <Tooltip label="hello hello" placement='top'>
                                  <Icon as={BsQuestionCircle} ml='5' h='13' color='#6A6A6A' />
                                </Tooltip>

                                <Spacer />
                                <Input 
                                w='510px' 
                                h='40' 
                                borderRadius='12px' 
                                border='transparent' 
                                bg='#F0F0F0' 
                                fontSize='16px'
                                type="date"
                                ml='30'
                                fontFamily='helvetica'
                                // focusBorderColor="transparent"
                                ></Input>
                                </Flex>
                            </Box>

                            <Box mt='10px'>
                                <Flex direction='row' alignItems='center'>
                                <Text fontSize='13px' color="#6A6A6A">Gender</Text>
                                <Box
                                    as='button'
                                    borderRadius='12px'
                                    w='70px'
                                    h='40px'
                                    ml='52px'
                                    borderStyle={"solid"}
                                    border='transparent'
                                    bg={isClickedFemale ? '#F9D88A' : '#F0F0F0'}
                                    _hover={{ bg: "#FCEDC9", color: "black" }}
                                    onClick={() => {handleClickFemale()}}
                                >
                                Female
                                </Box>
                                <Box
                                    as='button'
                                    borderRadius='12px'
                                    w='70px'
                                    h='40px'
                                    ml='12px'
                                    borderStyle={"solid"}
                                    border='transparent'
                                    bg={isClickedMale ? '#F9D88A' : '#F0F0F0'}
                                    _hover={{ bg: "#FCEDC9", color: "black" }}
                                    onClick={handleClickMale}
                                >
                                Male
                                </Box>
                                <Box
                                    as='button'
                                    borderRadius='12px'
                                    w='70px'
                                    h='40px'
                                    ml='12px'
                                    borderStyle={"solid"}
                                    border='transparent'
                                    bg={isClickedOthers ? '#F9D88A' : '#F0F0F0'}
                                    _hover={{ bg: "#FCEDC9", color: "black" }}
                                    onClick={handleClickOthers}
                                >
                                Others
                                </Box>
                                </Flex>
                            </Box>
                        </Box>
                        </Flex>
                    </Box>
                    
                    <Box w='250px' h='465' ml='100'>
                        <Text fontSize='13px'>this is how others view your mini profile:</Text>
                            {/* card profile */}
                            <Box w='250px'h='' borderWidth='1px' borderRadius='12px' overflow='hidden' position="relative" bg='#FCEDC9'>
                                <Box sx={basicBoxStyles} w='250px' h='150px' filter='auto' blur='2px'backgroundImage={profile} borderRadius='12px'>
                                </Box>
                                <Badge
                                    position="absolute"
                                    top="5"
                                    left="5"
                                    colorScheme="gray"
                                    zIndex="1"
                                    fontSize={12}
                                    variant="solid"
                                >
                                    0% match 
                                </Badge>
                            </Box>
                    </Box>
                </Flex>
            </Box>
            {/* bottom page buttons */}
            <Box justify='flex-end' w='1200px' mt='100px' position='relative'>
            <Button 
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
              proceed
            </Button>
            </Box>
            </VStack>
        </div>
      );
}