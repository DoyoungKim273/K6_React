import React, { useState, useEffect } from "react";
import TrafficNav from "./TrafficNav";

export default function TrafficMain() {
  const [tdata, setTdata] = useState();

  const [c1, setC1] = useState();
  const [selC1, setSelC1] = useState();

  const [c2, setC2] = useState();
  const [selC2, setSelC2] = useState();

  const [detail, setDetail] = useState();
  const [info, setInfo] = useState();

  const getDataFetch = (url) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setTdata(data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?`;
    url = `${url}page=1&perPage=20&`;
    url = `${url}serviceKey=${process.env.REACT_APP_APIKEY}`;

    console.log(url);

    getDataFetch(url);
  }, []);

  useEffect(() => {
    if (!tdata) return;

    let tm = tdata.map((item) => item.사고유형_대분류);
    tm = new Set(tm);
    tm = [...tm];
    console.log("tdata tm => ", tm);

    setC1(tm);
  }, [tdata]);

  useEffect(() => {
    console.log("selC1 => ", selC1);
    if (!tdata) return;

    let tm = tdata
      .filter((item) => item.사고유형_대분류 === selC1)
      .map((item) => item.사고유형_중분류);

    setInfo("");
    setC2(tm);
  }, [selC1]);

  useEffect(() => {
    console.log("selC2 =>", selC2);
    if (!tdata) return;

    let tm = tdata.filter(
      (item) => item.사고유형_대분류 === selC1 && item.사고유형_중분류 === selC2
    );

    setDetail(tm[0]);
  }, [selC2]);

  useEffect(() => {
    console.log("detail =>", detail);
    if (!tdata) return;

    const keyArr = [
      "경상자수",
      "부상신고자수",
      "사고건수",
      "사망자수",
      "중상자수",
    ];

    let tm = keyArr.map((k) => (
      <div>
        <div>{k}</div>
        <div>{parseInt(detail[k]).toLocaleString()}</div>
      </div>
    ));
    setInfo(tm);
  }, [detail]);

  return (
    <div className="w-full h-full mt-5 flex flex-col justify-start items-center">
      {c1 && <TrafficNav title = "대분류" category={c1} sel={selC1} setSel={setSelC1}/>}
      {c2 && <TrafficNav title = "중분류" category={c2} sel={selC2} setSel={setSelC2}/>}
      <div className="w-11/12 mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">{info}</div>
    </div>
  );
}
