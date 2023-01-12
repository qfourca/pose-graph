import { useEffect, useState } from "react"
import videoHook from './videoHook'

const useVideo: (
	videoELement: HTMLVideoElement
) => [number, (v: number) => number, boolean, (v: boolean) => void] = (videoELement: HTMLVideoElement) => {
	const [currentTime, setCurrentTime] = useState<number>(0)
	const [isStart, setIsStart] = useState<boolean>(false)
	useEffect(() => {
		const lambda = () => {
			requestAnimationFrame(lambda)
			if (currentTime != videoELement.currentTime)
				setCurrentTime(videoELement.currentTime * 1000)
		}
		lambda()
	}, [videoELement])
	useEffect(() => {
		if(isStart) videoELement.play()
		else videoELement.pause()
	}, [isStart])
	return [
		currentTime, 
		(v: number) => (videoELement.currentTime = v / 1000),
		isStart,
		setIsStart
	]
}
export default useVideo