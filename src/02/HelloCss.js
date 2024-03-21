import React from 'react'
import logo from '../logo.svg'
import './HelloCss.css'
import HelloGreen from './HelloGreen'
import HelloPurple from './HelloPurple'

export default function HelloCss() {
    const apikey = process.env.REACT_APP_MV_API
    console.log(apikey)

  return (
    <div className='hellomain'>
        <p>
            <img className='imglogo' src={logo} alt='logo'></img>
        </p>
        <HelloGreen />
        <HelloPurple />
    </div>
  )
}
