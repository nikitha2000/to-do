import React from "react"

const Button = ({ color='#8888b9', label, onClick, isClicked=false, isDisabled=false}) => {
<<<<<<< HEAD

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
=======
    return (
        <button 
            style={{ backgroundColor: isClicked ? "#3558b9": color }} 
            onClick={onClick}
            isDisabled={isDisabled}
>>>>>>> 6f70b67a8d2f211473e2f9c1218d4f2cbde9220a
        >
            {label}
        </button>
    )
}

<<<<<<< HEAD
export default Button;
=======
export default Button
   

>>>>>>> 6f70b67a8d2f211473e2f9c1218d4f2cbde9220a
