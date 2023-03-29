import {
    Box,
    FormControl,
    FormLabel,
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
    useRangeSlider,
    InputLeftAddon,
    filter, Menu, MenuButton, MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Checkbox, CheckboxGroup, Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    propNames,
} from '@chakra-ui/react';
import { Link, useNavigate } from "react-router-dom";
import React, { useState ,useEffect} from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GrFilter } from "react-icons/gr"
import ProfileCard from "../ProfileCard"



export default function SavedProfile() {

    const mySavedString = localStorage.getItem('mySaved');
    const mySaved = mySavedString ? JSON.parse(mySavedString) : [];
    console.log(mySaved)
    
    const [removedProfileCard, setRemovedProfileCard] = useState(false);

      const handleRemoveName=(name)=> {
        const newSaved = mySaved.filter((savedName) => savedName !== name);
        const newSavedString = JSON.stringify(newSaved);
        localStorage.setItem('mySaved', newSavedString)
        console.log(newSaved);
        setRemovedProfileCard(!removedProfileCard);
      }

    const [query, setQuery] = useState('')
    const handleQueryChange = (e) => {
        setQuery(e.target.value)
    }

    const [data, setData] = useState(require("./MOCK_DATA.json"));
    
    useEffect(() => {
        setData(require("./MOCK_DATA.json"));
    }, [removedProfileCard]);

    return (
        <>
            <Box mt="0px" padding="0px" height="100vh" width="100wh" bg="aqua" display="flex"
                flexDirection="column">
                <Box mt="20px" bg="red" width="1080px" mx="auto" borderRadius="16px">
                    <Box display="flex" mt="20px">
                        <Text color="#110B03" mt="0px" mb="0px" width="300px"
                            fontSize="26px" fontWeight="700" style={{ whiteSpace: 'nowrap' }}>
                            My Saved Roommates</Text>
                        <Flex >
                            <InputGroup justifyContent="flex-end">
                                <InputLeftElement mt="10px" ml="365px"
                                    pointerEvents="none" justifyContent="flex-end"
                                    children={<GrFilter color="gray.300" />} />
                                <Input width="300px" height="30px" pl="40px" mr="40px"
                                    type="text" ml="350px"
                                    textAlign="flex-start"
                                    placeholder="Filter for your ideal roommate"
                                    value={query}
                                    borderRadius="12px" borderColor="transparent" boxShadow="0px 2px 10px rgba(0, 0, 0, 0.2)" outline="none"
                                    onChange={handleQueryChange}
                                //onKeyDown={handleKeyPress}
                                />
                            </InputGroup>
                        </Flex>
                    </Box>
                    <Box>
                        <Text color="#5A5A5A" mt="10px"
                            fontWeight="600" fontSize="16px">Filter By:</Text>
                    </Box>
                    <Box bg="red" width="1070px" display="flex" flexDirection="row" flexWrap="wrap">
                        {mySaved.length > 0 ? (
                            <Box width="1200px" display="flex" flexDirection="row" flexWrap="wrap">
                                {
                                    data.map((item, index) => {
                                        for (let i = 0; i < mySaved.length; i++) {

                                            if (item.full_name.toLowerCase() === (mySaved[i].toLowerCase())) {
                                                return (
                                                    <div key={index}>
                                                    <>
                                                        <ProfileCard name={item.full_name} age={item.age} gender={item.gender}
                                                            bio={item.bio} match={item.match} icon={item.icon}
                                                            tag1={item.tag1} tag2={item.tag2}  
                                                            handleRemoveName={handleRemoveName} 
                                                            />
                                                    </>
                                                    </div>
                                                )
                                            }
                                        }
                                    })
                                }
                            </Box>

                        ) :
                            (<></>

                            )
                        }

                    </Box>




                </Box>
            </Box>
        </>

    );
}