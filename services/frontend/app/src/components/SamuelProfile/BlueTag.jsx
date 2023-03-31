import React from "react";
import "./BlueTag.css"


export default function BlueTag({name}){
    return(
      <div className="blue-tag">
        <text className="white-small-text">
          {name}
        </text>
      </div>
    )
}