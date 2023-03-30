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
import { Link, Navigate, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import ProfileCard from "../ProfileCard"
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineSortDescending } from "react-icons/hi";
import { GrFilter } from "react-icons/gr"
import Filterlist from "../Filterlist"
import Onboarding3 from '../Onboarding3';
import NavbarSearch from "../Navbars/NavbarSearch";


export default function Search() {
  const navigate = useNavigate();
// THIS PORTION IS TO SAVE PROFILECARD
  const [saved, setSaved] = useState([])

  const handleSavedName = (name) => {
    const newSaved = [...saved, name];
    setSaved(newSaved);
  };

  const handleRemoveName=(name)=> {
    const newSaved = saved.filter((savedName) => savedName !== name);
    setSaved(newSaved);
    console.log(newSaved);
  }

  const mySavedString = JSON.stringify(saved);
  localStorage.setItem('mySaved', mySavedString);


  //THIS PORTION IS TO GET ONBOARDFILTER
  const myArrayString = localStorage.getItem('myArray');
  const myArray = JSON.parse(myArrayString);

  const [query, setQuery] = useState('')

  // const [filterby, setFilterBy] = useState(["My ideal roommate"])
  const [filterby, setFilterBy] = useState([])

  const tempOnboardFilter = [...myArray]
  console.log(tempOnboardFilter)
  // const tempOnboardFilter = ["basketball", "bedok"]
  const [onboardFilter, setOnboardFilter] = useState(tempOnboardFilter)

  const totalFilter = filterby.concat(onboardFilter)
  console.log("total filter", totalFilter)


  const [data, setData] = useState(require("./MOCK_DATA.json"));

  const handleQueryChange = (e) => {
    setQuery(e.target.value)
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && query) {
      const abc = [...filterby, query]
      setFilterBy(abc)
      setQuery("")

    }
  };

  function handleSortChange(event) {
    const value = event.target.value;
    if (value === 'alphabetical') {
      sortByAlphabet();
    } else if (value === 'age') {
      sortByAge();
    } else if (value === 'percentage match') {
      sortByPercentageMatch();
    }
  }

  const sortByAlphabet = () => {
    //a: first value to compare | b: second value to compare
    //if <0: [a,b].if >0, [b,a]
    data.sort((a, b) => {
      if (a.full_name < b.full_name) return -1;
      if (a.full_name > b.full_name) return 1;
      return 0;
    });
    setData([...data]);

  };

  const sortByAge = () => {
    data.sort((a, b) => {
      if (a.age < b.age) return -1; //[a,b]
      if (a.age > b.age) return 1;//[b,a]
      return 0;
    });
    setData([...data]);
  }

  const sortByPercentageMatch = () => {
    data.sort((a, b) => {
      if (a.match < b.match) return 1; //[a,b]
      if (a.match > b.match) return -1;//[b,a]
      return 0;
    });
    setData([...data]);
  }

  const handleDelete = (i) => {
    const deleteVal = [...filterby]
    const d = deleteVal.splice(i, 1)
    setFilterBy(deleteVal)
  }

  const handleDeleteOnboardFilter = (i) => {
    const deleteOn = [...onboardFilter]
    const d = deleteOn.splice(i, 1)
    setOnboardFilter(deleteOn)
    const myArrayString = JSON.stringify(deleteOn);
    localStorage.setItem('myArray', myArrayString)
    console.log(onboardFilter)
  }

  //const 

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const callFromFilterList = (value) => {
    const updatedlist = [...filterby, ...value]
    setFilterBy(updatedlist)
    setIsMenuOpen(false);
  }

  const handleViewProfile =()=>{
    console.log("hello")
    navigate("/roommateprofile")
  }



  return (
    <>
        <NavbarSearch/>
      <Box bg="#F5F5F5" position="relative" zIndex="1" >

        <InputGroup position="absolute" zIndex="9" mt="19px" width="20px" >
          <Menu bg="#FFFFFF" >
            <MenuButton ml="875px"
              as={IconButton}
              aria-label='Options'
              icon={<GrFilter />}
              outline="none"
              borderColor="transparent"
              background="transparent"
              onClick={() => setIsMenuOpen(true)}

            />
            <MenuList mt="65px" ml="-740px">

              <Box width="1000px" display="flex" >
                {isMenuOpen && (
                  <Filterlist callback={callFromFilterList} />
                )}
              </Box>

            </MenuList>
          </Menu>
        </InputGroup>

        <Flex >
          <InputGroup mt="10px" justifyContent="center" >
            <InputLeftElement mt="10px" ml="375px" 
              pointerEvents="none"
              children={<AiOutlineSearch color="gray.300" />} />
            <Input width="500px" height="30px" pl="40px"
              type="text"
              textAlign="flex-start"
              placeholder="Search here for your ideal roommate"
              value={query}
              borderRadius="12px" borderColor="transparent" boxShadow="0px 2px 10px rgba(0, 0, 0, 0.2)" outline="none"
              onChange={handleQueryChange}
              onKeyDown={handleKeyPress}
            />
          </InputGroup>
        </Flex>

        <Box display="flex" flexDirection="row" alignContent="center" height="25px"
          position="relative" zIndex="1">
          <Text mt="10px" ml="360px" mr="20px" color="#5A5A5A"
            fontWeight="600" fontSize="16px">Filter By:</Text>
          <Box width="280px" display="flex" flexDirection="row" flexWrap="wrap">
            {onboardFilter.length > 0 ? (
              onboardFilter.map((item, index) => {
                {
                  return (
                    <>
                      <Box display="flex" flexDirection="row"
                        minWidth="fit-content" p="0 6px" height="25px"
                        bg="#ED8713"

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
                          onClick={() => handleDeleteOnboardFilter(index)}
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
            )
            }
            {filterby.length > 0 ? (
              filterby.map((item, index) => {
                {
                  return (
                    <>
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
                    </>
                  )
                }
              }
              )
            ) : (
              <></>
            )
            }

          </Box>


          <Box minWidth="fit-content" p="0 8px" mt="10px">
            <InputGroup >
              <InputLeftElement ml="6px" mt="7px" children={<HiOutlineSortDescending />} />
              <Select ml="26px" style={{ width: "150px", height: "20px" }}
                outline="none" borderRadius="12px" borderColor="transparent"
                color="#000000" fontWeight="550" fontSize="11px" bg="#F5F5F5"
                placeholder='Sort results by' icon={<></>} position="relative" onChange={handleSortChange}>
                <option value='alphabetical' >Alphabetical</option>
                <option value='age' >Age</option>
                <option value='percentage match' >Percentage Match</option>
              </Select>
            </InputGroup>
          </Box>
        </Box>

        <Box  ml="100px" width="1070px" mt={filterby.length * 20} display="flex" flexDirection="row" flexWrap="wrap">
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
                            handleSavedName={handleSavedName}
                            handleRemoveName={handleRemoveName}
                            onClick={handleViewProfile}
                            />
                        </>
                      )
                    } else if (item.age.toLowerCase().includes(totalFilter[i].toLowerCase())) {
                      return (
                        <ProfileCard name={item.full_name} age={item.age} gender={item.gender}
                          bio={item.bio} match={item.match} icon={item.icon}
                          tag1={item.tag1} tag2={item.tag2}  more={item.more}
                           handleSavedName={handleSavedName}  handleRemoveName={handleRemoveName}
                           onClick={handleViewProfile}/>
                      )
                    } else if (item.gender.toLowerCase().includes(totalFilter[i].toLowerCase())) {
                      return (
                        <ProfileCard name={item.full_name} age={item.age} gender={item.gender}
                          bio={item.bio} match={item.match} icon={item.icon}
                          tag1={item.tag1} tag2={item.tag2}   more={item.more}
                          handleSavedName={handleSavedName}  handleRemoveName={handleRemoveName}
                          onClick={handleViewProfile}/>

                      )
                    } else if (item.tag1.toLowerCase().includes(totalFilter[i].toLowerCase())) {
                      return (
                        <ProfileCard name={item.full_name} age={item.age} gender={item.gender}
                          bio={item.bio} match={item.match} icon={item.icon}
                          tag1={item.tag1} tag2={item.tag2} more={item.more}
                          handleSavedName={handleSavedName}  handleRemoveName={handleRemoveName}
                          onClick={handleViewProfile}/>
                      )
                    } else if (item.tag2.toLowerCase().includes(totalFilter[i].toLowerCase())) {
                      return (
                        <ProfileCard name={item.full_name} age={item.age} gender={item.gender}
                          bio={item.bio} match={item.match} icon={item.icon}
                          tag1={item.tag1} tag2={item.tag2} more={item.more}
                          handleSavedName={handleSavedName}  handleRemoveName={handleRemoveName}
                          onClick={handleViewProfile}/>

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
                             handleSavedName={handleSavedName}  
                             handleRemoveName={handleRemoveName}
                             onClick={handleViewProfile}/>
                             
                        </>
                      )
                    }

                  </Box>
                ))
              }
            </Box>)}





        </Box>
      </Box>
    </>
  );
}




