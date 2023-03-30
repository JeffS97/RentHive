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
import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GrFilter } from "react-icons/gr"
import ProfileCard from "../ProfileCard"
import { HiOutlineSortDescending } from "react-icons/hi";




export default function SavedProfile() {

    const [data, setData] = useState(require("./MOCK_DATA.json"));
    const [removedProfileCard, setRemovedProfileCard] = useState(false);

    useEffect(() => {
        setData(require("./MOCK_DATA.json"));
    }, [removedProfileCard]);

    const mySavedString = localStorage.getItem('mySaved');
    const mySaved = mySavedString ? JSON.parse(mySavedString) : [];
    console.log(mySaved)


    const handleRemoveName = (name) => {
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

    const [filterby, setFilterBy] = useState([])
    const handleKeyPress = (e) => {
        if (e.key === "Enter" && query) {
            const abc = [...filterby, query]
            setFilterBy(abc)
            setQuery("")
        }
    };

    const handleDelete = (i) => {
        const deleteVal = [...filterby]
        const d = deleteVal.splice(i, 1)
        setFilterBy(deleteVal)
    }

    const totalFilter = mySaved.concat(filterby)
    console.log(totalFilter)


    return (
        <>
            <Box bg="#F5F5F5" mt="0px" padding="0px" height="100vh" width="100wh" display="flex"
                flexDirection="column">
                <Box bg="#FFFFFF" height="100vh" mt="20px" width="1150px" mx="auto" borderRadius="16px">
                    <Box ml="40px" display="flex" mt="20px" >
                        <Text color="#110B03" mt="0px" mb="0px" width="300px"
                            fontSize="26px" fontWeight="700" style={{ whiteSpace: 'nowrap' }}>
                            My Saved Roommates</Text>
                        <Flex >

                            <InputGroup justifyContent="flex-end" >
                                <InputLeftElement mt="10px" ml="425px"
                                    pointerEvents="none" justifyContent="flex-end"
                                    children={<GrFilter color="gray.300" />} />
                                <Input alignSelf="flex-end" width="300px" height="30px" pl="40px" mr="40px"
                                    type="text" ml="410px"
                                    textAlign="flex-start"
                                    placeholder="Filter for your ideal roommate"
                                    value={query}
                                    borderRadius="12px" borderColor="transparent" boxShadow="0px 2px 10px rgba(0, 0, 0, 0.2)" outline="none"
                                    onChange={handleQueryChange}
                                    onKeyDown={handleKeyPress}
                                />
                            </InputGroup>
                        </Flex>
                    </Box>

                    <Box minWidth="fit-content" p="0 8px" mt="15px" ml="900px">
                        <InputGroup >
                            <InputLeftElement ml="15px" mt="7px" children={<HiOutlineSortDescending />} />
                            <Select ml="40px" style={{ width: "150px", height: "20px" }}
                                outline="none" borderRadius="12px" borderColor="transparent"
                                color="#000000" fontWeight="550" fontSize="11px" bg="#FFFFFFF"
                                placeholder='Sort results by' icon={<></>} position="relative"
                                //onChange={handleSortChange}
                                 >
                                <option value='alphabetical' >Alphabetical</option>
                                <option value='age' >Age</option>
                                <option value='percentage match' >Percentage Match</option>
                            </Select>
                        </InputGroup>
                    </Box>
                

                <Box mt="-25px">
                    <Text ml="40px" color="#5A5A5A" mt="10px" mb="0px"
                        fontWeight="600" fontSize="16px">Filter By:</Text>
                    <Box mt="-25px" ml="120px" width="350px" display="flex" flexDirection="row" flexWrap="wrap">
                        {filterby.length > 0 ? (
                            filterby.map((item, index) => {
                                {
                                    return (
                                        <>
                                            <Box display="flex" flexDirection="row"
                                                minWidth="fit-content" p="0 6px" height="25px"
                                                //to toggle different colours for filter chips
                                                // bg={item=="My ideal roommate" ? "#ED8713" : "#0A6F94" } 
                                                bg="#ED8713"
                                                borderRadius="12px" mr="5px" flexWrap="wrap" mt="5px"
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
                                        </>
                                    )
                                }
                            }
                            )
                        ) : (
                            <></>
                        )}
                    </Box>
                </Box>

                {/*<Box ml="100px" width="1070px" mt={filterby.length * 20} display="flex" flexDirection="row" flexWrap="wrap">
                        {totalFilter.length > 0 ? (
                            <Box width="1200px" display="flex" flexDirection="row" flexWrap="wrap">
                                {
                                    data.map((item, index) => {
                                        for (let i = 0; i < totalFilter.length; i++) {

                                            if (item.full_name.toLowerCase().includes(totalFilter[i].toLowerCase())) {
                                                return (
                                                    <>
                                                        <ProfileCard name={item.full_name} age={item.age} gender={item.gender}
                                                            bio={item.bio} match={item.match} icon={item.icon}
                                                            tag1={item.tag1} tag2={item.tag2}
                                                        // handleSavedName={handleSavedName}
                                                        // handleRemoveName={handleRemoveName}
                                                        />
                                                    </>
                                                )
                                            } else if (item.age.toLowerCase().includes(totalFilter[i].toLowerCase())) {
                                                return (
                                                    <ProfileCard name={item.full_name} age={item.age} gender={item.gender}
                                                        bio={item.bio} match={item.match} icon={item.icon}
                                                        tag1={item.tag1} tag2={item.tag2} more={item.more}
                                                    //    handleSavedName={handleSavedName}  handleRemoveName={handleRemoveName}
                                                    />
                                                )
                                            } else if (item.gender.toLowerCase().includes(totalFilter[i].toLowerCase())) {
                                                return (
                                                    <ProfileCard name={item.full_name} age={item.age} gender={item.gender}
                                                        bio={item.bio} match={item.match} icon={item.icon}
                                                        tag1={item.tag1} tag2={item.tag2} more={item.more}
                                                    //   handleSavedName={handleSavedName}  handleRemoveName={handleRemoveName}
                                                    />

                                                )
                                            } else if (item.tag1.toLowerCase().includes(totalFilter[i].toLowerCase())) {
                                                return (
                                                    <ProfileCard name={item.full_name} age={item.age} gender={item.gender}
                                                        bio={item.bio} match={item.match} icon={item.icon}
                                                        tag1={item.tag1} tag2={item.tag2} more={item.more}
                                                    //   handleSavedName={handleSavedName}  handleRemoveName={handleRemoveName}
                                                    />
                                                )
                                            } else if (item.tag2.toLowerCase().includes(totalFilter[i].toLowerCase())) {
                                                return (
                                                    <ProfileCard name={item.full_name} age={item.age} gender={item.gender}
                                                        bio={item.bio} match={item.match} icon={item.icon}
                                                        tag1={item.tag1} tag2={item.tag2} more={item.more}
                                                    //   handleSavedName={handleSavedName}  handleRemoveName={handleRemoveName}
                                                    />

                                                )
                                            }
                                        }

                                    })
                                }
                            </Box>

                        ) : (
                            <Box ml="0px" mx="auto" display="flex" flexDirection="row" flexWrap="wrap">
                                {data

                                    .map((filterby, index) => (

                                        <Box key={index} mt="10px" >
                                            {
                                                filterby.length > 0 ? <Text>ok</Text> : (
                                                    <>

                                                        <ProfileCard name={filterby.full_name} age={filterby.age} gender={filterby.gender}
                                                            bio={filterby.bio} match={filterby.match} icon={filterby.icon}
                                                            tag1={filterby.tag1} tag2={filterby.tag2} more={filterby.more}
                                                        //  handleSavedName={handleSavedName}  
                                                        //  handleRemoveName={handleRemoveName}
                                                        />
                                                    </>
                                                )
                                            }

                                        </Box>
                                    ))
                                }
                            </Box>)}
                    </Box>

 */}



                <Box mt="15px" ml="35px" width="1070px" display="flex" flexDirection="row" flexWrap="wrap">
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