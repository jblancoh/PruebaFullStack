'use client'

import { redirect } from "next/navigation"
import { userStore } from "../store/userStore"
import { useEffect } from "react"

const Layout = ({ children }) => {
  const { user } = userStore ()

  useEffect(() => {
    if (user) {
      redirect("/home")
    }
  }, [user])
  
  return (
    <div className="container mx-auto">
      {children}
   </div>
  )
}

export default Layout