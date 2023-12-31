/* eslint-disable */
import axios from "axios";
import React, { useEffect, useState } from "react";
import ApexChart from "../ApexChart";
import LeafletMap from "../LeafletMap";
import Sidebar from "../Sidebar";

const ChartsMaps = () => {
  const [content, setContent] = useState(true);

  const toggle = () => {
    setContent(!content);
  };

  const [cases, setCases] = useState([] as any);
  const [deaths, setDeaths] = useState([] as any);
  const [recovered, setRecovered] = useState([] as any);

  const getData = async () => {
    axios
      .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((response) => {
        let { cases, deaths, recovered } = response.data;

        let casesDataPoints = [] as any;
        let deathsDataPoints = [] as any;
        let recoveredDataPoints = [] as any;

        let date = new Date();

        Object.entries(cases).map((item) => {
          let date = new Date(item[0]);
          casesDataPoints.push([date.getTime(), item[1]]);
        });

        Object.entries(deaths).map((item) => {
          let date = new Date(item[0]);
          deathsDataPoints.push([date.getTime(), item[1]]);
        });

        Object.entries(recovered).map((item) => {
          let date = new Date(item[0]);
          recoveredDataPoints.push([date.getTime(), item[1]]);
        });

        setCases(casesDataPoints);
        setDeaths(deathsDataPoints);
        setRecovered(recoveredDataPoints);

        console.log(casesDataPoints);
        console.log(deathsDataPoints);
        console.log(recoveredDataPoints);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="shadow-md w-full bg-current">
        <div className="md:px-10 py-3 px-7">
          <div className="flex lg:flex-col items-center text-teal-50 text-4xl">
            Charts and Maps
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col">
        <Sidebar />

        <div className="lg:w-[1190px] w-full flex flex-col mt-[5%] items-center mx-[10%] my-0">
          {!content ? ( //When Line Graph is selected
            <div className="flex items-center gap-5">
              <p className="p-4 text-xl text-teal-500 uppercase cursor-pointer font-medium">
                Line Graph
              </p>
              <p
                className="p-4 text-xl text-teal-50 uppercase cursor-pointer font-medium"
                onClick={toggle}
              >
                Leaflet Map
              </p>
            </div>
          ) : (
            //When Leaflet Map is selected
            <div className="flex items-center gap-5">
              <p
                className="p-4 text-xl text-teal-50 uppercase cursor-pointer font-medium"
                onClick={toggle}
              >
                Line Graph
              </p>
              <p className="p-4 text-xl text-teal-500 uppercase ursor-pointer font-medium">
                Leaflet Map
              </p>
            </div>
          )}

          {!content ? (
            <div className="w-full">
              <ApexChart cases={cases} deaths={deaths} recovered={recovered} />
            </div>
          ) : (
            <>
              <LeafletMap />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ChartsMaps;
