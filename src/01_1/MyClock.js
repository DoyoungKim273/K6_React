import React from 'react'
import MyClockTime from './MyClockTime'
import MyClockImage from './MyClockImage'

function MyClock() {
  return (
    <div className='mainArea'>
        <MyClockImage />
        <div className='bold-text text-white bg-yellow-400'>
        <MyClockTime />
        </div>
    </div>
  )
}

export default MyClock
