import React, { useContext } from "react";

import FilterSection from "./filterSection";
import ProductFather from "./productsFather";

import { ProductContext } from "@/pages";

export default function ProductsSection(){
  const products = useContext(ProductContext)
  return (
    <section className={`products w-full flex ${products.length>0 ? "h-fit" : "h-screen"}`}>
      <div className="filterSection w-3/12">
        <div className="filterText flex flex-col w-full p-16 gap-8 sticky top-[3.8rem] select-none">
          <FilterSection /> 
        </div>
      </div>
      
        <ProductFather />
      </section>
  )
}