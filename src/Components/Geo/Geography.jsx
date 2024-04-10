import React from 'react';
import { Chart } from 'react-google-charts';

const Geography = () => {
    const data = [
        ['Country', 'Popularity'],
        ['Germany', 200],
        ['United States', 300],
        ['Brazil', 400],
        ['Canada', 500],
        ['France', 600],
        ['RU', 700],
    ];

    return (
        <Chart
            chartType="GeoChart"
            width="100%"
            height="400px"
            data={data}
            options={{
                colorAxis: { colors: ['#00853f', 'black', '#e31b23'] },
                backgroundColor: '#81d4fa',
                datalessRegionColor: '#f8bbd0',
                defaultColor: '#f5f5f5',
            }}
        />
    );
};

export default Geography;
