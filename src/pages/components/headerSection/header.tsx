import { useContext } from "react";
import { BiSolidShoppingBag } from "react-icons/bi"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Badge} from "@nextui-org/react";

import Image from "next/image"
import businessLogo from "/public/Logo.png"

import { totalInvoiceContext, cartContext } from "../..";
import { handlePay } from "@/services/cartServices/handlePay";

import ElementCard from "./elementCard";

export default function Header(){

  const orderList = useContext(cartContext)
  const totalInvoice = useContext(totalInvoiceContext)

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div className="header flex z-50 fixed w-screen py-5 pl-[16%] pr-[15.3%] justify-between items-center">
      <div className="left flex justify-between items-center gap-5">
        <div className="img hover:scale-105 w-56 transition duration-500 cursor-pointer">
          <Image loader={({ src, width }) => { return src + "?w=" + width }} src={businessLogo} width={100} height={0} alt="logoImage"   placeholder="blur"
/>
        </div>
      </div> 
      <div className="right flex justify-between items-center gap-5">
      <Badge content={Object.keys(orderList).length} className="bg-blue-400 text-sm" >
        <Button  onPress={onOpen}  className="bg-blue-300">
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
                      <ElementCard key={index} productName={orderList[product][0]} quantity={orderList[product][1]} total={orderList[product][3]} image={orderList[product][4]} />
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
                <Button color="primary" onPress={onClose} onClick={handlePay}>
                  Pay
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
          </Badge>
      </div>
    </div>
  )
}