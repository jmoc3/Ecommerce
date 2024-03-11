import type { ChangeEventHandler } from "react";
import { ChangeEvent, useContext } from "react";
import { BsFillGridFill  } from "react-icons/bs";
import { BiSolidShoppingBag, BiSolidChevronDown } from "react-icons/bi"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Badge} from "@nextui-org/react";


import Image from "next/image"


import businessLogo from "/public/Logo.png"
import userLogo from "/public/userIcon.png"

import { totalInvoiceContext, cartContext, setInputTextContext } from "../..";
import ElementCard from "./elementCard";

export default function Header(){

  const setter = useContext(setInputTextContext)
  const texting:ChangeEventHandler<HTMLInputElement> = (e:ChangeEvent<HTMLInputElement>) => setter!(e.target.value)

  const orderList = useContext(cartContext)
  const totalInvoice = useContext(totalInvoiceContext)

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

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
      <Badge content={Object.keys(orderList).length} className="bg-blue-200 text-sm" >
        <Button  onPress={onOpen}  className="bg-red-300">
          <BiSolidShoppingBag  className="text-lg "/>
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="max-h-96">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Shopping Cart</ModalHeader>
              <ModalBody>
              <div className="bill select-none p-4 h-full overflow-hidden">
                <div className="elements flex flex-col gap-2 overflow-x-hidden">
                  {
                    Object.keys(orderList!).map((product,index)=>(
                      <ElementCard key={index} productName={orderList[product][0]} quantity={orderList[product][1]} total={orderList  [product][3]} />
                      ))
                    }
                </div>
              </div>
          
              </ModalBody>
              <ModalFooter className="justify-evenly">
                
              <div className="toPay flex items-center gap-3">
                <span>Pago Total:</span>
                <span>${totalInvoice || 0}</span>
              </div>
                <Button color="primary" onPress={onClose}>
                  Pay
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
          </Badge>
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