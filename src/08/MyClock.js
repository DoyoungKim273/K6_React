import React from 'react'
import MyClockImage from './MyClockImage'
import MyClockTime from './MyClockTime'

export default function MyClock() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
        <MyClockImage />
        <MyClockTime />
    </div>
  )
}
