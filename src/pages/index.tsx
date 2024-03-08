import { Inter } from "next/font/google";
import React, { useEffect, useState, Suspense } from "react";

import Header from "./components/headerSection/header";
import ProductsSection from "./components/productSection/productsSection";
import {Card, Skeleton} from "@nextui-org/react";

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const inter = Inter({ subsets: ["latin"] });

type Product = {
  id:number
  image:string,
  title:string,
  description:string,
  price:string,
  rating:Record<string,string>,
  category:string
}

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

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const [products, setProducts] = useState<Product[]>([]) 
  const [categories, setCategories] = useState<string[]>([]) 
  const [categoryOptions,setCategoriesOption] = useState<string[]>([])
  
  
  const productsInfo = async():Promise<void> => {

    const api = await fetch("https://fakestoreapi.com/products")
    const json = await api.json()
    setProducts(json)
 
    const categories_values:string[] = json.map((product:Product)=> product.category)
    const category:string[] = Array.from(new Set(categories_values))
    setCategories(['All',...category])
    setCategoriesOption([...category])
  }

  useEffect(():void=>{
    productsInfo()

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleWindowResize);

    const spansSlow = document.querySelectorAll<HTMLElement>('.spanSlow');
    const spansFast = document.querySelectorAll<HTMLElement>('.spanFast');

    let width = window.innerWidth;

    function handleMouseMove(e:MouseEvent) {
      let normalizedPosition = e.pageX / (width/2) - 1;
      let speedSlow = 100 * normalizedPosition;
      let speedFast = 200 * normalizedPosition;
      spansSlow.forEach((span) => {
        span.style.transform = `translate(${speedSlow}px)`;
      });
      spansFast.forEach((span) => {
        span.style.transform = `translate(${speedFast}px)`
      })
    }
    
    function handleWindowResize() {
      width = window.innerWidth;
    }

  },[])

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
      
      <main className={`flex w-full flex-col items-center justify-center ${inter.className} overflow-hidden`}>
      
      <div className="hero w-full h-screen relative">

        <Card className="w-[45%] h-[60%] absolute top-[25%] left-[10%] space-y-5 " radius="lg">
          <Suspense fallback={<Skeleton className="rounded-lg h-full"><div className=" rounded-lg bg-default-300"></div></Skeleton>}>
            <Spline scene="https://prod.spline.design/QBK-nwsIL9ibIDGS/scene.splinecode" className="w-inherit h-inherit rounded-lg"  />
          </ Suspense>
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
