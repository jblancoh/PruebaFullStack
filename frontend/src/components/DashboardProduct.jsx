'use client'
import { userStore } from "@/app/store/userStore";
import NoAuth from "./NoAuth";
import Table from "./Table";
import { useState, useEffect } from "react";

const DashboardProduct = () => {
  const { user } = userStore();
  const [isLogged, setIsLogged] = useState(false);
  
  useEffect(() => {
    if (user) {
      setIsLogged(true);
    }
  }
  , [user]);
  
  if (!isLogged) return <NoAuth />;
  return (
    <div className="grid grid-cols-3">
      <div className="col-end-4 flex justify-center p-10">
        <input 
          type="text"
          placeholder="Search product"
          className="input input-bordered w-full max-w-xs" 
        />
      </div>
      <div className=" col-span-3 p-8">
        
        <h1>Products</h1>
        <Table 
          data={[]}
        />
      </div>
    </div>
  );
}

export default DashboardProduct;