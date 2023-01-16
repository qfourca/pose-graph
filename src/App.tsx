import useVideo from "@hooks/useVideo"
import usePose from "@pose/UsePose";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import Recorded from './components/recorded/recorded'
import Webcam from './components/webcam/webcam'
import TextLogger from "./log/TextLogger";
import GraphLogger from './log/GraphLogger'
import ThreeLogger from './log/ThreeLogger'
import Controller from './components/controller/controller'
import GlobalFonts from '../static/fonts/pretendard'
import * as style from './App.style'

const App: React.FC = () => {
    const [videoState, setVideoState] = useState(0)
	const { send, value } = usePose()
	const videoRef = useRef<HTMLVideoElement>(document.createElement("video"))
	const [currentTime, setCurrentTime, isStart, setIsStart] = useVideo(videoRef.current)
	useEffect(() => {
		if (performance.now() > 3000) send(videoRef.current), 1000 / 120
	}, [currentTime])
    return <style.mainContainer>
        <GlobalFonts />
        <style.videoContainer>
            <style.videoButtonContainer>
                <style.videoTypeButton onClick={() => {setVideoState(0)}} videoType={0} turn={videoState}>동영상</style.videoTypeButton>
                <style.videoTypeButton onClick={() => {setVideoState(1)}} videoType={1} turn={videoState}>웹  캠</style.videoTypeButton>
            </style.videoButtonContainer>
            {
                videoState === 0 ? <Recorded videoRef={videoRef} pauseFunc={setIsStart} /> : <Webcam play={() => setIsStart(true)}/>
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
					currentTime={currentTime}
					setCurrentTime={setCurrentTime}
					isStart={isStart}
					setIsStart={setIsStart}
					duration={videoRef.current.duration}
				/>
        </style.controllerContainer>
        <style.graphLoggerContainer>
            <GraphLogger value={value} />
        </style.graphLoggerContainer>
    </style.mainContainer>
}

const container = document.getElementById("app")

ReactDOM.render(<App />, container)
