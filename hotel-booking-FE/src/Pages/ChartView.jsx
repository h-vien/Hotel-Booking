import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { getDay } from "date-fns";
import React from "react";
import { Line } from "react-chartjs-2";
import { getDayOfBooking } from "../utils/helper";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartView({ stats, month }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Doanh thu tháng ${month} `,
      },
    },
  };
  if (stats?.Days?.length > 0) {
    const data = {
      labels: stats?.Days.map((item) => getDayOfBooking(item.date)),
      datasets: [
        {
          label: "Doanh thu",
          data: stats?.Days.map((item) => item.price),
          borderColor: "#FE843D ",
          backgroundColor: "#FEC38A",
        },
      ],
    };
    return <Line options={options} data={data} />;
  } else return null;
}
