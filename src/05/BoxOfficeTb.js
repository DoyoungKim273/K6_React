import React from 'react'
import BoxOfficeData from "./BoxOffice.json";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { CgLoadbar } from "react-icons/cg";
import { useState } from "react";

export default function BoxOfficeTb() {

    const boxList = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList
    console.log("boxList=", boxList)

    const [selMv, setselMV] = useState() // 상태 변수 selMv와 해당 상태를 변경하는 함수 setSelMv를 선언

    const handleClick = (mv) => {
        console.log(mv)
        setselMV(mv)
    } 
    // handleClick 함수는 클릭된 영화 데이터를 받아와서 해당 데이터로 selMv 상태를 업데이트
    
    const trs = boxList.map(item => 
        <tr key={item.movieCd}
                onClick={() => {handleClick(item)}}
                className="h-10 p-2 hover:bg-blue-100 hover:font-bold">
            <td className='text-center'>
                <span className='inline-flex w-3/5 p-1 justify-center items-center
                                bg-blue-900 text-white text-sm'>{item.rank}</span>
            </td>
            <td>{item.movieNm}</td>
            <td className='text-right'>{parseInt(item.salesAmt).toLocaleString()}원</td>
            <td className='text-right'>{parseInt(item.audiAcc).toLocaleString()}명</td>
            <td className='pt-3 flex justify-center items-center'>
                {parseInt(item.rankInten) === 0? <CgLoadbar /> 
                : parseInt(item.rankInten) > 0 ?  <FaArrowUp className='text-red-600'/>
                : <FaArrowDown className='text-blue-600'/>
                } 
                {/* 삼항연산자 중첩 -- 조건? a : b : c */}
                {parseInt(item.rankInten) !==0 && Math.abs(item.rankInten)}
                {/* item.rankInten을 정수형으로 변환한 값이 0과 같지 않은지 확인. 즉, 랭킹 증감 값이 0이 아닌 경우를 체크하여 0이 아닌 경우에만 해당 값 출력 */}
                {/* item.rankInten의 절댓값을 계산 -- 양수 또는 음수일 수 있는 랭킹 증감 값을 절댓값으로 표현 */}
            </td>
        </tr>
        )

  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <table className='w-4/5 border'>
            <thead>
                <tr className='h-10 text-center bg-blue-900 text-white'>
                    <th className='w-14'>순위</th>
                    <th>영화명</th>
                    <th className='w-1/5'>매출액</th>
                    <th className='w-1/5'>관객수</th>
                    <th className='w-30'>증감율</th>
                </tr>
            </thead>
            <tbody>
                {trs}
            </tbody>
        </table>
        <div>
            {selMv === undefined && '영화를 선택해주세요.'}
            {selMv && `[${selMv.movieCd}] ${selMv.movieNm} - 
            누적관객수 : ${parseInt(selMv.salesAcc).toLocaleString()}명
            누적매출액 : ${parseInt(selMv.audiAcc).toLocaleString()}원`}
        </div>
    </div>
  )
}
