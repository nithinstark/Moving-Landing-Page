import React from 'react'
import './Button.css'

export const Button = ({buttonClick,show}) => {
  return (
    <button onClick={buttonClick}>
        {show ? 'show less' : 'show more' } 
    </button>
  )
}