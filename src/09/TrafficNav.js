import React, { useEffect } from "react";

export default function TrafficNav() {
  const getDataFetch = (url) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setTdata(data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?`;
    url = `${url}page=1&perPage=20&`;
    url = `${url}serviceKey=${process.env.REACT_APP_MV_API}`;

    console.log(url);
  });
  return <div>TrafficNav</div>;
}
