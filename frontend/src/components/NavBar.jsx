'use client'
import { userStore } from "@/app/store/userStore"
import { LogoutServcice } from "@/services/authServices"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from "react"

const NavBar = () => {
  const { user } = userStore()
  const [isLogged, setIsLogged] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const isLoginPage = pathname === "/login" ? true : false
  
  const handleLogout = async () => {
    await LogoutServcice(router)
  }
  
  
  
  useEffect(() => {
    if (user) {
      setIsLogged(true)
    }
  }
  , [user])
  
  return (
    <div className="navbar border mb-4 rounded-lg shadow-lg">
      <div className="navbar-start">
        <Link href="/home">
          <button className="btn btn-ghost text-xl">FullStack Dashboard</button>
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1">
          {
            user && (
              <li>
                <details>
                  <summary>Charts</summary>
                  <ul className="p-2">
                    <li>
                      <Link
                        href="/trade/usa"
                      >
                        Retail Trade USA
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
            )
          }
         {
          user?.role === 'admin' &&
            <li>
              <details>
                <summary>Users</summary>
                <ul className="p-2">
                  <li><a>List</a></li>
                  <li><a>Register</a></li>
                </ul>
              </details>
            </li>
          }
          {
            user && (
              <li>
                <Link
                  href="/inegi"
                >
                  INEGI
                </Link>
              </li>
            )
          }
        </ul>
      </div>
      <div className="navbar-end">
        {/* {
          isLogged && (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
              <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">View cart</button>
                  </div>
                </div>
              </div>
            </div>
          )
        } */}
        {
          isLogged ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <button onClick={handleLogout}>
                    <a>Logout</a>
                  </button>
                </li>
              </ul>
            </div>
          ) : !isLoginPage && (
            <Link href="/login">
              <button
                className="btn btn-ghost" 
              >
                Login</button>
            </Link>
          )
        }
      </div>
    </div>
  )
}

export default NavBar