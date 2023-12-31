'use client';
import { userStore } from "@/app/store/userStore";
import Chart from "@/components/Chart";
import NoAuth from "@/components/NoAuth";
import { useEffect, useState } from "react";

const Page = () => {
  const [options, setOptions] = useState(null)
  const [series, setSeries] = useState([])
  const [type, setType] = useState('bar')
  const [data, setData] = useState([])
  const [year, setYear] = useState('all')
  const [top, setTop] = useState('10')
  const { user } = userStore();
  const [isLogged, setIsLogged] = useState(false);
  
  useEffect(() => {
    if (user) {
      setIsLogged(true);
    }
  }, [user]);
    
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`/api/trade/usa?${top ? `top=${top}` : ''}${year ? `&year=${year}` : ''}`)
      const data = await res.json()
      setData(data)
    }
    getData()
  }, [year, top])
  
  useEffect(() => {
    if (type === 'bar') {
      setOptions({
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: data.options
        }
      })
      setSeries([
        {
          name: "POPULATION",
          data: data.series
        }
      ])
    } else if (type === 'donut') {
      setOptions({
        chart: {
          id: "donut"
        },
        labels: data.options
      })
      setSeries(data.series)
    }
  }, [data, type])
  
  if (!isLogged) return <NoAuth />;
  
  return (
    <div className="border rounded-lg shadow-lg">
      <h2 className="text-center text-2xl font-bold p-5">Retail Trade USA</h2>
      <h3 className="text-center text-xl font-bold p-5">Total employment by State</h3>
      <div className="grid grid-cols-1 p-10">
        <div className="grid grid-cols-3 mb-8">
          <div className="col-span-1 justify-center">
            <label className="label">
              <span className="label-text">Chart Type</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              value={type}
              onChange={
                (e) => {
                  setType(e.target.value)
                }
              }
            >
              <option value={'bar'}>Bar</option>
              <option value={'donut'}>Donut</option>
            </select>
          </div>
          <div className="col-span-1 justify-center">
            <label className="label">
              <span className="label-text">Year</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              value={year}
              onChange={
                (e) => {
                  setYear(e.target.value)
                }
              }
            >
              <option value={'all'}>All</option>
              <option value={'2014'}>2014</option>
              <option value={'2015'}>2015</option>
              <option value={'2016'}>2016</option>
              <option value={'2017'}>2017</option>
              <option value={'2018'}>2018</option>
              <option value={'2019'}>2019</option>
              <option value={'2020'}>2020</option>
              <option value={'2021'}>2021</option>
            </select>
          </div>
          <div className="col-span-1 justify-center">
            <label className="label">
              <span className="label-text">Chart Type</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              value={top}
              onChange={
                (e) => {
                  setTop(e.target.value)
                }
              }
            >
              <option value={'10'}>Top 10</option>
              <option value={'20'}>Top 20</option>
              <option value={'30'}>Top 30</option>
            </select>
          </div>
        </div>
        <div className="col-span-1 flex justify-center">
          {
            options && (
              <Chart
                options={options}
                series={series}
                type={type}
              />
            ) 
          }
        </div>
      </div>
    </div>
  );
}

export default Page;