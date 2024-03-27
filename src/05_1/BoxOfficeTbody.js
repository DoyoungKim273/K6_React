import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { CgLoadbar } from "react-icons/cg";

export default function BoxOfficeTbody({ boxList, setSelMv }) {
  const handleClick = (mv) => {
    console.log(mv);
    setSelMv(mv);
  };

  const trs = boxList.map((item) => (
    <tr
      key={item.movieCd}
      onClick={() => {
        handleClick(item);
      }}
      className="h-10 p-2 hover:bg-blue-100 hover:font-bold"
    >
      <td className="text-center">
        <span
          className="inline-flex w-3/5 p-1 justify-center items-center
                            bg-purple-950 text-white text-sm"
        >
          {item.rank}
        </span>
      </td>
      <td>{item.movieNm}</td>
      <td className="text-right">
        {parseInt(item.salesAmt).toLocaleString()}원
      </td>
      <td className="text-right">
        {parseInt(item.audiAcc).toLocaleString()}명
      </td>
      <td className="pt-3 flex justify-center items-center">
        {parseInt(item.rankInten) === 0 ? (
          <CgLoadbar />
        ) : parseInt(item.rankInten) > 0 ? (
          <FaArrowUp className="text-red-600" />
        ) : (
          <FaArrowDown className="text-blue-600" />
        )}
        {/* 삼항연산자 중첩 -- 조건? a : b : c */}
        {parseInt(item.rankInten) !== 0 && Math.abs(item.rankInten)}
        {/* item.rankInten을 정수형으로 변환한 값이 0과 같지 않은지 확인. 즉, 랭킹 증감 값이 0이 아닌 경우를 체크하여 0이 아닌 경우에만 해당 값 출력 */}
        {/* item.rankInten의 절댓값을 계산 -- 양수 또는 음수일 수 있는 랭킹 증감 값을 절댓값으로 표현 */}
      </td>
    </tr>
  ));
  return <tbody>{trs}</tbody>;
}
