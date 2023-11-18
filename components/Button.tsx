"use client"

import { useState } from "react";

interface ButtonInputs {
  text: String,
}

const Button = ({text}: ButtonInputs) => {
  const [isClicked, setIsClicked] = useState(false);
  
  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  return (
    <button 
      onClick={handleClick}
      className={`px-4 py-2 text-white focus:outline-none ${
        isClicked ? 'bg-solid' : 'bg-transparent border-2 border-gray-700'}`}
    >
      {text}
    </button>
  )
}

export default Button