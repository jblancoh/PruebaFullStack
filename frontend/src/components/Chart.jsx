'use client'
import dynamic from 'next/dynamic'
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Chart = ({ options, type, series}) => {
  return <ApexChart
    options={options}
    series={series}
    width="800"
    type={type}
    height={500}
  />
}

export default Chart