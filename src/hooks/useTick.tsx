import { useEffect, useState } from "react";

const useTick = (tick: number) => {
    let intervalId: NodeJS.Timer
    const [counter, setCounter] = useState(0)
    let varCounter = 0
    useEffect(() => {
        intervalId = setInterval(() => {
            varCounter++
            setCounter(varCounter)
        }, tick)
        return () => {
            clearInterval(intervalId)
        }
    }, [])
    return counter
}

export default useTick;