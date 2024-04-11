import React from "react";
import TailButton from "../UI/TailButton";
import { Link, useNavigate } from "react-router-dom";

export default function RouteNav() {
  const navigator = useNavigate();
  return (
    <div className="w-11/12 flex flex-col justify-center items-center">
      <ul className="w-11/12 flex justify-between items-center">
        <li className="px-4 py-2 m-2 rounded-md w-1/3 text-center bg-slate-200"><Link to='/'>HOME</Link></li>
        <li className="px-4 py-2 m-2 rounded-md w-1/3 text-center bg-slate-200"><Link to='/p1/ORANGE'>ORANGE</Link></li>
        <li className="px-4 py-2 m-2 rounded-md w-1/3 text-center bg-slate-200"><Link to='/p1/BANANA'>BANANA</Link></li>
      </ul>
      <div>
        <TailButton caption="HOME" color="blue" handleClick={() => { navigator("/") }} />
        <TailButton caption="GRAPE" color="blue" handleClick={() => { navigator("/p2?i1=GRAPE") }} />
        <TailButton caption="APPLE & BANANA" color="blue" handleClick={() => { navigator("/p2?i1=APPLE&i2=BANANA") }} />
      </div>
    </div>);
}
