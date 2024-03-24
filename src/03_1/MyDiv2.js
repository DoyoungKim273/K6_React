import React from 'react'
import MyDiv3 from './MyDiv3'

// 함수의 파라미터에서 객체 비구조화 문법을 사용하여 props를 분해
//  props 객체에서 필요한 값을 직접 추출하여 사용할 수 있게 해줌

export default function MyDiv2({d1, d2, d3}) { 
  // 비구조화된 파라미터로 전달된 d1, d2, d3와 같이 직접 변수를 사용하여 값을 가져옴
  // props를 바로 사용하므로 코드가 더 간결하고 가독성이 높아짐
  //  필요한 props를 명시적으로 선언하므로 코드의 의도를 더 쉽게 파악할 수 있음
  
  return (
    <div className='w-4/5 h-2/3 flex flex-col justify-center items-center bg-lime-700 text-lime-50'>
        <p className='w-4/5 flex justify-start font-bold text-2xl m-5'>
            {`${d1} > ${d2}`}
        </p>
        <MyDiv3 d11={d1} d21={d2} d31={d3} />
    </div>
  )
}
