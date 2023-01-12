import React, { useEffect, useRef } from 'react'
import * as style from './webcam.style'

const CONSTRAINTS = {
    video: true
}


const App = () => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const startVideo = async () => {
        const webcam = await navigator.mediaDevices.getUserMedia(CONSTRAINTS)
        if (videoRef && videoRef.current && !videoRef.current.srcObject) {
            videoRef.current.srcObject = webcam
        }
    }

    useEffect(() => {
        startVideo()
    }, [])

    return (
        <>
            <style.webcamContainer autoPlay ref={videoRef}/>
        </>
    )
}

export default App