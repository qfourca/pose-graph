import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartData } from 'chart.js';
import { Line } from 'react-chartjs-2'
import * as style from './GraphLogger.style'

import Range from 'rc-slider'
import 'rc-slider/assets/index.css'


import LoggerProps from './LoggerProps';
import PoseResult from '@pose/PoseResult';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const
        },
        title: {
            display: true,
            text: 'Angle Graph'
        }
    },
    // interaction: {
    //     mode: 'index' as const,
    //     intersect: false
    // },
    animation: {
        duration: 0, // general animation time
    }
}

const positionList = [
    'leftElbow',
    'rightElbow',
    'leftShoulderX',
    'rightShoulderX',
    'leftShoulderY',
    'rightShoulderY',
    'leftHipY',
    'rightHipY',
    'leftHipX',
    'rightHipX',
    'leftKnee',
    'rightKnee',
    'leftAnkle',
    'rightAnkle',
]
const positionColorObject = {
    'leftElbow' : 'rgb(128, 128, 0)',
    'rightElbow': 'rgb(0, 128, 128)',
    'leftShoulderX': 'rgb(192, 0, 0)',
    'rightShoulderX': 'rgb(128, 0, 0)',
    'leftShoulderY': 'rgb(0, 0, 192)',
    'rightShoulderY': 'rgb(0, 0, 128)',
    'leftHipY': 'rgb(192, 128, 0)',
    'rightHipY': 'rgb(128, 64, 0)',
    'leftHipX': 'rgb(0, 128, 192)',
    'rightHipX': 'rgb(0, 64, 128)',
    'leftKnee': 'rgb(0, 192, 0)',
    'rightKnee': 'rgb(0, 128, 0)',
    'leftAnkle': 'rgb(192, 0, 192)',
    'rightAnkle': 'rgb(128, 0, 128)',
}

const GraphLogger = (props: LoggerProps) => {
    const [leftSliderValue, setLeftSliderValue] = useState(0)
    const [rightSliderValue, setRightSliderValue] = useState(24)

    const [angleIndicateState, setAngleIndicateState] = useState(Array(positionList.length).fill(0))
    const handleAngleIndicateState = (idx: any, e: any) => {
        let temp = [...angleIndicateState]
        temp[idx] = Number(e)
        setAngleIndicateState(temp)
        sliceUpdateData(data, temp)
    }
    const sliceUpdateData = (e: any, temp: any) => {
        const datasetTemp = []
        for (let i = 0; i < positionList.length; i++) {
            if (temp[i]) {
                datasetTemp.push(e.datasets[i])
            }
        }
        const ret = { datasets: datasetTemp, labels: e.labels }
        // @ts-ignore
        setUpdateData(ret)

    }
    const handleSliderValue = (e: any) => {
        setLeftSliderValue(e[0])
        setRightSliderValue(e[1])
    }
    const [data, setData] = useState({
        labels: [],
        datasets: []
    })
    const [updateData, setUpdateData] = useState({
        labels: [],
        datasets: []
    })
    useEffect(() => {
        if (data.datasets.length === 0) {
            const datasets = new Array()
            PoseResult.joints.forEach((v, k) => {
                datasets.push({
                    label: k,
                    // @ts-ignore
                    backgroundColor: positionColorObject[k],
                    // @ts-ignore
                    borderColor: positionColorObject[k],
                    data: []
                })
            })
            setData({
                labels: [],
                // @ts-ignore
                datasets
            })
        }
        else {
            const temp = { ...data }
            // @ts-ignore
            temp.labels.push(Math.round(props.value.time / 10) / 100)
            temp.datasets.forEach((dataset) => {
                // @ts-ignore
                dataset.data.push(props.value.result.getJointAngle(dataset.label).getAngle("degree"))
            })
            setData(temp)
        }
    }, [props.value])

    return (
        <style.LoggerContainer>
            <button onClick={() => sliceUpdateData(data, angleIndicateState)}>리로드</button>
            <Line data={updateData} options={options} />
            <style.partWrapper>
                {positionList.map((element, idx) => {
                    return (
                        // @ts-ignore
                        <style.partContainer key={idx} isFocus={angleIndicateState[idx]} bkColor={positionColorObject[positionList[idx]]}>
                            <style.partCheckbox type='checkbox' onClick={(e: any) => { handleAngleIndicateState(idx, e.target.checked) }} id={`checkoutbox-${idx}`}/>
                            <style.partText htmlFor={`checkoutbox-${idx}`}>{element}</style.partText>
                        </style.partContainer>
                    )
                })}
            </style.partWrapper>
        </style.LoggerContainer>
    )
}

export default GraphLogger