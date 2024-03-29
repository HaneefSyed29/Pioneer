import React from "react";
import { CircleAlert } from "lucide-react";
import { useState, useEffect } from "react";

const Cards = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    const data = await response.json();
    setdata(data.bpi);
    console.log(data.bpi);
  };

  return (
    <>
      <div className="flex justify-between text-lg text-slate-200 w-auto">
        <p className="text-xl">Assets</p>
        <p>Today</p>
      </div>
      <div className="sm:flex sm:space-x-4 overflow-x-scroll sm:space-y-0 space-y-4">
        <div className="sm:w-1/4 w-auto">
          <div className="bg-[#171717] rounded-2xl h-auto w-auto py-4 px-4">
            <div className="space-y-4">
              <div className="flex space-x-2 items-center justify-start">
                <img
                  className="h-14 w-14"
                  src="https://res.cloudinary.com/dxaovcjmr/image/upload/v1711706874/bitcoin_txywky.png"
                  alt="Error"
                />
                <p className="md:text-lg text-white font-semibold text-base">
                  BPI
                </p>
              </div>
              <p className="text-gray-400 text-wrap">Bitcoin</p>
              <div className="flex justify-between items-center space-x-4">
                <p className="lg:text-2xl font-semibold text-white md:text-xl text-base">
                  {Object.keys(data).map((key) => {
                    return (
                      <div
                        className="flex sm:block justify-between mb-4"
                        key={key}
                      >
                        <div className="text-lg">{data[key].rate}</div>
                        <div className="text-base font-normal sm:ml-0 ml-3">
                          {data[key].code}
                        </div>
                      </div>
                    );
                  })}
                </p>
              </div>
            </div>
            <div className="flex mt-7 items-center justify-between">
              <CircleAlert size={28} stroke="green" />
              <button className="bg-green-500 text-white px-3 py-1 rounded-md">
                Trade
              </button>
            </div>
          </div>
        </div>
        <div className="sm:w-1/4 w-auto">
          <div className="bg-[#171717] rounded-2xl h-auto w-auto py-4 px-4">
            <div className="space-y-4">
              <div className="flex space-x-2 items-center justify-start">
                <img
                  className="h-14 w-14"
                  src="https://res.cloudinary.com/dxaovcjmr/image/upload/v1711706874/bitcoin_txywky.png"
                  alt="Error"
                />
                <p className="md:text-lg text-white font-semibold text-base">
                  BPI
                </p>
              </div>
              <p className="text-gray-400 text-wrap">Bitcoin</p>
              <div className="flex justify-between items-center space-x-4">
                <p className="lg:text-2xl font-semibold text-white md:text-xl text-base">
                  {Object.keys(data).map((key) => {
                    return (
                      <div
                        className="flex sm:block justify-between mb-4"
                        key={key}
                      >
                        <div className="text-lg">{data[key].rate}</div>
                        <div className="text-base font-normal sm:ml-0 ml-3">
                          {data[key].code}
                        </div>
                      </div>
                    );
                  })}
                </p>
              </div>
            </div>
            <div className="flex mt-7 items-center justify-between">
              <CircleAlert size={28} stroke="green" />
              <button className="bg-green-500 text-white px-3 py-1 rounded-md">
                Trade
              </button>
            </div>
          </div>
        </div>
        <div className="sm:w-1/4 w-auto">
          <div className="bg-[#171717] rounded-2xl h-auto w-auto py-4 px-4">
            <div className="space-y-4">
              <div className="flex space-x-2 items-center justify-start">
                <img
                  className="h-14 w-14"
                  src="https://res.cloudinary.com/dxaovcjmr/image/upload/v1711706874/bitcoin_txywky.png"
                  alt="Error"
                />
                <p className="md:text-lg text-white font-semibold text-base">
                  BPI
                </p>
              </div>
              <p className="text-gray-400 text-wrap">Bitcoin</p>
              <div className="flex justify-between items-center space-x-4">
                <p className="lg:text-2xl font-semibold text-white md:text-xl text-base">
                  {Object.keys(data).map((key) => {
                    return (
                      <div
                        className="flex sm:block justify-between mb-4"
                        key={key}
                      >
                        <div className="text-lg">{data[key].rate}</div>
                        <div className="text-base font-normal sm:ml-0 ml-3">
                          {data[key].code}
                        </div>
                      </div>
                    );
                  })}
                </p>
              </div>
            </div>
            <div className="flex mt-7 items-center justify-between">
              <CircleAlert size={28} stroke="green" />
              <button className="bg-green-500 text-white px-3 py-1 rounded-md">
                Trade
              </button>
            </div>
          </div>
        </div>
        <div className="sm:w-1/4 w-auto">
          <div className="bg-[#171717] rounded-2xl h-auto w-auto py-4 px-4">
            <div className="space-y-4">
              <div className="flex space-x-2 items-center justify-start">
                <img
                  className="h-14 w-14"
                  src="https://res.cloudinary.com/dxaovcjmr/image/upload/v1711706874/bitcoin_txywky.png"
                  alt="Error"
                />
                <p className="md:text-lg text-white font-semibold text-base">
                  BPI
                </p>
              </div>
              <p className="text-gray-400 text-wrap">Bitcoin</p>
              <div className="flex justify-between items-center space-x-4">
                <p className="lg:text-2xl font-semibold text-white md:text-xl text-base">
                  {Object.keys(data).map((key) => {
                    return (
                      <div
                        className="flex sm:block justify-between mb-4"
                        key={key}
                      >
                        <div className="text-lg">{data[key].rate}</div>
                        <div className="text-base font-normal sm:ml-0 ml-3">
                          {data[key].code}
                        </div>
                      </div>
                    );
                  })}
                </p>
              </div>
            </div>
            <div className="flex mt-7 items-center justify-between">
              <CircleAlert size={28} stroke="green" />
              <button className="bg-green-500 text-white px-3 py-1 rounded-md">
                Trade
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
