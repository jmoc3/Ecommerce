import React, { useContext } from "react";

import FilterSection from "./filterSection";
import ProductFather from "./productsFather";

import { ProductContext } from "@/pages";

export default function ProductsSection(){
  const products = useContext(ProductContext)
  return (
    <section className={`products w-full flex ${products.length>0 ? "h-fit" : "h-screen"} px-[12.85%]`}>
      <div className="filterSection w-4/12 border-l-2 border-[#16292F] ">
        <div className="filterText w-fit py-24 sticky top-[5rem] left-[16%]">
          <FilterSection /> 
        </div>
      </div>
        <ProductFather />
      </section>
  )
}