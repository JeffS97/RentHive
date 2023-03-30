import React from "react";
import "./OrangeTag.css"

export default function OrangeTag({name}){
    return(
      <div className="orange-tag">
        <text className="white-small-text">
          {name}
        </text>
      </div>
    )
}