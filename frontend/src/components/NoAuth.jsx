import Link from "next/link"

const NoAuth = () => {
  return (
    <div className="grid grid-cols-3 gap-4 h-screen">
      <div className="col-span-3 my-auto">
        <div className="p-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Welcome to FullStack Dashboard</h1>
            <p className="text-lg">Please login to continue</p>
          </div>
        </div>
      </div>
      <div className="col-span-3">
        <div className="p-4">
          <div className="text-center">
            <Link href="/login">
              <button className="btn btn-primary" >Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoAuth