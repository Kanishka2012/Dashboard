import React from 'react'
import Chart from "react-apexcharts";
import './Stats.css';

const Stats = (props) => {
    console.log(props.unique_plays);
    console.log(props.total_plays);
    const options = {
        chart: {
          id: "basic-bar",
          toolbar:{
            show: false
          },
          fontFamily:'sans-serif',
          fontWeight:700
        },
        plotOptions:{
          bar:{
            distributed:true
          }
        },
        colors: ['#C4D494','#167D7F'],
        dataLabels:{
          style:{
            fontSize: '15px',
            fontFamily:'sans-serif',
            colors:['black']
          },
          offsetY:4
        },
        grid: {
          show: false
        },
        xaxis: {
          categories: ["Unique_Plays","Total_Plays"],
          labels:{
            style:{
            fontSize:'15px',
            fontWeight:550
          }
        }
          
        },
        responsive:[{
          breakpoint:1301,
          options:{
            dataLabels:{
              style:{
                fontSize: '12px',
              },
              offsetY:3.5
            },
            chart:{
              width:'350'
            }
          }
        },
        {
          breakpoint:1700,
          options:{
            chart:{
              width:'300'
            }
          }
        }
      ]
      }
    const series = [
        {
          name: "Plays",
          data: [props.unique_plays,props.total_plays]
        }
      ]
  return (
    <div className="stats-container">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={options}
              series={series}
              type="bar"
              width="350"
            />
          </div>
        </div>
      </div>
  );
}

export default Stats;
