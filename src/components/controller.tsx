import * as S from './controller.style'
import React, { MouseEventHandler, useEffect, useRef, useState } from 'react'
const Controller:React.FC<{
    onStartClick: () => void
    onPauseClick: () => void,
    videoElement: HTMLVideoElement
}> = ({
    onStartClick,
    onPauseClick,
    videoElement
}) => {
    const [timeRatio, setTimeRatio] = useState(0)
    const outerRef = useRef<HTMLDivElement>(document.createElement('div'))
    useEffect(() => {
        setTimeRatio(videoElement.currentTime / videoElement.duration)
    }, [videoElement.duration, videoElement.currentTime])
    const onClick:MouseEventHandler<HTMLDivElement> = (e) => {
        videoElement.currentTime = videoElement.duration * e.nativeEvent.offsetX / e.currentTarget.clientWidth
    }
    return <S.ControllerContainer>
        <S.ButtonContainer>
            <S.ControllerButton onClick={onStartClick}>
                시작
            </S.ControllerButton>
            <S.PauseButton onClick={onPauseClick}>
                정지
            </S.PauseButton>
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