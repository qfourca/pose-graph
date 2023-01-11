import * as S from './controller.style'
import React, { useEffect, useState } from 'react'
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
    useEffect(() => {
        setTimeRatio(videoElement.currentTime / videoElement.duration)
    }, [videoElement.duration, videoElement.currentTime])
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
            <S.TimelineOutBackground>
                <S.TimelineBackground>
                    <S.TimeLine style={{width: `${timeRatio * 100}%`}}>
                        <S.TimeLineBall/>
                    </S.TimeLine>
                </S.TimelineBackground>
            </S.TimelineOutBackground>
        </S.TimelineContainer>
        <S.TimerContainer>
            <h4>
                {
                    videoElement.currentTime
                }
            </h4>
            <div />
            <h4>
                {
                    videoElement.duration
                }
            </h4>
        </S.TimerContainer>
    </S.ControllerContainer>
}

export default Controller