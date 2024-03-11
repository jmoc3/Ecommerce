import { Inter } from "next/font/google";
import React, { useState } from "react";
import { useFetchContent } from "@/hooks/useFetchProducts";
import type { Product } from "@/types";

import Header from "./components/headerSection/header";
import ProductsSection from "./components/productSection/productsSection";
import {Card} from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const setInputTextContext = React.createContext<React.Dispatch<React.SetStateAction<string>>|null>(null);
export const InputTextContext = React.createContext<string>('');

export const CategoriesContext = React.createContext<string[]>([])
export const ProductContext = React.createContext<Product[]>([])
export const CategoryOptionsContext = React.createContext<string[]>([])
export const CategoryOptionsToggleContext = React.createContext<React.Dispatch<React.SetStateAction<string[]>>|null>(null)

export const cartContext = React.createContext<Record<string,Array<string>>>({})
export const setCartContext = React.createContext<React.Dispatch<React.SetStateAction<Record<string,Array<string>>>>|null>(null)
export const totalInvoiceContext = React.createContext<string>('')
export const setTotalInvoiceContext = React.createContext<React.Dispatch<React.SetStateAction<string>> | null>(null)


export default function Home():JSX.Element {

  const {products, categories, categoryOptions, setCategoriesOption} = useFetchContent()
  
  const [inputText, setInputText] = useState('')
  const [orderList, setOrderList] = useState<Record<string,Array<string>>>({})
  const [totalInvoice, setTotalInvoce] = useState<string>('')

  return (
    <div className="all w-screen h-fit">
      <ProductContext.Provider value={products}>
        <setCartContext.Provider value={setOrderList}>
          <cartContext.Provider value={orderList}>
            <setTotalInvoiceContext.Provider value={setTotalInvoce} >
              <setInputTextContext.Provider value={setInputText}>
                <totalInvoiceContext.Provider value={totalInvoice} >
                  
                  <Header />

                </totalInvoiceContext.Provider>
              </setInputTextContext.Provider>
      
      <main className={`flex w-full flex-col items-center justify-center ${inter.className}`}>
      
      <div className="hero w-full h-screen relative">

        <Card className="w-[45%] h-[60%] absolute top-[25%] left-[10%] space-y-5 " radius="lg">
          
        </Card>
      
        <div className="texts absolute -right-[20%] top-[45%]	w-inherit pointer-events-none	">
          <div className="line">
            <div className="leftSideHero">
              <div className="contentHero">
                <span className="spanHero spanSlow">buy</span>
              </div>
            </div>
            <div className="rightSideHero">
              <div className="contentHero">
                <span className="spanHero spanSlow ">buy</span>
              </div>
            </div>
          </div>
          <div className="line">
            <div className="leftSideHero">
              <div className="contentHero">
                <span className="spanHero spanSlow">whatever</span>
              </div>
            </div>
            <div className="rightSideHero">
              <div className="contentHero">
                <span className="spanHero spanSlow">whatever</span>
              </div>
            </div>
          </div>
      
          <div className="line">
            <div className="leftSideHero">
              <div className="contentHero">
                <span className="spanHero spanFast">you</span>
              </div>
            </div>
            <div className="rightSideHero">
              <div className="contentHero">
                <span className="spanHero spanFast">you</span>
              </div>
            </div>
          </div>
      
          <div className="line">
            <div className="leftSideHero">
              <div className="contentHero">
                <span className="spanHero spanSlow">want</span>
              </div>
            </div>
            <div className="rightSideHero">
              <div className="contentHero">
                <span className="spanHero spanSlow">want</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <InputTextContext.Provider value={inputText}>
        <CategoriesContext.Provider value={categories}>
          <CategoryOptionsContext.Provider value={categoryOptions}>
            <CategoryOptionsToggleContext.Provider value={setCategoriesOption}>

               <ProductsSection />
                          
            </CategoryOptionsToggleContext.Provider>
          </CategoryOptionsContext.Provider>
        </CategoriesContext.Provider>
      </InputTextContext.Provider>
      
      </main>
            </ setTotalInvoiceContext.Provider >
          </cartContext.Provider>
        </setCartContext.Provider >
      </ProductContext.Provider>
    </div>
  );
}
