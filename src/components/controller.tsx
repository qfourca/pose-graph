import * as S from './controller.style'
import React, { MouseEventHandler, useEffect, useRef, useState } from 'react'
const Controller:React.FC<{
    videoState: boolean
    setVideoState: (v: boolean) => void
    alalysisStates: boolean,
    setAlalysisStates: (v: boolean) => void
    videoElement: HTMLVideoElement
}> = ({
    videoState,
    setVideoState,
    alalysisStates,
    setAlalysisStates,
    videoElement
}) => {
    const [timeRatio, setTimeRatio] = useState(0)
    useEffect(() => {
        setTimeRatio(videoElement.currentTime / videoElement.duration)
    }, [videoElement.duration, videoElement.currentTime])
    const onClick:MouseEventHandler<HTMLDivElement> = (e) => {
        videoElement.currentTime = videoElement.duration * e.nativeEvent.offsetX / e.currentTarget.clientWidth
    }
    return <S.ControllerContainer>
        <S.ButtonContainer>
            <S.ControllerButton isRed={false} >
                동시시작
            </S.ControllerButton>
            <S.ControllerButton isRed={alalysisStates} onClick={() => {
                setAlalysisStates(!alalysisStates)
            }}>
                분석{
                    alalysisStates ? "정지" : "시작"
                }
            </S.ControllerButton>
            <S.ControllerButton isRed={videoState} onClick={() => {
                setVideoState(videoState)
            }}>
                영상{
                    videoState ? "정지" : "시작"
                }
            </S.ControllerButton>
        </S.ButtonContainer>
        <S.TimelineContainer>
            <S.TimelineOutBackground onClick={onClick}>
                <S.TimelineBackground>
                    <S.TimeLine style={{width: `${timeRatio * 100}%`}}>
                        <S.TimeLineBall/>
                    </S.TimeLine>
                </S.TimelineBackground>
            </S.TimelineOutBackground>
        </S.TimelineContainer>
        <S.TimerContainer>
            {/* //FIXME: time calculator*/}
            <h4>
                {
                    videoElement.currentTime
                }
            </h4>
            <div />
            <h4>
                {
                    Number.isNaN(videoElement.duration) ? 0 : videoElement.duration
                }
            </h4>
        </S.TimerContainer>
    </S.ControllerContainer>
}

export default Controller