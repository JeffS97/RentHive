import {
    Box,
    FormControl,
    FormLabel, Checkbox, CheckboxGroup,
    Input, InputLeftElement,
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
    propNames,
} from '@chakra-ui/react';
import React, { useState, createContext } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { ArrowBackIcon } from '@chakra-ui/icons'
import back from ".//back.png"
import forward from ".//forward.png"
import progressIndicator3 from ".//ProgressIndicator3.png"
import { AiOutlineSearch } from "react-icons/ai";
import Search from "../Search";
import NavbarOnboarding from "../Navbars/NavbarOnboarding"
import "./index.css";

var data = require("./MOCK_DATA.json")


// Convert the array to a string using JSON.stringify()

// const myArrayString = JSON.stringify(myArray);

// Store the string in local storage using localStorage.setItem()

// localStorage.setItem('myArray', myArrayString)

// const myArrayString = localStorage.getItem('myArray');
// const myArray = JSON.parse(myArrayString);

// Add a new element to the array

// myArray.push('new element');

// Convert the modified array back to a string

// const updatedArrayString = JSON.stringify(myArray);

// Store the updated string back in local storage

// localStorage.setItem('myArray', updatedArrayString);

export default function Onboarding3() {
    const myNameString = localStorage.getItem('myName');
    const displayName = JSON.parse(myNameString);
    console.log(displayName)
    var myArray = []

    const navigate = useNavigate();

    const handleProceed = () => {
        myArray = onboardFilter
        const myArrayString = JSON.stringify(onboardFilter);
        localStorage.setItem('myArray', myArrayString)
        console.log(myArray)
        navigate("/onboarding4");
    };


    const handleGoBack = () => {
        navigate("/onboarding2");
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


    //WORK ON HANDLIGN KEY PRESS LATER 

    // const handleKeyPress = (e) => {
    //     if (e.key === "Enter" && value) {
    //         const abc = [...val, value]
    //         setVal(abc)
    //         setValue("")
    //         if (value.split("/").length - 1 > 0) {
    //             const len = value.split("/").length
    //             const temp = value.split("/")
    //             const tempArray = [...onboardFilter, temp[len - 1]]
    //             setOnboardFilter(tempArray)
    //             console.log(onboardFilter)
    //         } else {
    //             const tempArray = [...onboardFilter,value]
    //             setOnboardFilter(tempArray)
    //             console.log(onboardFilter)
    //         }
    //     }
    // };

    const handleDelete = (i) => {
        const deleteVal = [...val]
        const d = deleteVal.splice(i, 1)
        setVal(deleteVal)

        const deleteOnboardFilter = [...onboardFilter]
        const e = deleteOnboardFilter.splice(i, 1)
        setOnboardFilter(deleteOnboardFilter)
    }

    var countInterests = -1
    var countTraits = -1
    var countLocation = -1

    //to set background colour but gender buttons
    const [isClickedFemale, setIsClickedFemale] = useState(false);

    const handleClickFemale = () => {
        setIsClickedFemale(!isClickedFemale);
    };
    const [isClickedMale, setIsClickedMale] = useState(false);

    const handleClickMale = () => {
        setIsClickedMale(!isClickedMale);
    };
    const [isClickedOthers, setIsClickedOthers] = useState(false);

    const handleClickOthers = () => {
        setIsClickedOthers(!isClickedOthers);
    };


    return (
        <>
            <NavbarOnboarding />
            <Box width="80%" display="flex" margin="auto" flexDirection="column">
                <Box display="flex" margin="auto" flexDirection="column">
                    <Image src={progressIndicator3} mt="20px" height="90%" width="90%" ml="60px" mx="auto" />

                    <Heading
                        color="#110B03"
                        fontWeight="700"
                        fontSize="24px"
                        mb={-10}
                        mt="20px"

                    >
                        Great! Here comes the fun part...
                    </Heading>
                    <Text
                        color="#6A6A6A"
                        fontWeight="400"
                        fontSize="16px"
                    >
                        Fill in what you're looking for in an ideal roommate. This will improve your experience when using this site.
                    </Text>
                </Box>
                <Flex>
                    {/* bg="yellow"  */}
                    <Box width="60%" height="auto" margin="auto" display="flex" flexDirection="row">
                        <Stack flexDirection="column" >
                            <Stack width="70%">
                                <Text color="#000000" fontWeight="700" fontSize="16px" mt={15} mb={0}>
                                    Roommate's information
                                </Text>
                                <Text color="#6A6A6A" fontWeight="400" fontSize="12px">
                                    State your preferred age and gender to room with.
                                </Text>
                            </Stack>
                            <Stack width="70%" flexDirection="column" style={{ marginTop: "35px" }}>
                                <Text color="#000000" fontWeight="700" fontSize="16px" mb="0px">
                                    Roommate's Additional Info
                                </Text>
                                <Text color="#6A6A6A" fontWeight="400" fontSize="12px">
                                    Match with your ideal location, traits and interests!
                                </Text>
                            </Stack>

                        </Stack>

                        {/* bg="aqua" */}
                        <Stack height="75%" width="65%" ml={-50} display="flex" flexDirection="column">
                            <Stack mt={15}>
                                <FormControl display="flex" alignItems="center" height="40px">
                                    <Text color="#818181" fontWeight="600" fontSize="14px">Age range</Text>
                                    <Input type="number" width="35px" height="30px"
                                        background="#F0F0F0"
                                        borderRadius="12px"
                                        borderColor="transparent"
                                        ml={30}
                                    ></Input>
                                    <Text color="#110B03" fontWeight="500" fontSize="14px" ml={10}>years younger</Text>
                                    <Text color="#110B03" fontWeight="500" fontSize="14px" ml={10} >-</Text>
                                    <Input type="number" width="35px" height="30px"
                                        background="#F0F0F0"
                                        borderRadius="12px"
                                        borderColor="transparent"
                                        ml={10}
                                    ></Input>
                                    <Text color="#110B03" fontWeight="500" fontSize="14px" ml={10}>years older </Text>
                                </FormControl>
                            </Stack>

                            <Stack mt={30}>
                                <FormControl display="flex" alignItems="center" height="40px">
                                    <Text color="#818181" fontWeight="600" fontSize="14px">Gender</Text>
                                    <Button type="number" width="80px" height="30px"
                                        borderRadius="12px"
                                        borderColor="transparent"
                                        style={{ backgroundColor: isClickedFemale ? '#F9D88A' : '#F0F0F0' }}
                                        onClick={handleClickFemale}
                                        ml={50}>Female</Button>
                                    <Button type="number" width="70px" height="30px"
                                        borderRadius="12px"
                                        borderColor="transparent"
                                        style={{ backgroundColor: isClickedMale ? '#F9D88A' : '#F0F0F0' }}
                                        onClick={handleClickMale}
                                        ml={10}>Male</Button>
                                    <Button type="number" width="70px" height="30px"
                                        borderRadius="12px"
                                        borderColor="transparent"
                                        style={{ backgroundColor: isClickedOthers ? '#F9D88A' : '#F0F0F0' }}
                                        onClick={handleClickOthers}
                                        ml={10}>Others</Button>

                                </FormControl>
                            </Stack >

                            <Stack >
                                {/* <Box style={{ marginTop: "15px" }} display="flex" alignItems="center">
                                <Text color="#110B03" fontWeight="600" fontSize="18px" mt={0}>Filters</Text>
                                <Text colorScheme='red' color="#5A5A5A" fontWeight="500" fontSize="12px" mt="-1px" ml={50}>Select traits of my ideal roommate</Text>
                                <Input marginLeft="-205px" mt="-10px" type="checkbox"></Input>
                            </Box> */}

                                <Box mt="17px" mb="15px" height="20px" display="flex" alignItems="center">
                                    <Text fontSize="18px" fontWeight="600" >Filters</Text>
                                    <input style={{ marginLeft: "20px", marginTop: "4px" }} type="checkbox"></input>
                                    <Text ml="3px" color="#5A5A5A" fontSize="12px" fontWeight="500" >Match my chosen traits</Text>
                                </Box>
                                <Flex >
                                    <Flex >
                                        <InputGroup mt="0px" >
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
                                    /</Flex>




                                <div >
                                    <div style={{
                                        zIndex: "1", position: "absolute", backgroundColor: "#FFFFFF",
                                        width: "440px", borderRadius: "12px"
                                    }}>
                                        {data.filter(item => {
                                            const searchTerm = value.toLowerCase();
                                            const fullName = item.full_name.toLowerCase();
                                            return (
                                                searchTerm && (fullName.startsWith(searchTerm) || fullName.includes(searchTerm)) && fullName !== searchTerm
                                            )
                                        }).slice(0, 10)
                                            .map((item, index) => (
                                                <div style={{ fontSize: "12px", marginLeft: "40px", color: "grey.100", marginTop: "10px" }}

                                                    onClick={() => onAdd(item.full_name)}
                                                    key={item.full_name}
                                                >{item.full_name}</div>
                                            ))}
                                    </div>




                                    <Box>
                                        <Box mt={20} height="24px" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                            <Text color="#110B03" fontWeight="600" fontSize="16px" >Interests</Text>
                                            <Text color="#110B03" fontWeight="400" fontSize="12px" ml={20}>Currently popular: Sports/Basketball, Hobby/Painting, Shows/Anime</Text>
                                        </Box>
                                        <Box >

                                            {val.length > 0 ? (
                                                <div bg="red" style={{ display: "flex", flexWrap: "wrap" }}>
                                                    {val.map((item, index) => {

                                                        if (item.includes("sports") || item.includes("hobby") || item.includes("music")) {
                                                            countInterests++
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
                                        <Box mt={20} height="24px" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                            <Text color="#110B03" fontWeight="600" fontSize="16px" >Traits</Text>
                                            <Text color="#110B03" fontWeight="400" fontSize="12px" ml={20}>Try listing traits such as animals, diet, and sleep schedule!</Text>
                                        </Box>
                                        <Box >
                                            {val.length > 0 ? (
                                                <div bg="red" style={{ display: "flex", flexWrap: "wrap" }}>
                                                    {val.map((item, index) => {
                                                        if (item.includes("diet") || item.includes("religion") || item.includes("animals") || item.includes("sleep")) {
                                                            countTraits++
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
                                        <Box mt={20} height="24px" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                            <Text color="#110B03" fontWeight="600" fontSize="16px" >Location</Text>
                                        </Box>
                                        <Box >

                                            {val.length > 0 ? (
                                                <div bg="red" style={{ display: "flex", flexWrap: "wrap" }}>
                                                    {val.map((item, index) => {

                                                        if (item.includes("Location")) {
                                                            countLocation++
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
                                                                            marginTop: countLocation <= 2 ? '-px' : '-12px', marginLeft: '-25px', width: '25px',
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

                                        </Box>

                                    </Box>
                                </div>
                            </Stack>

                        </Stack>
                    </Box>
                </Flex>

                <Box className="onboarding3-buttons-container">
                    <Box className="back-button-container">
                        <Button className="backbutton"
                            fontSize="14px"
                            fontWeight="500px"
                            onClick={handleGoBack}
                            style={{
                                width: "100px",
                                height: "30px",
                                borderRadius: "10px",
                                variant: "outline !important",
                                backgroundColor: "transparent ",
                                borderStyle: "solid",
                                borderColor: "#F9D88A", // set the border color to a solid color
                                boxShadow: "none"
                            }}
                            leftIcon={<Image color="#110B03" src={back} height="10px" ml="-2px" />}
                        >
                            Go Back
                        </Button>
                    </Box>

                    <Box className="skip-proceed-button-container">
                        <Button className="backbutton"
                            fontSize="14px"
                            fontWeight="500px"
                            onClick={handleProceed}
                            style={{
                                width: "110px",
                                height: "30px",
                                borderRadius: "12px",
                                variant: "outline !important",
                                backgroundColor: "transparent ",
                                borderStyle: "solid",
                                borderColor: "#F9D88A", // set the border color to a solid color
                                boxShadow: "none"
                            }}
                        >
                            Skip this step
                        </Button>
                        <Button className="backbutton"
                            fontSize="14px"
                            fontWeight="500px"
                            onClick={handleProceed}
                            style={{
                                marginLeft: "10px",
                                width: "100px",
                                height: "30px",
                                borderRadius: "12px",
                                variant: "outline !important",
                                backgroundColor: "#F9D88A",
                                borderColor: "#F9D88A", // set the border color to a solid color
                                borderStyle: "solid",
                                boxShadow: "none"
                            }}

                            rightIcon={<Image color="#110B03" src={forward} height="10px" ml="0px" />}
                        >
                            Proceed
                        </Button>
                    </Box>
                </Box>


            </Box>



        </>
    )
}

