'use client'
import { userStore } from "@/app/store/userStore";
import NoAuth from "./NoAuth";
import Table from "./Table";
import { useState, useEffect } from "react";
import useProducts from "@/hooks/useProducts";

const DashboardProduct = () => {
  const { user } = userStore();
  const [isLogged, setIsLogged] = useState(false);
  const products = useProducts();
  
  useEffect(() => {
    if (user) {
      setIsLogged(true);
    }
  }
  , [user]);
  
  
  
  if (!isLogged) return <NoAuth />;
  return (
    <div className="grid grid-cols-3">
      <div className="col-end-4 flex justify-center py-8">
        <input 
          type="text"
          placeholder="Search product"
          className="input input-bordered w-full max-w-xs" 
        />
      </div>
      <h1 className="font-bold text-xl px-8 ">Products</h1>
      <div className=" col-span-3 p-8">
        <Table 
          data={products || []}
        />
      </div>
    </div>
  );
}

export default DashboardProduct;