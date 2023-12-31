'use client'
import { userStore } from "@/app/store/userStore";
import NoAuth from "./NoAuth";
import Table from "./Table";
import { useState, useEffect } from "react";
import useProducts from "@/hooks/useProducts";

const DashboardProduct = () => {
  const { user } = userStore();
  const [isLogged, setIsLogged] = useState(false);
  const { products, links, meta, setMeta, setSearch } = useProducts();
  
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
        <div className="items-center flex">
          <h6 className="font-bold text-xl me-4">Search</h6>
          <input 
            type="text"
            placeholder="Type product"
            className="input input-bordered w-full max-w-xs"
            onChange={(event) => {
                if (event.target.value?.length >= 3) {
                  setSearch(event.target.value);
                }
                if (event.target.value?.length === 0) {
                  setSearch('');
                }
              }
            }
          />
        </div>
      </div>
      <h1 className="font-bold text-xl px-8 ">Products</h1>
      <div className=" col-span-3 p-8">
        <Table 
          data={products || []}
        />
      </div>
      <div className="col-span-3 flex justify-center pb-8">
        <div className="join">
          {
            meta?.totalPages && [...Array(meta.totalPages)].map((item, index) => {
              const startRange = meta?.currentPage - 2;
              const endRange = meta?.currentPage + 2;

              if (index + 1 >= startRange && index + 1 <= endRange) {
                return (
                  <button
                    key={`page-${index}`}
                    className={`join-item btn ${meta?.currentPage === index + 1 ? 'btn-active' : ''}`}
                    onClick={() => {
                      setMeta(
                        prevState => ({
                          ...prevState,
                          currentPage: index + 1,
                        })
                      );
                    }}
                  >
                    {index + 1}
                  </button>
                );
              } else if (index + 1 === startRange - 1 || index + 1 === endRange + 1) {
                return (
                  <button className="join-item btn btn-disabled" key={`page-${index}`}>...</button>
                );
              } else {
                return null;
              }
            })
          }
        </div>
      </div>
    </div>
  );
}

export default DashboardProduct;