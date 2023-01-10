import React from 'react'
import { Line } from 'react-chartjs-2'

const data = {
    labels: [1, 2, 3, 4, 5, 6, 7],
    datasets: [
        {
            label: 'A',
            backgroundColor: 'rgb(192, 192, 75)',
            borderColor: 'rgb(192, 192, 75)',
            data: [1, 4, 9, 16, 25, 36, 49]
        },
        {
            label: 'B',
            backgroundColor: 'rgb(75, 192, 192)',
            borderColor: 'rgb(75, 192, 192)',
            data: [1, 8, 27, 64, 125, 216, 343]
        },
    ]
}
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart'
        }
    }
}

const GraphLogger = () => {
    return (
        <div>
            <Line data={data} options={options}/>
        </div>
    )
}

export default GraphLogger