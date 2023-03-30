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
import UserIcon from "../../img/UserIcon.png";
import MapBen from "../../img/MapBen.png";
import line from "../../img/line.png"
import line23 from "../../img/Line23.png"

import ProfileTenz from "../../img/ProfileTenz.png"

export default function MapLine() {

  return (
    <>

      <Box mt="20px" ml="20px" bg="#F5F5F5" w="1000px" h="600px" borderRadius="12px" display="flex">
        <Image position="absolute" src={UserIcon} height="60px" width="60px" ml="420px" mt="220px" />
        <Image position="absolute" src={MapBen} height="60px" width="60px" ml="260px" mt="170px" />
        <Image position="absolute" src={line23} style={{ transform: 'rotate(40deg)', left: '320px', top: '210px' }} />
        <Image position="absolute" src={ProfileTenz} height="60px" width="60px" ml="560px" mt="170px" />
        <Image position="absolute" src={line23} style={{ left: '480px', top: '210px' }} />
      </Box>

      {/* <Box
        position="absolute"
        top={position.y}
        left={position.x}
        w="100px"
        h="100px"
        bg="#ED8713"
        borderRadius="50%"
      >
      <Box mt="20px" ml="20px" bg="#F5F5F5" w="1000px" h="600px" borderRadius="12px" display="flex">
        <Image position="absolute" src={UserIcon} height="60px" width="60px" ml="420px" mt="220px" />
        <Image position="absolute" src={MapBen} height="60px" width="60px" ml="260px" mt="170px" />
        <Image position="absolute" src={line23}
          ml="320px" mt="210px" style={{ transform: 'rotate(40deg)' }} />
        <Image position="absolute" src={ProfileTenz} height="60px" width="60px" ml="560px" mt="170px" />
        <Image position="absolute" src={line23}
          ml="480px" mt="210px" />

      </Box>
    </Box> */}
    </>
  )
}