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

import { ArrowBackIcon } from '@chakra-ui/icons'
import back from ".//back.png"
import forward from ".//forward.png"
import search from ".//search.png"
import progressIndicator3 from ".//ProgressIndicator3.png"
import {FiFacebook} from 'react-icons/fi';
var data = require("./MOCK_DATA.json")



export default function Onboarding3() {

    const navigate = useNavigate();

    const handleProceed = () => {
      navigate("/onboarding4");
    };

    const [value, setValue] = useState('')
    const handleValueChange = (e) => {
        setValue(e.target.value)
    }

    const onAdd = (searchTerm) => {
        setValue(searchTerm)
        const abc = [...val, searchTerm]
        setVal(abc)
        setValue("")
    }

    const [val, setVal] = useState([])

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && value) {
            const abc = [...val, value]
            setVal(abc)
            setValue("")
        }
    };

    const handleDelete = (i) => {
        console.log("value of i is")
        console.log(i)

        const deleteVal = [...val]

        const d = deleteVal.splice(i, 1)
        console.log(d)
        setVal(deleteVal)
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
            <Image src={progressIndicator3} height="90%" width="90%" ml="60px" />
            <Box width="80%" display="flex" margin="auto" flexDirection="column" >
                <Heading
                    color="#110B03"
                    fontWeight="700"
                    fontSize="24px"
                    mb={-10}

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
                <Box width="60%" height="600px" margin="auto" display="flex" flexDirection="row">
                    <Stack flexDirection="column" >
                        <Stack width="70%">
                            <Text color="#000000" fontWeight="600" fontSize="18px" mt={20} mb={0}>
                                Roommate's information
                            </Text>
                            <Text color="#6A6A6A" fontWeight="400" fontSize="16px">
                                State your preferred age and gender to room with.
                            </Text>
                        </Stack>
                        <Stack width="70%" flexDirection="column" style={{ marginTop: "40px" }}>
                            <Text color="#000000" fontWeight="600" fontSize="18px">
                                Roommate's Additional Info
                            </Text>
                            <Text color="#6A6A6A" fontWeight="400" fontSize="16px">
                                Match with your ideal location, traits and interests!
                            </Text>
                        </Stack>

                    </Stack>

                    {/* bg="aqua" */}
                    <Stack height="75%" width="65%" ml={-50} display="flex" flexDirection="column">
                        <Stack mt={20}>
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
                                    style={{ backgroundColor: isClickedFemale ? '#F0F0F0' : '#F9D88A' }}
                                    onClick={handleClickFemale}
                                    ml={50}>Female</Button>
                                <Button type="number" width="70px" height="30px"
                                    borderRadius="12px"
                                    borderColor="transparent"
                                    style={{ backgroundColor: isClickedMale ? '#F0F0F0' : '#F9D88A' }}
                                    onClick={handleClickMale}
                                    ml={10}>Male</Button>
                                <Button type="number" width="70px" height="30px"
                                    borderRadius="12px"
                                    borderColor="transparent"
                                    style={{ backgroundColor: isClickedOthers ? '#F0F0F0' : '#F9D88A' }}
                                    onClick={handleClickOthers}
                                    ml={10}>Others</Button>

                            </FormControl>
                        </Stack >
                        <Stack >
                            <Box style={{ marginTop: "40px" }} display="flex" alignItems="center">
                                <Text color="#110B03" fontWeight="600" fontSize="18px" mt={0}>Filters</Text>
                                <Text color="#5A5A5A" fontWeight="500" fontSize="12px" mt={0} ml={50}>Select traits of my ideal roommate</Text>
                            </Box>
                            <Box style={{ marginTop: "0px" }}>

                                <div style={{ position: "relative" }}>
                                    <input
                                        style={{
                                            backgroundColor: "#FEF9EC", height: "28px", width: "200px",
                                            marginLeft: "20px", borderRadius: "12px", borderColor: "transparent"
                                        }}
                                        type="search"

                                        disabled={false}
                                        value={value}
                                        placeholder="  Search filters..."
                                        color=" #5A5A5A"
                                        fontStyle="italic"
                                        fontWeight="400"
                                        fontSize="12px"
                                        onChange={handleValueChange}
                                        onKeyDown={handleKeyPress}
                                    />
                                    <Image src={search} alt="logo"
                                        style={{ position: "absolute", top: "50%", left: "0px", transform: "translateY(-50%)" }} />


                                </div>

                                <div >
                                    <div style={{
                                        zIndex: "1", position: "absolute", backgroundColor: "#FEF9EC",
                                        marginLeft: "20px", width: "200px", borderRadius:"12px"
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
                                                            <Text
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
                                                            <Text
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
                                                            <Text
                                                                ml={countLocation % 3 == 0 ? 0 : 15}
                                                                mt={countLocation >= 3 ? 0 : 12}

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
                                {/* bg=red */}
                                <Box display="flex" height="30px" style={{ marginTop: "50px", marginLeft: "-400px" }}>
                                    <Button className="backbutton"
                                    fontSize="14px"
                                    fontWeight="500px"
                                    
                                        style={{
                                        
                                            width: "100px",
                                            height: "30px",
                                            borderRadius: "10px",
                                            variant: "outline !important",
                                            backgroundColor: "transparent ",
                                            borderStyle:"solid",
                                            borderColor: "#F9D88A", // set the border color to a solid color
                                            boxShadow: "none"
                                        }}
                                        leftIcon={<Image color="#110B03" src={back} height="10px" ml="-2px" />}
                                    >
                                        Go Back
                                    </Button>

                                </Box>
                                {/* bg=green */}
                                <Box  width={250} ml={400} mt={-30}>
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
                                            borderStyle:"solid",
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
                                            marginLeft:"10px",
                                            width: "100px",
                                            height: "30px",
                                            borderRadius: "12px",
                                            variant: "outline !important",
                                            backgroundColor: "transparent ",
                                            borderColor: "#F9D88A", // set the border color to a solid color
                                            borderStyle:"solid",
                                            boxShadow: "none"
                                        }}
                                        
                                        rightIcon={<Image color="#110B03" src={forward} height="10px" ml="0px" />}
                                    >
                                        Proceed
                                    </Button>
                                </Box>


                            </Box>

                        </Stack>

                    </Stack>
                </Box>

            </Flex>


        </>
    )
}




