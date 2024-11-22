import React from "react"

const Button = ({ color='#8888b9', label, onClick, isClicked=false, isDisabled=false}) => {
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

export default Button
   

