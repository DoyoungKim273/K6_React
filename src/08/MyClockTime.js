import { useState, useEffect } from "react";
import React from 'react'

export default function MyClockTime() {
    const [currentTime, SetCurrentTime] = useState(new Date())

    useEffect(() => {
        const t = setInterval(() => {
            SetCurrentTime(new Date())
        }, 1000)
        console.log("[]=>", currentTime)

        return () => {clearInterval(t)}
    },[]) // 빈 배열이 오므로 한번만 console 에 출력

    useEffect(() => {
        console.log("[currentTime] => ", currentTime)
    }, [currentTime]) 
    // currentTime 이 종속성 배열이므로 currentTime 이 변경될때마다 console에 출력
    
  return (
    <h1 className="font-bold text-2xl">
        {currentTime && `현재 시각 : ${currentTime.toLocaleTimeString()}`}
    </h1>
  )
}
