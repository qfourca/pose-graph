import { useEffect, useState } from "react"
import Graphic from './graphic/graphic'
import Log from "../../log/Log"
const useThree = (parent: HTMLElement) => {
    const [graphic, setGraphic] = useState<Graphic>()
    useEffect(() => {
        setGraphic(new Graphic(parent))
    }, [parent])
    const send = (log: Log) => {
        if(log.result.poseLandmarks.length == 33 && graphic != undefined) {
            graphic.update(log.result.poseLandmarks)
        }
    }
    return {
        send
    }
}

export default useThree