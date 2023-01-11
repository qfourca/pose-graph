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

const GraphLogger = (props: LoggerProps) => {
    const [leftSliderValue, setLeftSliderValue] = useState(0)
    const [rightSliderValue, setRightSliderValue] = useState(24)

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
            <button onClick={() => setUpdateData(data)}>통계</button>
            <Line data={updateData} options={options}/>
        </div>
    )
}

export default GraphLogger