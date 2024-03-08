import Image from "next/image"
import type { ChangeEventHandler } from "react";
import { ChangeEvent, useContext } from "react";
import { BsFillGridFill  } from "react-icons/bs";
import { BiSolidShoppingBag, BiSolidChevronDown } from "react-icons/bi"

import businessLogo from "/public/Logo.png"
import userLogo from "/public/userIcon.png"

import { totalInvoiceContext, cartContext, setInputTextContext } from "../..";
import ElementCard from "./elementCard";

export default function Header(){

  const setter = useContext(setInputTextContext)
  const texting:ChangeEventHandler<HTMLInputElement> = (e:ChangeEvent<HTMLInputElement>) => setter!(e.target.value)

  const orderList = useContext(cartContext)
  const totalInvoice = useContext(totalInvoiceContext)

  const openCart:React.MouseEventHandler<SVGAElement> = (e:React.MouseEvent) =>{
    
    const classList = e.currentTarget.parentNode as HTMLElement 
    
    if ([...classList.classList].includes('bagIconOpen')) classList.classList.remove('bagIconOpen')
    else classList.classList.add('bagIconOpen')
  
  }

  return (
    <div className="header flex z-50 fixed w-full py-5 px-28 justify-between items-center border-b-2 bg-slate-50">
      <div className="left flex justify-between items-center gap-5">
        <div className="img hover:scale-105 w-56 transition duration-500 cursor-pointer">
          <Image loader={({ src, width }) => { return src + "?w=" + width }} src={businessLogo} width={200} height={0} alt="logoImage"   placeholder="blur"
/>
        </div>
        <div className="menuIcon p-2 bg-red-300 hover:bg-red-400 hover:text-white hover:scale-110 rounded-full transition duration-500 cursor-pointer">
          <BsFillGridFill className="text-lg"/>
        </div>
        <input type="text" onChange={texting} maxLength={20} className="h-8 w-96 p-2 border border-black rounded hover:scale-105 transition duration-500"/>
      </div> 
      <div className="right flex justify-between items-center gap-5 relative">
        <div  className="bagIcon gap-2 w-8 h-8 icon p-[.4rem] bg-red-300 hover:bg-red-400 hover:text-white hover:scale-110 rounded-full transition ease-out duration-500 cursor-pointer relative group">
          <BiSolidShoppingBag onClick={openCart} className="text-lg "/>
          <div className="quantity text-xs rounded-full bg-red-300 w-4 h-4 absolute -top-1 -right-1 flex items-center justify-center group-hover:bg-red-400 transition ease-out duration-500">{Object.keys(orderList).length}</div>
          <div className="bill select-none p-4 h-full overflow-hidden">
            <div className="elements h-4/5 overflow-x-hidden">
              {
                Object.keys(orderList!).map((product,index)=>(
                  <ElementCard key={index} productName={orderList[product][0]} quantity={orderList[product][1]} total={orderList[product][3]} />
                ))
              }
            </div>

            <div className="toPay flex justify-between items-center h-1/5 px-12">
              <span>Pago Total:</span>
              <span>${totalInvoice || 0}</span>
            </div>
          </div>
        </div>
        <div className="img w-12 hover:scale-105 transition duration-500 cursor-pointer">
          <Image loader={({ src, width }) => { return src + "?w=" + width }} src={userLogo} width={40} height={30} alt="userImage" className="w-28 h-auto" />
        </div>
        <div className="greetings flex flex-col -space-y-1 select-none">
          <span className="welcome text-sm text-zinc-500">Hi, Welcome</span>
          <span >Jose Orejarena</span>
        </div>
        <div className="arrowIcon cursor-pointer hover:text-red-400 transition duration-500">
        <BiSolidChevronDown className="text-2xl"/>
        </div>
      </div>
    </div>
  )
}