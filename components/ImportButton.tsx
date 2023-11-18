"use client"

import { useState } from "react";

interface ButtonInputs {
  text: String,
}

const ImportButton = ({text}: ButtonInputs) => {
  const [isClicked, setIsClicked] = useState(false);
  
  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  return (
    <button 
      onClick={handleClick}
      className="px-6 py-4 text-white m-2 w-48 text-lg font-semibold bg-orange-500 hover:bg-orange-700 ease-in duration-100"
    >
      {text}
    </button>
  )
}

export default ImportButton