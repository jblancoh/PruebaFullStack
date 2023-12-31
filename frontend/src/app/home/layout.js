import NavBar from "@/components/NavBar"

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto gap-4">
      {children}
   </div>
  )
}

export default Layout