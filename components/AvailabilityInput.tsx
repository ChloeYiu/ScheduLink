"use client"

// Import necessary modules
import React, { useState } from 'react';

interface Types {
    text: string,
}

const AvailabilityInput = ({text}: Types) => {
  // State to store the input value
  const [inputValue, setInputValue] = useState('');

  // Function to handle input changes and limit to 4 digits
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Allow only numeric input using a regular expression
    const numericInput = value.replace(/[^0-9]/g, '');

    // Limit the input to 4 digits
    const limitedInput = numericInput.slice(0, 4);

    // Update the state with the limited input
    setInputValue(limitedInput);
  };

  return (
    <div className='flex flex-row gap-6 justify-center items-center m-auto'>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={text}
        className='text-black p-2 bg-white w-24'
      />
    </div>
  );
};

export default AvailabilityInput;
