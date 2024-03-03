import React from 'react'

const Button = (props) => {
  return (
    <button className='p-2 text-lg bg-blue-700 text-white '  
    type={props.type || "button"} onClick={props.onClick} > 
    {props.children}
    </button>
  )
}

export default Button