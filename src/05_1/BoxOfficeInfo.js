import React from "react";

export default function BoxOfficeInfo({ selMv }) {
  return (
    <div
      className="flex w-4/5 h-10 text-bold text-center bg-green-900 text-white
                justify-center items-center"
    >
      {selMv === undefined && "영화를 선택해주세요."}
      {selMv &&
        `[${selMv.movieCd}] ${selMv.movieNm} - 
    누적관객수 : ${parseInt(selMv.salesAcc).toLocaleString()}명
    누적매출액 : ${parseInt(selMv.audiAcc).toLocaleString()}원`}
    </div>
  );
}
