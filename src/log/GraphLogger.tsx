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
    'Left Elbow',
    'Right Elbow',
    'Left Shoulder X',
    'Right Shoulder X',
    'Left Shoulder Y',
    'Right Shoulder Y',
    'Left Hip Y',
    'Right Hip Y',
    'Left Hip X',
    'Right Hip X',
    'Left Knee',
    'Right Knee',
    'Left Ankle',
    'Right Ankle',
]

const GraphLogger = (props: LoggerProps) => {
    const [leftSliderValue, setLeftSliderValue] = useState(0)
    const [rightSliderValue, setRightSliderValue] = useState(24)

    const [angleIndicateState, setAngleIndicateState] = useState(Array(positionList.length).fill(0))
    const handleAngleIndicateState = (idx: any, e: any) => {
        let temp = [ ...angleIndicateState ]
        temp[idx] = Number(e)
        setAngleIndicateState(temp)
        sliceUpdateData(data)
    }
    const sliceUpdateData = (e: any) => {
        const datasetTemp = []
        for (let i = 0; i < positionList.length; i++) {
            if (angleIndicateState[i]) {
                datasetTemp.push(e.datasets[i])
            }
        }
        const ret = {datasets: datasetTemp, labels: e.labels}
        // @ts-ignore
        setUpdateData(ret)
        console.log('asd')
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
                    backgroundColor: 'rgb(192, 192, 75)',
                    borderColor: 'rgb(192, 192, 75)',
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
            temp.labels.push(Math.round(props.value.time / 1000))
            temp.datasets.forEach((dataset) => {
                // @ts-ignore
                dataset.data.push(props.value.result.getJointAngle(dataset.label).getAngle("degree"))
            })
            setData(temp)
        }
    }, [props.value])

    return (
        <div>
            <button onClick={() => sliceUpdateData(data)}>통계</button>
            <Line data={updateData} options={options}/>
            <div style={{display: 'flex'}}>
                { positionList.map((element, idx) => {
                    return (
                        <>
                            <input key={idx} type='checkbox' onClick={(e: any) => {handleAngleIndicateState(idx, e.target.checked)}}/>{element}
                        </>
                    )
                }) }
            </div>
        </div>
    )
}

export default GraphLogger