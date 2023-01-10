import PoseResult from "@pose/PoseResult";
import usePose from "@pose/usePose";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import tempViedo from "@static/video/good.mp4"
import { RecoilRoot } from "recoil";
import TextLogger from "./log/TextLogger";
import GraphLogger from './log/GraphLogger'
import ThreeLogger from './log/ThreeLogger'


const App: React.FC = () => {
  const { send, value } = usePose()
  const [isStart, setIsStart] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(document.createElement("video"))
  useEffect(() => {
    if(isStart) {
      console.log(isStart)
      setTimeout(() => {
        videoRef.current.play()
        send(videoRef.current)
      }, 10)
    }
  }, [isStart, value, videoRef])
  return <div>
            <video src={tempViedo} ref={videoRef} controls muted>
            </video>
            <button onClick={() => setIsStart(true)}>시작</button>
            <button onClick={() => setIsStart(false)}>정지</button>
            <TextLogger value={value} />
            <GraphLogger value={value} />
            <ThreeLogger value={value} /> 
    </div>
};

const container = document.getElementById("app");

ReactDOM.render(
    <App />,
    container);