import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as Chartjs,
  ArcElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
} from "chart.js";
import { useState, useEffect } from "react";
import axios from "axios";

Chartjs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  ArcElement
);

const Graphs = () => {
  const [populationData, setPopulationData] = useState([]);

  const convertToMillion = (data) => {
    return data.map((entry) => {
      return {
        Year: entry.Year,
        Population: entry.Population / 1000000,
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
        );
        setPopulationData(convertToMillion(response.data.data));
        console.log("Population data:", response.data.data);
      } catch (error) {
        console.error("Error fetching population data:", error);
      }
    };

    fetchData();
  }, []);

  const data = {
    labels: populationData.map((entry) => entry.Year).reverse(),
    datasets: [
      {
        data: populationData.map((entry) => entry.Population).reverse(),
        backgroundColor: "green",
        borderColor: "green",
        pointBorderColor: "green",
        fill: true,
        tension: 0.4,
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(54, 162, 235, 1)",
      },
    ],
  };

  const options = {
    plugins: { legend: true },
  };

  const dData = {
    datasets: [
      {
        Label: "Transaction",
        data: [300, 270, 200, 230],
        backgroundColor: ["#00c3ff", "#9eff9d", "#1a9a59", "#2bb42a"],
        borderColor: "black",
      },
    ],
  };

  const dOptions = {};

  return (
    <div className="lg:flex lg:space-x-4 space-y-4 lg:space-y-0">
      <div className="h-auto lg:w-1/2">
        <div className="p-6 bg-[#171717] rounded-lg h-full">
          <p className="text-white lg:text-lg xl:text-xl font-medium mb-6">
            Human Population
          </p>
          <hr className="my-4" />
          <Line data={data} options={options}></Line>
          <hr className="my-4" />
          <div className="flex justify-between items-center mt-10">
            <p className="text-white lg:text-lg xl:text-xl font-normal">
              Get in Depth Details
            </p>
            <button className="bg-green-500 text-white px-3 py-1 rounded-md">
              Here
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 flex space-x-4">
        <div className="w-1/2 p-6 bg-[#171717] rounded-lg h-auto">
          <p className="text-white lg:text-base xl:text-xl font-medium text-center">
            Wallet Balance
          </p>
          <hr className="my-4" />
          <div className="h-20 xl:h-32 justify-center flex">
            <Doughnut data={dData} options={dOptions}></Doughnut>
          </div>
          <div className="flex justify-between mt-6">
            <p className="text-[#00c3ff] font-semibold">USDT</p>
            <p className="font-semibold text-white">300.56</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-[#9eff9d] font-semibold">NBST</p>
            <p className="font-semibold text-white">270.72</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-[#1a9a59] font-semibold">EFT</p>
            <p className="font-semibold text-white">203.04</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-[#2bb42a] font-semibold">WET</p>
            <p className="font-semibold text-white">329.75</p>
          </div>
          <hr className="my-4" />
          <div className="justify-center flex text-base">
            <button className="lg:text-sm bg-green-500 text-white px-1 sm:px-3 py-1 rounded-md mt-6">
              Manage Wallet
            </button>
          </div>
        </div>
        <div className="w-1/2 p-6 bg-[#171717] rounded-lg">
          <p className="text-white lg:text-lg xl:text-xl font-medium text-center">
            Recent Posts
          </p>
          <hr className="my-4" />
          <img
            src="https://res.cloudinary.com/dxaovcjmr/image/upload/v1711688042/twitter_xitzky.jpg"
            alt="Twiiter Post"
            className="rounded-lg h-auto w-auto"
          />
          <hr className="my-4" />
          <div className="justify-center flex">
            <button className="bg-green-500 text-white px-1 lg:px-2 xl:px-3 py-1 rounded-md lg:text-base text-sm">
              Follow on X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graphs;
