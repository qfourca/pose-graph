import PoseResult from "@pose/PoseResult";
import usePose from "@pose/usePose";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import tempViedo from "@static/video/good.mp4"
import { RecoilRoot } from "recoil";
import TextLogger from "./log/TextLogger";
import GraphLogger from './log/GraphLogger'
import ThreeLogger from './log/ThreeLogger'
import Controller from './components/controller'
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 1em;
  padding: 1em;
`

const App: React.FC = () => {
  const { send, value } = usePose()
  const [isStart, setIsStart] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(document.createElement("video"))
  useEffect(() => {
    if(isStart) {
      setTimeout(() => {
        send(videoRef.current)
      }, 10)
    }
  }, [isStart, value, videoRef])
  return <Container>
      <div style={{gridRow: "1", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#000000", borderRadius: ".5em"}}>
        <video src={tempViedo} ref={videoRef} muted onEnded={() => setIsStart(false)} />
      </div>
      <div>
        <TextLogger value={value} />
      </div>
      <div style={{gridRow: "1 / span 2"}}>
        <ThreeLogger value={value} /> 
      </div>
      <div style={{gridColumn: "1 / span 2"}}>
        <Controller 
        onStartClick={() => {setIsStart(true); videoRef.current.play()}} 
        onPauseClick={() => {setIsStart(false); videoRef.current.pause()}}
      />
      </div>
      <div style={{gridColumn: "1/ span 2"}}>
        <GraphLogger value={value} />
      </div>
      
    </Container>
}

const container = document.getElementById("app");

ReactDOM.render(
    <App />,
    container
)