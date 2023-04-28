import React from 'react'

const Button = (props) => {
  return (
    <button  className={`p-2 text-lg bg-teal-700 text-white mt-3 ${props.className}`}>{props.children}</button>
  )
}

export default Button