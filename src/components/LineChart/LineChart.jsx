import React, { useEffect, useState} from 'react'
import { Chart } from "react-google-charts";

const LineChart = ({chartData }) => {
    const [data, setData] = useState([["Date", "Prices"]])


    useEffect(()=>{
        let datacopy=[["Date", "Prices"]];
        if(chartData.prices){
            chartData.prices.map((item)=>{
                datacopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`, item[1]])
            })
            setData(datacopy);
        }
    },[chartData])
    return (
        <Chart
            chartType="LineChart"
            data={data}
            height="50vh"
            width={"70vw"}
            leagendToggle
        />
    )
}
export default LineChart
