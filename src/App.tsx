import './App.css'
import { useState } from "react";

function App() {
    const [ infos, setInfos ] = useState<string[]>([])
    const handleClick = () => {
        setInfos(prev => [ ...prev, "애몽가"] )
    }
  return (
    <>
        <div>
            <h1 className="title">안녕아세요 에몽가입니다.🪴</h1>
            <img
                src="https://cdn.myportfolio.com/7547f2f9-cf26-4b9e-ba59-66b71d0a3daa/ef405405-244f-446b-b848-690ce0ee28cc_acc_520x350.jpeg?h=4736c1bfba3b35b3971a6526f4d54955"
                data-src="https://cdn.myportfolio.com/7547f2f9-cf26-4b9e-ba59-66b71d0a3daa/ef405405-244f-446b-b848-690ce0ee28cc_acc_520x350.jpeg?h=4736c1bfba3b35b3971a6526f4d54955"
                alt="thumbnails"
            />
            <h2>에몽가는 무엇인가?</h2>
            <ul>
                {infos.length > 0 &&
                    infos.map(e => <li>{e}</li>)
                }
            </ul>
            <button className={ "heartbeat" } onClick={handleClick}>애몽가버튼</button>
        </div>
    </>
  )
}

export default App
