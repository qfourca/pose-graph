import Log from "@/log/Log"
import { InputImage, InputMap } from "@mediapipe/pose"
import { useState } from "react"
import Poser from "./Poser"
import PoseResult from "./PoseResult"

const usePose = () => {
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
            setValue({
                result,
                //TODO: time을 계산해서 넣어주기
                time: 0
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