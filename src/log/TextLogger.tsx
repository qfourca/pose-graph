import PoseResult from "@pose/PoseResult";
import React, { useEffect, useState } from "react";
import LoggerProps from "./LoggerProps";
import * as S from './TextLogger.style'

const TextLogger = (props: LoggerProps) => {
    const [jointList, setJointList] = useState<Array<string>>([])
    useEffect(() => {
        const temp = new Array<string>()
        PoseResult.joints.forEach((v, k) => {
            temp.push(k)
        })
        setJointList(temp)
    }, [])

    return <S.Container>
        <S.ValueContainer>
        {
            jointList.map((joint: string) => {
                const angleValue = Math.round(props.value.result.getJointAngle(joint).getAngle("degree") * 100) / 100
                const colorHexValue = (256 - Math.min(Math.round(angleValue * (64 / 45)), 256)).toString(16).padStart(2, '0')
                return (
                    <S.ResultMemberContainer key={joint}> 
                        <S.JointNameContainer>
                            {
                                joint
                            }
                        </S.JointNameContainer>
                        <S.JointValueContainer style={{ backgroundColor: `#FF${colorHexValue}${colorHexValue}` }}>
                            {
                                angleValue
                            }
                        </S.JointValueContainer>
                    </S.ResultMemberContainer>
                )
            })
        }
        </S.ValueContainer>
    </S.Container>
}

export default TextLogger;