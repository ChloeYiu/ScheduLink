"use client";

import { useState } from "react";
import axios from "axios";

interface ButtonInputs {
  text: String;
}

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

const ImportButton = ({ text }: ButtonInputs) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    uploadCal();
  };

  return (
    <button
      onClick={handleClick}
      className="px-6 py-4 text-white m-2 w-48 text-lg font-semibold bg-orange-500 hover:bg-orange-700 ease-in duration-100"
    >
      {text}
    </button>
  );
};

export default ImportButton;
