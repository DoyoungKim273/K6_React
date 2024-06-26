import "./App.css";
import { FaHome } from "react-icons/fa";
import Hello from "./01/Hello";
import MainHeader from "./01/MainHeader";
import MyClock from "./08/MyClock";
import HelloCss from "./02/HelloCss";
import MyDiv1 from "./03_1/MyDiv1";
import MyListMain from "./04/MyListMain";
import BoxOfficeTb from "./05/BoxOfficeTb";
// import BoxOfficeTb from './05_1/BoxOfficeTb';
import Lotto from "./06/Lotto";
import FoodMain from "./07/FoodMain";
import TrafficNav from "./09/TrafficNav";
import TrafficMain from "./09/TrafficMain";
import RefInput from "./10/RefInput";
import RefVal from "./10/RefVal";
import GalleryMain from "./11/GalleryMain";
import Festival from "./12/Festival";
import RouteMain from "./13/RouteMain";
function App() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl h-screen mx-auto overscroll-y-auto">
      <header className="flex justify-between items-center h-20 p-10 text-xl font-bold text-black bg-slate-200">
        <div>React 실습</div>
        <div>
          <FaHome className="text-2xl text-black" />
        </div>
      </header>
      <main className="grow flex flex-col justify-center items-center">
        {/* <MainHeader /> */}
        {/* <Hello /> */}
        {/* <MyClock /> */}
        {/* <HelloCss /> */}
        {/* <MyDiv1 /> */}
        {/* <MyDiv1 /> */}
        {/* <MyListMain /> */}
        {/* <BoxOfficeTb /> */}
        {/* <BoxOfficeTb /> */}
        {/* <Lotto /> */}
        {/* <FoodMain /> */}
        {/* <MyClock /> */}
        {/* <TrafficMain /> */}
        {/* <RefInput /> */}
        {/* <RefVal /> */}
        {/* <GalleryMain /> */}
        {/* <Festival /> */}
        <RouteMain />
      </main>
      <footer className="flex justify-center items-center h-20 bg-slate-800 text-base text-white">
        ⓒ 2024 Doyoung Kim. All right reserved.
      </footer>
    </div>
  );
}

export default App;
