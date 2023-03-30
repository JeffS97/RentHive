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
enuButton, MenuList,

} from '@chakra-ui/react';
import React, { useState, useEffect } from "react";
import ProfileCard from "../ProfileCard"


export default function MatchedSection() {
  const [receivedInvites, setReceivedInvites] = useState([]);
  useEffect(() => {
    const data = localStorage.getItem("receivedInvites");
    if (data) {
      setReceivedInvites(JSON.parse(data));
    }
  }, []);

  return (
    <Box ml="0px" width="1070px" mt="-40px" display="flex" flexDirection="row" flexWrap="wrap">
      <Text ml="8px" fontSize="30px" fontWeight="700" color="#110B03" >Matched Roommates</Text>
      {receivedInvites.length > 0 ? (
        <Box mt="-30px" width="1200px" display="flex" flexDirection="row" flexWrap="wrap">
          {
            receivedInvites.map((item, index) => {
              return (
                <>
              
                <ProfileCard name={item.full_name} age={item.age} gender={item.gender}
                  bio={item.details} match={item.match} icon={item.image}
                  tag1={item.common1} tag2={item.common2} more="+2 more"
                />
                </>
              )

            })

          }
        </Box>

      ) : <Text>no</Text>}

    </Box>
  );
}
