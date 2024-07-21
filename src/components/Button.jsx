import React from 'react'
import styles from './Button.module.css';

const Button = ({ onClick }) =>  {
  return (
    <div><button onClick={onClick}><span>Shorten URL</span></button>
</div>
  )
}

export default Button

