import { Inter } from "next/font/google";
import React, { useState } from "react";
import { useFetchContent } from "@/hooks/useFetchProducts";
import type { Product } from "@/types";
import Head from "next/head";
import Header from "./components/headerSection/header";
import ProductsSection from "./components/productSection/productsSection";

import heroImg from "/public/images/heroImg.jpg"
import HeroSlide from "./components/heroSection/slider";
import HeroText from "./components/heroSection/heroText";


import Image from "next/image";
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
      <Head><title>LeBlonde Shop</title></Head>
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
      
        <div className="hero w-full relative bg-center select-none flex justify-center overflow-hidden" style={{backgroundImage:`url(${heroImg.src})`}}>  
          <Image loader={({ src, width }) => { return src + "?w=" + width }} src={heroImg.src} width={0} height={0} alt="cardImage" className="heroImage w-[74.3%] h-screen select-none" priority={true}/>    
          <HeroSlide />
          <HeroText />
        </div>
    
        <setInputTextContext.Provider value={setInputText}>
          <InputTextContext.Provider value={inputText}>
            <CategoriesContext.Provider value={categories}>
              <CategoryOptionsContext.Provider value={categoryOptions}>
                <CategoryOptionsToggleContext.Provider value={setCategoriesOption}>
    
                   <ProductsSection />
                            
                </CategoryOptionsToggleContext.Provider>
              </CategoryOptionsContext.Provider>
            </CategoriesContext.Provider>
          </InputTextContext.Provider>
        </setInputTextContext.Provider>
      
      </main>
            </ setTotalInvoiceContext.Provider >
          </cartContext.Provider>
        </setCartContext.Provider >
      </ProductContext.Provider>
    </div>
  );
}
