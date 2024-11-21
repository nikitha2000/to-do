
import React from "react"

const Button = ({ color, label, onClick, isClicked, isDisabled}) => {
   

    

    return (
        <button 
            style={{ backgroundColor: isClicked ? "#3558b9": color }} 
            onClick={onClick}
            isDisabled={isDisabled}
        >
            {label}
        </button>
    )
}

export default Button;
 