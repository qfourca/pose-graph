import * as S from "./controller.style"
import React, { MouseEventHandler, useEffect, useRef, useState } from "react"
const Controller: React.FC<{
	currentTime: number
	setCurrentTime: (v: number) => void
	isStart: boolean
	setIsStart: (v: boolean) => void
	duration: number
}> = ({ currentTime, setCurrentTime, isStart, setIsStart, duration }) => {
	const [timeRatio, setTimeRatio] = useState(0)
	useEffect(() => {
		setTimeRatio(currentTime / 1000 / duration)
	}, [duration, currentTime])
	const onClick: MouseEventHandler<HTMLDivElement> = (e) => {
		setCurrentTime(((duration * e.nativeEvent.offsetX) / e.currentTarget.clientWidth) * 1000)
	}
	return (
		<S.ControllerContainer>
			<S.ButtonContainer>
				<S.ControllerButton isRed={isStart} onClick={() => setIsStart(!isStart)}>
					{
						isStart ? "중지" : "시작"
					}
				</S.ControllerButton>
			</S.ButtonContainer>
			<S.TimelineContainer>
				<S.TimelineOutBackground onClick={onClick}>
					<S.TimelineBackground>
						<S.TimeLine style={{ width: `${timeRatio * 100}%` }}>
							<S.TimeLineBall />
						</S.TimeLine>
					</S.TimelineBackground>
				</S.TimelineOutBackground>
			</S.TimelineContainer>
			<S.TimerContainer>
				{/* //FIXME: time calculator*/}
				<h4>{Math.round(currentTime / 10) / 100}</h4>
				<div />
				<h4>
					{Number.isNaN(duration)
						? 0
						: Math.round(duration * 100) / 100}
				</h4>
			</S.TimerContainer>
		</S.ControllerContainer>
	)
}

export default Controller
