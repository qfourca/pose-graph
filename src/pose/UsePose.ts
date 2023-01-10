import Log from "@/log/Log"
import { InputImage, InputMap } from "@mediapipe/pose"
import { useContext, useEffect, useState } from "react"
import Poser from "./Poser"
import PoseResult from "./PoseResult"

const usePose = () => {
    // const startTime = performance.now()
    const [startTime, setStartTime] = useState<number>(-1)
    const [poser, setPoser] = useState<Poser>(new Poser())
    const [value, setValue] = useState<Log>({
        result: new PoseResult({
            poseLandmarks: [],
            poseWorldLandmarks: [],
            image: document.createElement("img"),
            segmentationMask: document.createElement("img")
        }),
        time: 0
    })
    const send = (image: InputImage) => {
        poser.sendAsync(image)
        .then((result: PoseResult) => {
            let time
            if(startTime === -1) {
                setStartTime(performance.now())
                time = 0
            }
            setValue({
                result,
                time: time ?? performance.now() - startTime
            })
        })
    }
    return {
        send,
        value,
        poser
    }
}

export default usePose