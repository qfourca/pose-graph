import PoseResult from "@pose/PoseResult";
import React from "react";
import LoggerProps from "./LoggerProps";

const TextLogger = (props: LoggerProps) => {
    return <div>
        {
            props.value.result.getJointAngle(PoseResult.LEFT_KNEE).getAngle("degree")
        }
    </div>
}

export default TextLogger;