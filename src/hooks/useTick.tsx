import { useEffect, useState } from "react";

const useTick = (tick: number) => {
    let intervalId: NodeJS.Timer
    const [interval, intervalSetter] = useState(0)
    useEffect(() => {
        intervalId = setInterval(() => {
            intervalSetter(interval + 1)
        }, tick)
        return () => {
            clearInterval(intervalId)
        }
    }, [])
    return interval
}

export default useTick;