import "./Hello.css"; 
// 안 나오면 내가 쓰면 됨(겁 먹지 말기!!! 에러를 많이 내야 실력이 빨리 는다!)

function Hello() {
    let n = Math.floor(Math.random() * 99) + 1;

    const st1 = {
        backgroundColor: "blue", color: "white"
    }

    let x;
    const currentTime = new Date();
    
    return(
        <h1>
            <p className="text-lg flex flex-col items-center justify-center bg-red-500 text-white">
                {currentTime.toLocaleTimeString()}
            </p>
            <span style={st1}>Hello</span>
            <span style={{display:"inline-flex", margin:"10px"}}>
                {n < 10? `0${n}` : n} 
            </span>

            {/* {n % 2 === 0? "짝수" : "홀수"} */}
            {n % 2 === 0?
            <span style={{color:'orange'}}>짝수</span>
            :<span style={{color:'blue'}}>홀수</span>}
            {n % 2 === 0 && "🧡🧡"}
            {n % 2 === 1 && "💙💙"}
            <p className="flex flex-col justify-center items-center">{x || "x는 undefineded입니다."}</p>
        </h1>

    );
}

export default Hello;