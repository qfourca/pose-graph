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
import GlobalFonts from '../static/fonts/pretendard'
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
  padding: 1em;
`

const App: React.FC = () => {
    const { send, value } = usePose()

    const [video, setVideo] = useState({})
    const videoUpload = (e: any) => {
        const imageType = e.target.files[0].type.includes('image')
        const videoType = e.target.files[0].type.includes('video')

        setVideo({
            url: URL.createObjectURL(e.target.files[0]),
            image: imageType,
            video: videoType
        })
    }
    
    const [isStart, setIsStart] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(document.createElement("video"))
    useEffect(() => {
        if (isStart) {
            setTimeout(() => {
                send(videoRef.current)
            }, 10)
        }
    }, [isStart, value, videoRef])
    return <Container>
        <GlobalFonts/>

        <div style={{ gridRow: "1", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: ".5em", height: "40rem", backgroundColor: "#b3f5c5"}}>
            {!video.video && <input type='file' onChange={videoUpload} style={{justifyContent: 'center'}}/>}
            {video.video && <video style={{ objectFit: "none", width: "100%", height: "100%" }} src={video.url} ref={videoRef} muted onEnded={() => setIsStart(false)} />}
        </div>
        <div>
            <TextLogger value={value} />
        </div>
        <div style={{ gridRow: "1 / span 2" }}>
            <ThreeLogger value={value} />
        </div>
        <div style={{ gridColumn: "1 / span 2" }}>
            <Controller
                onStartClick={() => { setIsStart(true); videoRef.current.play() }}
                onPauseClick={() => { setIsStart(false); videoRef.current.pause() }}
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