import React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

export const Statistics = ({ data }) => {
  console.log(data)
  return (
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="country" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="price" fill="#8884d8" />
      <Bar dataKey="discounted_price" fill="#82ca9d" />
    </BarChart>
  )
}

export default Statistics
