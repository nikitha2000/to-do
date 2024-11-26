import React from "react"

const Button = ({  label, onClick,color='#8888b9', isClicked=false, isDisabled=false}) => {

    const backgroundColor = isDisabled ? '#ccc' : isClicked ? "#3558b9" : color;
    const cursorStyle = isDisabled ? 'not-allowed' : 'pointer';

    return (
        <button 
            style={{ 
               backgroundColor,
               cursor : cursorStyle
            }} 
            onClick={onClick}
            disabled={isDisabled}
        >
            {label}
        </button>
    )
}

export default Button;
