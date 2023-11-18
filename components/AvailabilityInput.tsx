"use client"

import { useState } from "react";

interface AvailabilityInputs {
  text: String,
}

import React, { ChangeEvent } from 'react';

interface NumberInputProps {
  value: string;
  onChange: (value: string) => void;
}

const AvailabilityInput: React.FC<NumberInputProps> = ({ value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Remove non-numeric characters using a regular expression
    const newValue = e.target.value.replace(/[^0-9]/g, '');

    // Pass the cleaned numeric value to the parent component
    onChange(newValue);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Enter numbers only"
    />
  );
};


export default AvailabilityInput