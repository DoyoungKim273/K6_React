import React from 'react'
import MyList from './MyList'
import listData from './MyListData.json'
// 현재 디렉토리에서 MyListData.json 파일을 가져와서 listData 변수에 할당, 이 파일에는 리스트 아이템에 대한 데이터가 포함

export default function MyListMain() { // MyListMain 함수형 컴포넌트를 정의, 이 함수는 리스트를 보여주는 메인 컴포넌트
    console.log(listData) // listData 변수의 내용을 콘솔에 출력, 이는 데이터가 올바르게 가져와졌는지 확인하기 위한 디버깅 목적으로 사용

    const myItems = listData.map(item =>
        <MyList title={item.title} imgUrl={item.imgUrl} content={item.content} key={item.title}/>
        )
        // listData 배열을 map 메서드를 사용하여 순회하면서 각 요소에 대한 MyList 컴포넌트를 생성
        // 각 아이템의 제목(title), 이미지 URL(imgUrl), 내용(content) 및 고유 키(key)를 전달

  return (
    <div className='w-10/12 grid grid-cols-1 md:grid-cols-2 gap-4'> 
    {/* 10/12의 너비를 가지는 그리드 레이아웃을 생성하고, 내부 요소를 하나의 열에 배치, 
    중간 크기 화면 이상에서는 두 개의 열로 배치되며, 내부 요소 사이의 간격은 4로 설정 */}
        {myItems}
    </div>
  )
  // MyListMain 컴포넌트의 렌더링 결과를 반환
  // 여기서는 div 요소를 사용하여 그리드 레이아웃을 생성하고, 그 안에 myItems 배열에 포함된 모든 리스트 아이템을 렌더링
}
