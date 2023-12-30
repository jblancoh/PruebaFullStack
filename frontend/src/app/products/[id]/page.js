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
          <p>{data?.Name}</p>
          <label className="font-bold">Número de producto</label>
          <p>{data?.ProductNumber}</p>
        </div>
        <div className="col-span-1">
          <label className="font-bold">Color</label>
          <p>{data?.Color || "N/D"}</p>
          <label className="font-bold">Nivel de seguridad</label>
          <p>{data?.SafetyStockLevel}</p>
        </div>
        <div className="col-span-1">
          <label className="font-bold">Precio de lista</label>
          <p>{data?.ListPrice}</p>
          <label className="font-bold">Costo estándar</label>
          <p>{data?.StandardCost}</p>
          <label className="font-bold">Peso</label>
          <p>{data?.Weight || 0}</p>
          <label className="font-bold">Fecha de modificación</label>
          <p>{data?.ModifiedDate}</p>
        </div>
      </div>
    </div>
  )
}