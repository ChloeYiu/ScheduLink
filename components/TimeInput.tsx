"use client"

import React, { useState, FormEvent, ChangeEvent } from 'react';

interface TimeInputFormProps {
  onSubmit: (startTime: string, endTime: string) => void;
}

const TimeInputForm: React.FC<TimeInputFormProps> = ({ onSubmit }) => {
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');

  const handleStartTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEndTime(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(startTime, endTime);
  };

  return (
    <div>
      <h2>Time Input Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Start Time:
          <input type="text" value={startTime} onChange={handleStartTimeChange} placeholder="e.g. 0900" />
        </label>
        <br />
        <label>
          End Time:
          <input type="text" value={endTime} onChange={handleEndTimeChange} placeholder="e.g. 2300" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TimeInputForm;
