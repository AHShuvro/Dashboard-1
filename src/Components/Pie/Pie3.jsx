import { useState, useEffect } from 'react';
import { Pie, PieChart } from 'recharts';

const Pie3 = () => {

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


    const data01 = [
        {
            "name": "Group A",
            "value": 400
        },
        {
            "name": "Group B",
            "value": 300
        },
        {
            "name": "Group C",
            "value": 300
        }
    ];
    const data02 = [
        {
            "name": "Group A",
            "value": 2400
        },
        {
            "name": "Group B",
            "value": 4567
        },
        {
            "name": "Group C",
            "value": 1398
        }
    ];






    return (
        <div id='parentDiv' className='w-full h-full'>
            <PieChart width={chartWidth} height={chartHeight}>
                <Pie
                    data={data01}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={50}
                    fill="#8884d8" />

                <Pie
                    data={data02}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#10C469" label />
            </PieChart>
        </div>
    );
};

export default Pie3;