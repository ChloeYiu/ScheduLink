import React from 'react'

interface ButtonInputs {
  text: String,
}

const Button = ({text}: ButtonInputs) => {
  return (
    <button className='w-100'>{text}</button>
  )
}

export default Button