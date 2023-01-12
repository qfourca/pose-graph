import { useEffect, useState } from "react"
import videoHook from './videoHook'

const useVideo: (videoELement: HTMLVideoElement) => videoHook = (videoELement: HTMLVideoElement) => {
    const [currentTime, setCurrentTime] = useState<number>(0)
    const [isPaused, setIsPaused] = useState<boolean>(true)
    useEffect(() => {
        videoELement.currentTime = currentTime
    }, [currentTime])
    useEffect(() => {
        if(isPaused) videoELement.pause()
        else videoELement.play()
    }, [isPaused])
    return {
        currentTime, 
        setCurrentTime, 
        isPaused, 
        setIsPaused, 
        rawElement: videoELement
    }
}
export default useVideo