'use client'
import { alertStore } from "@/app/store/alertStore"
import { useEffect, useState } from "react"

const COLORS = {
  success: "alert-success",
  warning: "alert-warning",
  error: "alert-error",
  info: "alert-info"
}

const Toast = () => {
  const [show, setShow] = useState(false)
  const { error } = alertStore ()


  useEffect(() => {
    if (error?.message) {
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 5000)
    }
  }, [error])

  return (
    <>
      {
        show &&
        <div className="toast">
            <div className={`alert ${COLORS[error.type]}`}>
            <span>{error?.message}</span>
          </div>
        </div>
      }
    </>
  )
}

export default Toast