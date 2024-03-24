import './App.css';
import { FaHome } from "react-icons/fa";
import Hello from "./01/Hello";
import MainHeader from './01/MainHeader';
import MyClock from './01_1/MyClock';
import HelloCss from './02/HelloCss';
import MyDiv1 from './03_1/MyDiv1';
import MyListMain from './04/MyListMain';

function App() {

  return (
    <div className='flex flex-col w-full max-w-screen-xl h-screen mx-auto overscroll-y-auto'>
      <header className='flex justify-between items-center h-20 p-10 text-xl font-bold text-blue-800 bg-slate-200'>
        <div>React 실습</div>
        <div><FaHome className='text-2xl text-black'/></div>
      </header>
      <main className='grow flex flex-col justify-center items-center'>
        {/* <MainHeader /> */}
        {/* <Hello /> */}
        {/* <MyClock /> */}
        {/* <HelloCss /> */}
        {/* <MyDiv1 /> */}
        {/* <MyDiv1 /> */}
        <MyListMain />
      </main>
      <footer className='flex justify-center items-center h-20 bg-slate-800 text-base text-white'>
        ⓒ 2024 Doyoung Kim. All right reserved.
      </footer>
    </div>
  );
}

export default App;
