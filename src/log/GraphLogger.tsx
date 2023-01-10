import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const data = {
    labels: [1, 2, 3, 4, 5, 6, 7],
    datasets: [
        {
            label: 'A',
            backgroundColor: 'rgb(192, 192, 75)',
            borderColor: 'rgb(192, 192, 75)',
            data: [1 ** 2, 2 ** 2, 3 ** 2, 4 ** 2, 5 ** 2, 6 ** 2, 7 ** 2]
        },
        {
            label: 'B',
            backgroundColor: 'rgb(75, 192, 192)',
            borderColor: 'rgb(75, 192, 192)',
            data: [1 ** 3, 2 ** 3, 3 ** 3, 4 ** 3, 5 ** 3, 6 ** 3, 7 ** 3]
        },
        {
            label: 'C',
            backgroundColor: 'rgb(192, 75, 75)',
            borderColor: 'rgb(192, 75, 75)',
            data: [1 ** 4, 2 ** 4, 3 ** 4, 4 ** 4, 5 ** 4, 6 ** 4, 7 ** 4]
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
            text: 'Angle Graph'
        }
    },
    interaction: {
        mode: 'index' as const,
        intersect: false
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