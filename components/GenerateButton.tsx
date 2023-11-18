"use client"

interface ButtonInputs {
  text: String,
}

const GenerateButton = ({text}: ButtonInputs) => {
  return (
    <button 
      className="px-6 py-4 text-white m-2 w-64 text-lg font-semibold bg-purple-500 hover:bg-purple-700 ease-in duration-100"
    >
      {text}
    </button>
  )
}

export default GenerateButton