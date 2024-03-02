import React from 'react'

const Button = (props) => {
  return (
    <button className='p-2 text-lg bg-blue-700 text-white '> {props.children}</button>
  )
}

export default Button