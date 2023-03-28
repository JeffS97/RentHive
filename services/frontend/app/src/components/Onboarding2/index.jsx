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
    Textarea

  } from '@chakra-ui/react';
import React, { useState } from "react";
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';

export default function Onboarding2() {
    const navigate = useNavigate();
    const handleProceed = () => {
      navigate("/onboarding-2");
    };

    const handleBack = () => {
      navigate("/onboarding-1");
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
    return (
        <div>
            <VStack spacing="25px">
              <Box w='1100px' h='40' px='2' justifyContent='center' mt='25' display='flex'>
                <Image src={progress} alt='progress bar' h='40' w='400px'/>
              </Box>
              <Box w='1200px' h='80'  mt="25" alignItems="center">
                <Heading fontSize="21" lineHeight="0.8">Awesome! Onto the next step...</Heading>
                <Text color="#6A6A6A" lineHeight="0.8">Add in more details about yourself- This connects others similar to you.</Text>
              </Box>
            <Box w='1200px' h='535' mt='30px'>
                <Flex>
                    <Box w='220px' h='278' mt='10'>
                        <Flex direction='column'>
                        <Box>
                            <Heading fontSize='15' lineHeight="0.6">Additional Information</Heading>
                            <Text mt={2} color="#6A6A6A" fontSize="13">This will let us provide you with a better experience.</Text>
                        </Box>

                        </Flex>
                    </Box>
                    <Box w='580px' h='519'ml='40'>
                        <Flex direction='column'>
                        <Box h='140'>
              
                        </Box>
                        <Spacer />
                        <Box mt='30'>
                        {/* <Textarea 
                          placeholder='Enter your message here'
                          w='100%'
                          h='120px'
                          borderRadius='12px' 
                          border='transparent' 
                          bg='#F0F0F0' 
                          fontSize='16px'
                          fontFamily='Inter'
                          _focus={{ 
                            border: '2px solid #F9D88A',
                            outline: 'none',
                            boxShadow: '0px 0px 6px 0px rgba(249, 216, 138, 0.75)',
                            "&::placeholder": {
                              color: '#F9D88A',
                              transform: 'translateY(-16px)',
                              fontSize: '12px',
                              fontWeight: '500',
                            }
                          }}
                        /> */}
                          <Textarea 
                            placeholder='Description'
                            w='100%'
                            h='150px'
                            borderRadius='12px' 
                            border='transparent' 
                            bg='#F0F0F0' 
                            fontSize='15px'
                            fontFamily='helvetica'
                            outline='none'
                            style={{ paddingTop: "10px" , paddingLeft: "10px" }}
                          />
                        </Box>
                        </Flex>
                    </Box>
                    
                    <Box w='250px' h='465' ml='100'>
                        <Text fontSize='13px'>this is how others view your mini profile:</Text>
                            <Box w='250px'h='' borderWidth='1px' borderRadius='12px' overflow='hidden' position="relative" bg='#FCEDC9'>
                                {/* <Box w='250px' h='100' backdropBlur={'5px'} backdropFilter='auto' backgroundImage={profile} backgroundPosition="center" overflow='hidden'> */}
                                {/* <Box w='250px' h='100' overflow='hidden'>
                                        <Image src={profile} alt={property.imageAlt} className="card-img"/>
                                </Box> */}
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
          <Box justify='flex-end' w='1200px' bg='green' mt='100px' position='relative'>
          <Button 
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
              go back
            </Button>
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