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
    Checkbox, CheckboxGroup, CloseButton
} from '@chakra-ui/react';
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from 'react';

export default function Filterlist({ callback }) {
    const userSports = [{ sport: "Basketball" }, { sport: "Boxing" }, { sport: "Badminton" }, { sport: "Bowling" }]

    const [int, setSports] = useState(userSports);

    const userEnt = [{ ent: "Anime" }, { ent: "K-pop" }, { ent: "C-drama" }, { ent: "Horror" }]
    const [ent, setEnt] = useState(userEnt);


    const userArt = [{ art: "Painting" }, { art: "Music" }, { art: "Dancing" }, { art: "3D Printing" }]
    const [art, setArt] = useState(userArt);

    const userMore = [{ more: "Cooking" }, { more: "Gaming" }, { more: "Gardening" }, { more: "Gymming" }]
    const [more, setMore] = useState(userMore);

    const userReligion = [{ rel: "Buddhist" }, { rel: "Muslim" }, { rel: "Christian" }, { rel: "Hindu" }]
    const [rel, setReligion] = useState(userReligion);

    const userConsumption = [{ cons: "Vegetarian" }, { cons: "Vegan" }, { cons: "Gluten Free" }, { cons: "Low Keto" }]
    const [cons, setConsumption] = useState(userConsumption);

    const userAnimals = [{ animals: "No pets" }, { animals: "Dogs" }, { animals: "Cats" }, { animals: "Birds" }]
    const [animals, setAnimals] = useState(userAnimals);

    const userTraits = [{ more: "Smoker" }, { more: "Drinker" }, { more: "Night Owl" }, { more: "Early Bird" }]
    const [traits, setTraits] = useState(userTraits);

    const userNorth = [{ north: "Yishun" }, { north: "Admiralty" }, { north: "Sembawang" }, { north: "Woodlands" }]
    const [north, setNorth] = useState(userNorth);

    const userEast = [{ east: "Pasir Ris" }, { east: "Bedok" }, { east: "Paya Lebar" }, { east: "Tanah Merah" }]
    const [east, setEast] = useState(userEast);

    const userCentral = [{ central: "Harbourfront" }, { central: "Marina Bay" }, { central: "Dhoby Ghaut" }, { central: "Raffles City" }]
    const [central, setCentral] = useState(userCentral);

    const userWest = [{ west: "Jurong" }, { west: "Clementi" }, { west: "Boon Lay" }, { west: "Lakeside" }]
    const [west, setWest] = useState(userWest);

    const [checkedValues, setValues] = useState([])
    const [uncheckedValues, setUncheckValues] = useState(false)

    const handleChange = (e) => {
        const { value, checked } = e.target
        if (checked) {
            setValues([...checkedValues, value])
        }
        console.log(checkedValues)
        

    }

    const handleTrigger = (e) => {
        console.log(checkedValues)
        callback(checkedValues)
        const newCheckboxes = checkboxes.map((_, index) => {
            const value = localStorage.getItem(`checkbox-${index}`);
            return value === "true";
          });
          
          setCheckboxes(newCheckboxes);
    }


    const [checkboxes, setCheckboxes] = useState(
        Array(48).fill(false) // Set the initial state of 10 checkboxes to false
      );

    const handleClick=(e)=> {
        setCheckboxes(true)
        localStorage.setItem(`checkbox-${e.index}`, true);
    }
    const handleReset = () => {
        setCheckboxes(Array(48).fill(false)); // Reset the state of all checkboxes to false
      };

      useEffect(() => {
        const newCheckboxes = checkboxes.map((_, index) => {
          const value = localStorage.getItem(`checkbox-${index}`);
          return value === "true";
        });
        setCheckboxes(newCheckboxes);
      }, []);

      

    return (
        <>
            <Box display="flex" flexDirection="column" height="430px" borderRadius="12px"
                width="1006px" bg="#FFFFFF" mt="0px">
                <Text style={{ fontWeight: "600", fontSize: 20, color: "#110B03", marginLeft: 32 }}>Trending Filters</Text>
                

                <Box display="flex" mt="-30px" ml="32px">
                    <Box display="flex" flexDirection="column" >
                        <Text fontWeight="600" fontSize="18px" color="#4E4E4E" mb="-5px">Interests</Text>
                        <Box mr="80px" ml="16px">

                            <Box display="flex" flexDirection="row" >
                                <Box width="122px" height="136px" mr="2px" mb="16px">
                                    <form display="flex" flexDirection="column" >
                                        <Text style={{ fontWeight: "600", fontSize: 14, color: "#110B03" }}>Sports</Text>
                                        <Box ml="16px" style={{ fontWeight: "500", fontSize: 12, color: "#110B03" }}>
                                            {int.map((user,index) => (
                                                <>
                                                    <div >
                                                        <label key={index}>
                                                        <input type="checkbox" checked={checkboxes[index]} value={user.sport} onClick={handleClick} onChange={handleChange}></input> {user.sport}
                                                        </label>
                                                    </div>
                                                </>
                                            ))}
                                        </Box>
                                    </form>
                                </Box>

                                <Box width="122px" height="136px">
                                    <form display="flex" flexDirection="column" ml="16px">
                                        <Text style={{ fontWeight: "600", fontSize: 14, color: "#110B03" }}
                                        >Entertainment</Text>
                                        <Box bg="" ml="16px" style={{ fontWeight: "500", fontSize: 12, color: "#110B03" }}>
                                        {ent.map((user,index) => (
                                                <>
                                                    <div >
                                                        <label key={index}>
                                                        <input type="checkbox" checked={checkboxes[index]} value={user.ent} onClick={handleClick} onChange={handleChange}></input> {user.ent}
                                                        </label>
                                                    </div>
                                                </>
                                            ))}
                                        </Box>
                                    </form>
                                </Box>
                            </Box>

                            <Box display="flex" flexDirection="row" >
                                <Box width="122px" height="136px" mr="2px">
                                    <form display="flex" flexDirection="column" >

                                        <Text style={{ fontWeight: "600", fontSize: 14, color: "#110B03" }}
                                        >Art</Text>
                                        <Box ml="16px"style={{ fontWeight: "500", fontSize: 12, color: "#110B03" }}>
                                        {art.map((user,index) => (
                                                <>
                                                    <div >
                                                        <label key={index}>
                                                        <input type="checkbox" checked={checkboxes[index]} value={user.art} onClick={handleClick} onChange={handleChange}></input> {user.art}
                                                        </label>
                                                    </div>
                                                </>
                                            ))}
                                        </Box>
                                    </form>
                                </Box>

                                <Box width="122px" height="136px" >
                                    <form display="flex" flexDirection="column">
                                        <Text style={{ fontWeight: "600", fontSize: 14, color: "#110B03" }}
                                        >More interests</Text>
                                        <Box bg="" ml="16px" style={{ fontWeight: "500", fontSize: 12, color: "#110B03" }}>
                                        {more.map((user,index) => (
                                                <>
                                                    <div >
                                                        <label key={index}>
                                                        <input type="checkbox" checked={checkboxes[index]} value={user.more} onClick={handleClick} onChange={handleChange}></input> {user.more}
                                                        </label>
                                                    </div>
                                                </>
                                            ))}
                                        </Box>
                                    </form>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box>
                        <Text fontWeight="600" fontSize="18px" color="#4E4E4E" mb="-5px">Traits</Text>
                        <Box display="flex" flexDirection="column" mr="80px" ml="16px">

                            <Box display="flex" flexDirection="row" >
                                <Box width="122px" height="136px" mr="2px" mb="16px">
                                    <form display="flex" flexDirection="column">
                                        <Text style={{ fontWeight: "600", fontSize: 14, color: "#110B03" }}
                                        >Religion</Text>
                                        <Box bg="" ml="16px" style={{ fontWeight: "500", fontSize: 12, color: "#110B03" }}>
                                        {rel.map((user,index) => (
                                                <>
                                                    <div >
                                                        <label key={index}>
                                                        <input type="checkbox" checked={checkboxes[index]} value={user.rel} onClick={handleClick} onChange={handleChange}></input> {user.rel}
                                                        </label>
                                                    </div>
                                                </>
                                            ))}
                                        </Box>
                                    </form>
                                </Box>
                                <Box width="122px" height="136px">
                                    <form display="flex" flexDirection="column">
                                        <Text style={{ fontWeight: "600", fontSize: 14, color: "#110B03" }}
                                        >Consumption</Text>
                                        <Box bg=""style={{ fontWeight: "500", fontSize: 12, color: "#110B03" }}>
                                        {cons.map((user,index) => (
                                                <>
                                                    <div >
                                                        <label key={index}>
                                                        <input type="checkbox" checked={checkboxes[index]} value={user.cons} onClick={handleClick} onChange={handleChange}></input> {user.cons}
                                                        </label>
                                                    </div>
                                                </>
                                            ))}
                                        </Box>
                                    </form>
                                </Box>
                            </Box>

                            <Box display="flex" flexDirection="row">
                                <Box width="122px" height="136px" mr="2px">
                                    <form display="flex" flexDirection="column">
                                        <Text style={{ fontWeight: "600", fontSize: 14, color: "#110B03" }}
                                        >Animals</Text>
                                        <Box bg="" ml="16px" style={{ fontWeight: "500", fontSize: 12, color: "#110B03" }}>
                                        {animals.map((user,index) => (
                                                <>
                                                    <div >
                                                        <label key={index}>
                                                        <input type="checkbox" checked={checkboxes[index]} value={user.animals} onClick={handleClick} onChange={handleChange}></input> {user.animals}
                                                        </label>
                                                    </div>
                                                </>
                                            ))}
                                        </Box>
                                    </form>
                                </Box>

                                <Box width="122px" height="136px">
                                    <form display="flex" flexDirection="column">
                                        <Text style={{ fontWeight: "600", fontSize: 14, color: "#110B03" }}
                                        >More traits</Text>
                                        <Box style={{ fontWeight: "500", fontSize: 12, color: "#110B03" }}>
                                        {traits.map((user,index) => (
                                                <>
                                                    <div >
                                                        <label key={index}>
                                                        <input type="checkbox" checked={checkboxes[index]} value={user.more} onClick={handleClick} onChange={handleChange}></input> {user.more}
                                                        </label>
                                                    </div>
                                                </>
                                            ))}
                                        </Box>
                                    </form>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box>
                        <Text fontWeight="600" fontSize="18px" color="#4E4E4E" mb="-5px">Location</Text>
                        <Box display="flex" flexDirection="column" ml="16px">

                            <Box display="flex" flexDirection="row">
                                <Box width="148px" height="136px" mr="4px" mb="16px">
                                    <form display="flex" flexDirection="column">
                                        <Text style={{ fontWeight: "600", fontSize: 14, color: "#110B03" }}
                                        >North</Text>
                                        <Box bg="" ml="16px" style={{ fontWeight: "500", fontSize: 12, color: "#110B03" }}>
                                        {north.map((user,index) => (
                                                <>
                                                    <div >
                                                        <label key={index}>
                                                        <input type="checkbox" checked={checkboxes[index]} value={user.north} onClick={handleClick} onChange={handleChange}></input> {user.north}
                                                        </label>
                                                    </div>
                                                </>
                                            ))}
                                        </Box>
                                    </form>
                                </Box>
                                <Box width="151px" height="136px">
                                    <form display="flex" flexDirection="column">
                                        <Text style={{ fontWeight: "600", fontSize: 14, color: "#110B03" }}
                                        >East</Text>
                                        <Box bg="" ml="16px" style={{ fontWeight: "500", fontSize: 12, color: "#110B03" }}>
                                        {east.map((user,index) => (
                                                <>
                                                    <div >
                                                        <label key={index}>
                                                        <input type="checkbox" checked={checkboxes[index]} value={user.east} onClick={handleClick} onChange={handleChange}></input> {user.east}
                                                        </label>
                                                    </div>
                                                </>
                                            ))}
                                        </Box>
                                    </form>
                                </Box>
                            </Box>

                            <Box display="flex" flexDirection="row">
                                <Box width="148px" height="136px" mr="4px">
                                    <form display="flex" flexDirection="column">
                                        <Text style={{ fontWeight: "600", fontSize: 14, color: "#110B03" }}
                                        >Central/South</Text>
                                        <Box bg="" ml="16px" style={{ fontWeight: "500", fontSize: 12, color: "#110B03" }}>
                                        {central.map((user,index) => (
                                                <>
                                                    <div >
                                                        <label key={index}>
                                                        <input type="checkbox" checked={checkboxes[index]} value={user.central} onClick={handleClick} onChange={handleChange}></input> {user.central}
                                                        </label>
                                                    </div>
                                                </>
                                            ))}
                                        </Box>
                                    </form>
                                </Box>

                                <Box width="151px" height="136px">
                                    <form display="flex" flexDirection="column">
                                        <Text style={{ fontWeight: "600", fontSize: 14, color: "#110B03" }}
                                        >West</Text>
                                        <Box bg="" ml="16px" style={{ fontWeight: "500", fontSize: 12, color: "#110B03" }}>
                                        {west.map((user,index) => (
                                                <>
                                                    <div >
                                                        <label key={index}>
                                                        <input type="checkbox" checked={checkboxes[index]} value={user.west} onClick={handleClick} onChange={handleChange}></input> {user.west}
                                                        </label>
                                                    </div>
                                                </>
                                            ))}
                                        </Box>
                                    </form>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box mr="32px" mt="12px" alignSelf="flex-end">
                <Button mr="24px" fontWeight="600" fontSize="12px"
                borderColor="transparent" backgroundColor="transparent" color="#9A9A9A" onClick={handleReset}>Reset all</Button>
                <Button alignSelf="flex-end"
                    borderRadius="12px" borderColor="transparent" width="65px" height="40px"
                    bg="#F9D88A"
                    style={{ fontWeight: "500", fontSize: 16, color: "#110B03" }}
                    onClick={handleTrigger}
                >Done</Button>
                </Box>
            </Box>
        </>
    )
}