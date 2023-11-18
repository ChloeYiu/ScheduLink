"use client"

import React, { useState } from 'react';

interface Types {
    text: string,
}

const DateInput = ({text}: Types) => {
  // State to store the input value
  const [inputValue, setInputValue] = useState('');

  // Function to handle date input changes
  const handleDateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Allow only numeric input and slashes
    const validInput = value.replace(/[^0-9/]/g, '');

    // Limit the input length to 8 characters (DD/MM/YY)
    const limitedInput = validInput.slice(0, 8);

    // Update the state with the limited input
    setInputValue(limitedInput);
  };

  return (
    <div className='flex flex-row gap-6 justify-center items-center m-auto'>
      {/* Input field for date (DD/MM/YY) */}
      <input
        type="text"
        value={inputValue}
        onChange={handleDateInputChange}
        placeholder={text}
        maxLength={8} // Limit the maximum length to 8 characters
        className='text-black p-2 bg-white w-24'
      />
    </div>
  );
};

export default DateInput;