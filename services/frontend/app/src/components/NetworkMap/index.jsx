import {
  Box,
  FormControl, FormLabel,
  Input,
  Stack,
  Button, IconButton,
  Text, Image, Badge,
  Flex,

} from '@chakra-ui/react';
import React, { useState, useEffect, useRef } from "react";
import MapMe from "../../img/MapMe.png"
import MapSam from "../../img/MapSam.png"
import MapBen from "../../img/MapBen.png"
import './SnapMap.css'
import Draggable from 'react-draggable';
import MapLine from "../MapLine"
import hardmap1 from "../../img/hardmap1.png"

const SocialMap = () => {
  const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0 });

  // }
  return (
    <>
      <Box w="700px" h="400px" border="1px solid #ED8713" borderRadius="12px"
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <Flex  wrap="wrap">
          <Draggable
            bounds={{ left:-800, top:-3500, right: 600, bottom: 350 }}
            position={boxPosition}
            onDrag={(e, { x, y }) => {
              setBoxPosition({ x, y });
            }}
          >
            <div>
              <Image src={hardmap1}/>
            {/* <MapLine position={boxPosition} /> */}
            </div>
          </Draggable>
        </Flex>
      </Box>

    </>
  )
};

export default SocialMap;
// https://via.placeholder.com/50x50






// const positions = [
//   { name: "Yourself", x: 3, y: 5, icon: MapMe },
//   { name: "Samuel Samson", x: 6, y: 8, icon: MapSam },
//   { name: "Benjamin Gan", x: -4, y: 1, icon: MapBen },
// ];

// // State for selected person
// const [selectedPerson, setSelectedPerson] = useState(null);

// // State for map position
// const [mapPosition, setMapPosition] = useState({ x: 0, y: 0 });
// const [isDragging, setIsDragging] = useState(false);
// const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

// // Function to handle selecting a person
// const handleSelectPerson = (person) => {
//   setSelectedPerson(person);
// };

// // Functions to handle map dragging
// const handleMouseDown = (e) => {
//   setIsDragging(true);
//   setStartPosition({ x: e.clientX, y: e.clientY });
// };

// const handleMouseMove = (e) => {
//   if (isDragging) {
//     const dx = e.clientX - startPosition.x;
//     const dy = e.clientY - startPosition.y;
//     setMapPosition({ x: mapPosition.x + dx, y: mapPosition.y + dy });
//     setStartPosition({ x: e.clientX, y: e.clientY });
//   }
// };

// const handleMouseUp = () => {
//   setIsDragging(false);
// };












  // <div
  //   className="socialmap"
  //   style={{ width: "1005px", height: "683px", background: "#f5f5f5"}}
  //   onMouseDown={handleMouseDown}
  //   onMouseMove={handleMouseMove}
  //   onMouseUp={handleMouseUp}
  // >
  //   <div
  //     style={{
  //       position: "relative",
  //       width: "100%",
  //       height: "100%",
  //       transform: `translate(${mapPosition.x}px, ${mapPosition.y}px)`,
  //     }}
  //   >
  //     {/* Render all people with their icons */}
  //     {positions.map((person) => (
  //       <div>
  //       <img
  //         key={person.name}
  //         src={person.icon}
  //         alt={person.name}
  //         style={{
  //           position: "absolute",
  //           left: `${person.x * 50 + 400}px`,
  //           top: `${person.y * 50 + 10}px`,
  //           cursor: "pointer",
  //         }}
  //         onClick={() => handleSelectPerson(person)}
  //       />
  //       <p className="personname"
  //       style={{
  //           position: "absolute",
  //           left: `${person.x * 50 + 400}px`,
  //           top: `${person.y * 50 + 65}px`,
  //           cursor: "pointer",
  //         }}>{person.name}</p>
  //       </div>
  //     ))}

  //     {/* Render selected person with their name */}
  //     {/* {selectedPerson && (
  //       <div
  //         style={{
  //           position: "absolute",
  //           left: `${selectedPerson.x * 50}px`,
  //           top: `${selectedPerson.y * 50}px`,
  //           backgroundColor: "white",
  //           padding: "5px",
  //           borderRadius: "5px",
  //           zIndex: "999",
  //         }}
  //       >
  //         {selectedPerson.name}
  //       </div>
  //     )} */}
  //   </div>
  // </div>