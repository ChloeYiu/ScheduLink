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
      className={`px-6 py-4 m-2 w-32 ${
        isClicked ? 'bg-green-500 border-2 border-green-500 text-black': 'text-white border-2 border-green-500'}`}
    >
      {text}
    </button>
  )
}

export default Button