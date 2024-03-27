import React from "react";
import BoxOfficeData from "../05/BoxOffice.json";
import { useState } from "react";
import BoxOfficeTbody from "./BoxOfficeTbody";
import BoxOfficeThead from "./BoxOfficeThead";
import BoxOfficeInfo from "./BoxOfficeInfo";

export default function BoxOfficeTb() {
  const boxList = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList;
  const [selMv, setSelMv] = useState();

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <table className="w-4/5 border">
        <BoxOfficeThead />
        <BoxOfficeTbody boxList={boxList} setSelMv={setSelMv} />
      </table>
      <BoxOfficeInfo selMv={selMv} />
    </div>
  );
}
