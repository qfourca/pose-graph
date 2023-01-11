import React, { useEffect } from "react";
import { useRef } from "react";
import useThree from '@hooks/useThree'
import LoggerProps from './LoggerProps'

const ThreeLogger = (props: LoggerProps) => {
    const containerRef = useRef<HTMLDivElement>(document.createElement("div"))
    const {send} = useThree(containerRef.current)
    useEffect(() => {
        send(props.value)
    }, [props.value])
    return <div ref={containerRef} style={{height: '100%'}}>

    </div>
}

export default ThreeLogger;