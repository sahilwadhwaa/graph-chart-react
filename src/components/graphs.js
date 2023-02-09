import React from 'react';
import { useState, useEffect } from 'react';
import Chart from "react-apexcharts";
import "./styles.css"

const MyGraphs = () => {
    const [averageTemp, setAverageTemp] = useState([]);
    const [date, setDate] = useState([]);

    useEffect(() => {
        const getData = async () => {
        const url = 'http://localhost:8000/temperature';
        try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        //fetching the values for our x-axis and y-axis
        setAverageTemp(data?.map((item) => item.average_temp));
        setDate(data?.map((item) => item.date));
        } catch (error) {
            console.log(error);
        }
    };
        getData();
    }, []);
    const series = [ //data on the y-axis
        {
        name: "Temperature in Celsius",
        data: averageTemp
        }
    ];
    const options = { //data on the x-axis
    chart: { id: 'bar-chart'},
    xaxis: {
        categories: date
    }
    };

  return (
    <div className='graphs'>
    {/*bar graph*/}
      <Chart
        options={options}
        series={series}
        type="bar"
        width="450"
      />

      {/*line graph*/}
      <Chart
        options={options}
        series={series}
        type="line"
        width="450"
        />
    </div>
  )
}

export default MyGraphs;