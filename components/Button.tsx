"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";

// const uploadCal = async () => {
//   // fetch("/api/save-file", {
//   //   method: "GET",
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //   },
//   //   body: JSON.stringify("C:/Users/chloe_/Desktop/output.png"),
//   // });
//   axios
//     .get("/api/save-file", { params: { dir: "output.png" } })
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => console.log(error));
// };

interface ButtonInputs {
  text: String;
}

const Button = ({ text }: ButtonInputs) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    // uploadCal();
  };

  return (
    <button
      onClick={handleClick}
      className={`px-6 py-4 m-2 w-32 ${
        isClicked
          ? "bg-green-500 border-2 border-green-500 text-black"
          : "text-white border-2 border-green-500"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
