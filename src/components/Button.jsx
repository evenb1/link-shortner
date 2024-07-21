import React from 'react'
import styles from './Button.module.css';

const Button = ({ onClick }) =>  {
  return (
    <div><button onClick={onClick}>Shorten URL</button>
</div>
  )
}

export default Button

