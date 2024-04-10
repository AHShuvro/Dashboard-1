import { useEffect, useState } from 'react';
import { XAxis, Tooltip, YAxis, BarChart, Bar } from 'recharts';

const Bar1 = () => {

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
            "day": "05-01",
            "temperature": [
                -1,
                10
            ]
        },
        {
            "day": "05-02",
            "temperature": [
                2,
                15
            ]
        },
        {
            "day": "05-03",
            "temperature": [
                3,
                12
            ]
        },
        {
            "day": "05-04",
            "temperature": [
                4,
                12
            ]
        },
        {
            "day": "05-05",
            "temperature": [
                12,
                16
            ]
        },
        {
            "day": "05-06",
            "temperature": [
                5,
                16
            ]
        },
        {
            "day": "05-07",
            "temperature": [
                3,
                12
            ]
        },
        {
            "day": "05-08",
            "temperature": [
                0,
                8
            ]
        },
        {
            "day": "05-09",
            "temperature": [
                -3,
                5
            ]
        }
    ]

    return (
        <div id='parentDiv' className='w-full h-full'>
            <BarChart
                width={chartWidth}
                height={chartHeight}
                data={data}
                margin={{ top: 20, right: 20, bottom: 20, left: 5 }}
            >
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="temperature" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Bar1;