import React, { useContext } from "react";

import FilterSection from "./filterSection";
import ProductFather from "./productsFather";

import { ProductContext } from "@/pages";

export default function ProductsSection(){
  const products = useContext(ProductContext)
  return (
    <section className={`products w-full flex ${products.length>0 ? "h-fit" : "h-screen"}`}>
      <div className="filterSection w-3/12 border-double border-2 rounded border-red-200 ">
        <div className="filterText w-full p-16 sticky top-[5rem]">
          <FilterSection /> 
        </div>
      </div>
      
        <ProductFather />
      </section>
  )
}