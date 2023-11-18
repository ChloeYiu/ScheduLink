"use client"

import React, { useState, useEffect } from 'react';
import Slider from 'react-slider';

interface TimeSliderProps {
  onChange: (startTime: number, endTime: number) => void;
  startTime: number; // Initial start time in minutes
  endTime: number;   // Initial end time in minutes
}

const TimeSlider: React.FC<TimeSliderProps> = ({ onChange, startTime, endTime }) => {
  const [sliderValues, setSliderValues] = useState<number[]>([startTime, endTime]);

  useEffect(() => {
    setSliderValues([startTime, endTime]);
  }, [startTime, endTime]);

  const handleSliderChange = (values: number[]) => {
    setSliderValues(values);
    onChange(values[0], values[1]);
  };

  return (
    <div>
      <h2>Time Range Slider</h2>
      <p>Start Time: {formatTime(sliderValues[0])}</p>
      <p>End Time: {formatTime(sliderValues[1])}</p>

      <Slider
        min={0}
        max={1440}
        step={15} // Adjust step as needed
        value={sliderValues}
        onChange={handleSliderChange}
        //withBars
      />
    </div>
  );
};

// Helper function to format time in HH:mm format
const formatTime = (timeInMinutes: number): string => {
  const hours = Math.floor(timeInMinutes / 60);
  const minutes = timeInMinutes % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
};

export default TimeSlider;

