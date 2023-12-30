'use client'
import { useEffect, useState } from "react"

async function getData (id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_NEXT}/api/products/${id}`)
  const data = await res.json()
  return data
}

export default function Page({ params }) {
  const [data, setData] = useState({})
  const { id } = params
  useEffect(() => {
    const getProduct = async () => {
      const response = await getData(id)
      setData(response)
    }
    getProduct()
  }, [id])
  
  
  return (
    <div className="border rounded-lg shadow-lg">
      <h2 className="text-center text-2xl font-bold p-5">Product Details</h2>
      <div className="grid grid-cols-3 p-10">
        <div className="col-span-1">
          <label className="font-bold">Name</label>
          {
            data.name ? (
              <p>{data.name}</p>
            )
            : (
              <div className="skeleton h-4 w-40 mb-1"></div>
            )
          }
          <label className="font-bold">Prodcut Number</label>
          {
            data.productNumber ? (
              <p>{data.productNumber}</p>
            )
            : (
              <div className="skeleton h-4 w-40 mb-1"></div>
            )
          }
        </div>
        <div className="col-span-1">
          <label className="font-bold">Color</label>
          {
            data.color || data.color === '' ? (
              <p>{data.color || "N/D"}</p>
            )
            : (
              <div className="skeleton h-4 w-40 mb-1"></div>
            )
          }
          <label className="font-bold">Safety Stock Level</label>
          {
            data.safetyStockLevel ? (
              <p>{data.safetyStockLevel}</p>
            )
            : (
              <div className="skeleton h-4 w-40 mb-1"></div>
            )
          }
        </div>
        <div className="col-span-1">
          <label className="font-bold">List Price</label>
          {
            data.listPrice  || data.listPrice === 0 ? (
              <p>{data.listPrice}</p>
            )
            : (
              <div className="skeleton h-4 w-40 mb-1"></div>
            )
          }
          <label className="font-bold">Standard Cost</label>
          {
            data.standardCost || data.standardCost === 0 ? (
              <p>{data.standardCost}</p>
            )
            : (
              <div className="skeleton h-4 w-40 mb-1"></div>
            )
          }
          <label className="font-bold">Weight</label>
          {
            data.weight || data.weight === null ? (
              <p>{data.weight || 0}</p>
            )
            : (
              <div className="skeleton h-4 w-40 mb-1"></div>
            )
          }
          <label className="font-bold">ModifiedDate</label>
          {
            data.modifiedDate ? (
              <p>{data.modifiedDate}</p>
            )
            : (
              <div className="skeleton h-4 w-40 mb-1"></div>
            )
          }
        </div>
      </div>
    </div>
  )
}