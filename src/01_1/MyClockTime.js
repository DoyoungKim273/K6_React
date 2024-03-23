import React from 'react'

function MyClockTime() {
    const currentTime = new Date()
  return (
    <h1 className='flex flex-col items-center justify-center'>
        현재 시각 : {currentTime.toLocaleTimeString()}
    </h1>
  )
}

export default MyClockTime;

