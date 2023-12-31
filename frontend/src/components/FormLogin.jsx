'use client'
import { alertStore } from "@/app/store/alertStore"
import { userStore } from "@/app/store/userStore"
import { redirect } from "next/navigation"
import { useState } from "react"

const FormLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { setError } = alertStore()
  const { setUser } = userStore()
  
  const onSubmit = async () => {
    setIsLoading(true)
    try {
      const url = `${process.env.NEXT_PUBLIC_URL_NEXT}/api/auth`
      const res = await fetch(url,
      {
        method: "POST",
        body: JSON.stringify({
          email,
          password
        })
      })

      const response = await res.json()
      if (response.error) {
        setError({
          message: response.error,
          type: "error"
        })
        return
      }
      setUser(response?.data)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Username</span>
        </div>
        <input 
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Password</span>
        </div>
        <input
          type="password"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <div className="label">
          <span className="label-text-alt"></span>
        </div> */}
      </label>
      <button 
        className="btn btn-primary w-full"
        onClick={onSubmit}
        disabled={isLoading}
      >
      {
        isLoading ?
            <span className="loading loading-spinner text-primary"></span>
          :
            "Login"
      }
      </button>
    </>
  )
}

export default FormLogin
