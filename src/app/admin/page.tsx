"use client"

import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";


export default function Page() {

  const thistate = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  }

  const donutlist = {
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  }

  return (
    <>
      <h1 className="text-6xl">หน้าหลักแอดมิน</h1>



      <div className="grid grid-cols-12 mt-8 gap-x-12">

        <div className="col-span-6">
          <p className="text-[28px] mb-3">ยอดการจองทั้งหมดในวันนี้ ตามช่วงเวลา</p>

          <div className="bg-white rounded-lg">

            <Chart
              options={thistate.options}
              series={thistate.series}
              type="bar"
              width="500"
            />
          </div>
        </div>

        <div className="col-span-6">
          <p className="text-[28px] mb-3">ยอดการจองแยกแต่ละร้าน</p>

          <div className="bg-white rounded-lg">


            <Chart
              options={donutlist.options}
              series={donutlist.series}
              type="pie"
              width="500"
            />
          </div>

        </div>
      </div>
    </>
  )
}
