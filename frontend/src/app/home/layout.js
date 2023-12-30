import NavBar from "@/components/NavBar"

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto">
      <NavBar />
      {children}
   </div>
  )
}

export default Layout