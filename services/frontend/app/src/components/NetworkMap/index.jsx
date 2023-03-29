import React, { useState } from "react";
import MapMe from "../../img/MapMe.png"
import MapSam from "../../img/MapSam.png"
import MapBen from "../../img/MapBen.png"
import './SnapMap.css'

const SocialMap = () => {
  // Dummy data for positions
  const positions = [
    { name: "Yourself", x: 3, y: 5, icon: MapMe },
    { name: "Samuel Samson", x: 6, y: 8, icon: MapSam },
    { name: "Benjamin Gan", x: -4, y: 1, icon: MapBen },
  ];

  // State for selected person
  const [selectedPerson, setSelectedPerson] = useState(null);

  // State for map position
  const [mapPosition, setMapPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  // Function to handle selecting a person
  const handleSelectPerson = (person) => {
    setSelectedPerson(person);
  };

  // Functions to handle map dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const dx = e.clientX - startPosition.x;
      const dy = e.clientY - startPosition.y;
      setMapPosition({ x: mapPosition.x + dx, y: mapPosition.y + dy });
      setStartPosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="socialmap"
      style={{ width: "1440px", height: "683px", background: "#f5f5f5"}}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transform: `translate(${mapPosition.x}px, ${mapPosition.y}px)`,
        }}
      >
        {/* Render all people with their icons */}
        {positions.map((person) => (
          <div>
          <img
            key={person.name}
            src={person.icon}
            alt={person.name}
            style={{
              position: "absolute",
              left: `${person.x * 50 + 500}px`,
              top: `${person.y * 50 + 10}px`,
              cursor: "pointer",
            }}
            onClick={() => handleSelectPerson(person)}
          />
          <p className="personname"
          style={{
              position: "absolute",
              left: `${person.x * 50 + 500}px`,
              top: `${person.y * 50 + 65}px`,
              cursor: "pointer",
            }}>{person.name}</p>
          </div>
        ))}

        {/* Render selected person with their name */}
        {/* {selectedPerson && (
          <div
            style={{
              position: "absolute",
              left: `${selectedPerson.x * 50}px`,
              top: `${selectedPerson.y * 50}px`,
              backgroundColor: "white",
              padding: "5px",
              borderRadius: "5px",
              zIndex: "999",
            }}
          >
            {selectedPerson.name}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default SocialMap;
// https://via.placeholder.com/50x50