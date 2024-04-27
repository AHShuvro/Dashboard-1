import { useEffect, useState } from 'react';
import { XAxis, Tooltip, YAxis, BarChart, Bar, Legend, CartesianGrid } from 'recharts';

const BarChartComponent = () => {

    const [chartWidth, setChartWidth] = useState(0);
    const [chartHeight, setChartHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const parentDiv = document.getElementById('parentDiv');
            if (parentDiv) {
                const newWidth = parentDiv.clientWidth;
                const newHeight = parentDiv.clientHeight;
                setChartWidth(newWidth);
                setChartHeight(newHeight);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300
        }
    ]

    return (
        <div id='parentDiv'  style={{ height: `calc(100vh - 100px)` }}>
            <BarChart width={chartWidth} height={chartHeight} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
        </div>
    );
};

export default BarChartComponent;