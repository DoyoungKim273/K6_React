import React from "react";
import { useState, useEffect, useRef } from "react";
import GalleryCard from "../11/GalleryCard";

export default function Festival() {
  const [tdata, setTdata] = useState();
  const [guname, setGuname] = useState();
  const [opTags, setOpTags] = useState();
  const [cardTags, setCardTags] = useState();
  const selRef = useRef();

  const handleSelGu = () => {
    console.log(selRef.current.value);
    let tm = tdata
      .filter((item) => item.GUGUN_NM === selRef.current.value)
      .map((item) => (
        <GalleryCard
          key={item.UC_SEQ}
          imgurl={item.MAIN_IMG_THUMB}
          title={item.PLACE}
          ptitle={item.TITLE}
          ktag={item.TRFC_INFO}
        />
      ));
    setCardTags(tm);
    console.log(tm);
  };

  const getData = (url) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setTdata(data.getFestivalKr.item))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
    url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`;
    url = url + `&pageNo=1&numOfRows=10&resultType=json`;

    getData(url);
    console.log(url);
  }, []);

  useEffect(() => {
    if (!tdata) return;

    let tm = tdata.map((item) => item.GUGUN_NM);
    tm = new Set(tm);
    tm = [...tm].sort();
    setGuname(tm);
  }, [tdata]);

  useEffect(() => {
    if (!guname) return;
    console.log(guname);

    let tm = guname.map((item) => (
      <option value={item} key={item}>
        {item}
      </option>
    ));
    setOpTags(tm);
  }, [guname]);

  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <form className="w-3/5 mx-auto flex mt-10 justify-center items-center">
        <label
          htmlFor="gu"
          className="w-1/3 block mb-2 text-lg font-bold text-gray-900"
        >
          부산 축제 정보 선택
        </label>
        <select
          id="gu"
          onChange={handleSelGu}
          ref={selRef}
          className="w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        >
          <option>---구/군 선택---</option>
          {opTags}
        </select>
      </form>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-2">
        {cardTags}
      </div>
    </div>
  );
}
