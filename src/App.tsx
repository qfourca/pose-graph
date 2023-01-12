import useVideo from "@hooks/useVideo"
import usePose from "@pose/usePose";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import Recorded from './components/recorded/recorded'
import Webcam from './components/webcam/webcam'
import TextLogger from "./log/TextLogger";
import GraphLogger from './log/GraphLogger'
import ThreeLogger from './log/ThreeLogger'
import Controller from './components/controller/controller'
import GlobalFonts from '../static/fonts/pretendard'
import styled from "styled-components";
import useTick from '@hooks/useTick'

import * as style from './App.style'

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
    const [videoState, setVideoState] = useState(0)
    const videoRef = useRef<HTMLVideoElement>(document.createElement("video"))
    const videoHook = useVideo(videoRef.current)
    useEffect(() => {
        if (isStart) setTimeout(() => send(videoRef.current), 1000 / 60)
    }, [isStart, value])
    return <style.mainContainer>
        <GlobalFonts />
        <style.videoContainer>
            <style.videoButtonContainer>
                <style.videoTypeButton onClick={() => {setVideoState(0)}} videoType={0} turn={videoState}>동영상</style.videoTypeButton>
                <style.videoTypeButton onClick={() => {setVideoState(1)}} videoType={1} turn={videoState}>웹  캠</style.videoTypeButton>
            </style.videoButtonContainer>
            { 
                videoState === 0 ? <Recorded videoRef={videoRef} pauseFunc={setIsStart} /> : <Webcam />
            }
        </style.videoContainer>
        <style.textLoggerContainer>
            <TextLogger value={value} />
        </style.textLoggerContainer>
        <style.threeLoggerContainer>
            <ThreeLogger value={value} />
        </style.threeLoggerContainer>
        <style.controllerContainer>
            <Controller
                onStartClick={() => { setIsStart(true); videoHook.setIsPaused(false) }}
                onPauseClick={() => { setIsStart(false); videoHook.setIsPaused(true) }}
                videoElement={videoRef.current}
            />
        </style.controllerContainer>
        <style.graphLoggerContainer>
            <GraphLogger value={value} />
        </style.graphLoggerContainer>
    </style.mainContainer>
}

const container = document.getElementById("app");

ReactDOM.render(
    <App />,
    container
)