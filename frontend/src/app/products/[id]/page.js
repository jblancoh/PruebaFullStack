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
      <h2 className="text-center text-2xl font-bold p-5">Detalles de producto</h2>
      <div className="grid grid-cols-3 p-10">
        <div className="col-span-1">
          <label className="font-bold">Nombre</label>
          {
            data.Name ? (
              <p>{data.Name}</p>
            )
            : (
              <div className="skeleton h-4 w-40 mb-1"></div>
            )
          }
          <label className="font-bold">Número de producto</label>
          {
            data.ProductNumber ? (
              <p>{data.ProductNumber}</p>
            )
            : (
              <div className="skeleton h-4 w-40 mb-1"></div>
            )
          }
        </div>
        <div className="col-span-1">
          <label className="font-bold">Color</label>
          {
            data.Color || data.Color === '' ? (
              <p>{data.Color || "N/D"}</p>
            )
            : (
              <div className="skeleton h-4 w-40 mb-1"></div>
            )
          }
          <label className="font-bold">Nivel de seguridad</label>
          {
            data.SafetyStockLevel ? (
              <p>{data.SafetyStockLevel}</p>
            )
            : (
              <div className="skeleton h-4 w-40 mb-1"></div>
            )
          }
        </div>
        <div className="col-span-1">
          <label className="font-bold">Precio de lista</label>
          {
            data.ListPrice  || data.ListPrice === 0 ? (
              <p>{data.ListPrice}</p>
            )
            : (
              <div className="skeleton h-4 w-40 mb-1"></div>
            )
          }
          <label className="font-bold">Costo estándar</label>
          {
            data.StandardCost || data.StandardCost === 0 ? (
              <p>{data.StandardCost}</p>
            )
            : (
              <div className="skeleton h-4 w-40 mb-1"></div>
            )
          }
          <label className="font-bold">Peso</label>
          {
            data.Weight || data.Weight === null ? (
              <p>{data.Weight || 0}</p>
            )
            : (
              <div className="skeleton h-4 w-40 mb-1"></div>
            )
          }
          <label className="font-bold">Fecha de modificación</label>
          {
            data.ModifiedDate ? (
              <p>{data.ModifiedDate}</p>
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