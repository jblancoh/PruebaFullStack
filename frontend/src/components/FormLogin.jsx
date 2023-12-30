'use client'
import { userStore } from "@/app/store/userStore"
import { useState } from "react"

const FormLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { setUser } = userStore()
  
  const onSubmit = async () => {
    setIsLoading(true)
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        body: JSON.stringify({
          email,
          password
        })
      })
      const data = await res.json()
      setUser(data)
    } catch (error) {
      
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
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
              {/* <div className="label">
                <span className="label-text-alt"></span>
              </div> */}
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Password</span>
        </div>
        <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
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