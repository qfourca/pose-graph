import useVideo from "@hooks/useVideo"
import usePose from "@pose/usePose";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import Video from './components/video'
import TextLogger from "./log/TextLogger";
import GraphLogger from './log/GraphLogger'
import ThreeLogger from './log/ThreeLogger'
import Controller from './components/controller'
import GlobalFonts from '../static/fonts/pretendard'
import styled from "styled-components";
import useTick from '@hooks/useTick'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
  padding: 1em;
`

const App: React.FC = () => {
    const { send, value } = usePose()
    // const tick = useTick(10)
    const [isStart, setIsStart] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(document.createElement("video"))
    const videoHook = useVideo(videoRef.current)
    useEffect(() => {
        if (isStart) setTimeout(() => send(videoRef.current), 1000 / 60)
    }, [isStart, value])
    return <Container>
        <GlobalFonts/>
        {}
        <div style={{ gridRow: "1", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: ".5em", height: "40rem", backgroundColor: "#F8EDE3"}}>
            <Video videoRef={videoRef} pauseFunc={setIsStart}/>
        </div>
        <div>
            <TextLogger value={value} />
        </div>
        <div style={{ gridRow: "1 / span 2" }}>
            <ThreeLogger value={value} />
        </div>
        <div style={{ gridColumn: "1 / span 2" }}>
            <Controller
                onStartClick={() => { setIsStart(true); videoHook.setIsPaused(false) }}
                onPauseClick={() => { setIsStart(false); videoHook.setIsPaused(true) }}
                videoElement={videoRef.current}
            />
        </div>
        <div style={{ gridColumn: "1/ span 2" }}>
            <GraphLogger value={value} />
        </div>
  {/* const { send, value } = usePose()
  const [videoTime, setVideoTime] = useState<number>(0)
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
      <div style={{gridRow: "1", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#000000", borderRadius: ".5em", height: "40rem"}}>
        <video style={{objectFit: "none", width: "100%", height: "100%"}} src={tempViedo} ref={videoRef} muted onEnded={() => setIsStart(false)} />
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
        videoElement={videoRef.current}
      />
      </div>
      <div style={{gridColumn: "1/ span 2"}}>
        <GraphLogger value={value} />
      </div> */}
      
    </Container>
}

const container = document.getElementById("app");

ReactDOM.render(
    <App />,
    container
)