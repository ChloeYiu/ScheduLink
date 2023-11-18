"use client";
import React from "react";
import axios from "axios";

const uploadCal = async () => {
  // fetch("/api/save-file", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify("C:/Users/chloe_/Desktop/output.png"),
  // });
  axios
    .get("/api/save-file", { params: { dir: "output.png" } })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
};

const handleClick = () => {
  uploadCal();
};

interface ButtonInputs {
  text: String;
}

const Button = ({ text }: ButtonInputs) => {
  return (
    <button className="w-100" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
