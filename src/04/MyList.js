import React, { useState } from 'react'
import { GoHeartFill } from "react-icons/go";

export default function MyList({title, imgUrl, content}) { // MyList 함수 컴포넌트를 정의하고, props로 title, imgUrl, content를 받음

    let cnt = 0 // cnt라는 지역 변수를 선언하고 0으로 초기화

    const [stCnt, setStCnt] = useState(0) 
    // stCnt라는 state 변수와 그 값을 변경할 수 있는 setStCnt 함수를 선언
    // 이 state 변수는 좋아요 수를 추적,  초기 값은 0으로 설정

    const handleLike = (t) => { //  좋아요 버튼을 클릭했을 때 실행되는 함수를 정의, t는 클릭된 리스트 아이템의 제목을 나타냄
        console.log('handleLike' + t) // 클릭된 아이템의 제목을 콘솔에 출력
        cnt = cnt + 1 // 지역 변수 cnt를 증가, 이는 좋아요가 클릭된 횟수를 추적
        console.log(`cnt = ${cnt}`) // 증가된 cnt 값을 콘솔에 출력
        setStCnt(stCnt + 1) // stCnt 상태를 1 증가, 이는 화면에 표시되는 좋아요 수를 변경
    }

  return (
    <div className='w-full flex border rounded hover:bg-gray-100'>
        <div className='w-1/4 max-w-40'>
            <img src={imgUrl} alt={title} /> 
        </div>
        <div className='w-3/4 px-5 py-3'>
            <h1 className='text-2xl font-bold text-gray-700'>
                {title}
            </h1>
            <p className='w-full text-gray-600'>
                {content}
            </p>
            <p className='w-full flex justify-end items-center mt-5 font-bold'>
                <span className='text-xl' onClick={() => {handleLike(title)}}>
                    <GoHeartFill className='text-red-600 hover:text-black'/>
                </span>
                {/* 좋아요 버튼을 표시하고, 클릭 시 handleLike 함수를 실행 */}
                <span className='mx=2'>좋아요</span> 
                {/* 좌우(margin-x)에 대한 2의 값을 가진 Tailwind CSS 클래스가 적용 */}
                <span>{stCnt}</span>
                {/* 좋아요 수를 표시, 이는 stCnt state 변수를 통해 관리됨 */}
            </p>
        </div>
    </div>
  )
}
