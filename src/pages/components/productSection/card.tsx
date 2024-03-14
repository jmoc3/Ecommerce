import Image from "next/image"
import { BsFillStarFill } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";

import { useContext, useState } from "react";

import {CircularProgress, Divider, CardFooter, Card, Button } from "@nextui-org/react";
import { CardProps } from "@/types";

import { useObserverFunction } from "@/services/observerLogic";
import { addToCart } from "@/services/cartServices/addProductToCart";

import { setTotalInvoiceContext,cartContext,setCartContext, InputTextContext,CategoryOptionsContext } from "@/pages";

let occ:Record<string,Array<string>> = {}

export default function ProductCard({index,url,productName,category,description,price,rate}:CardProps){
  
  const { newsrc, node } = useObserverFunction(url)
  
  const input = useContext(InputTextContext)
  const categoryOptions = useContext(CategoryOptionsContext)
  
  const cart = useContext(cartContext)
  const setCart = useContext(setCartContext)
  const setTotalInvoice = useContext(setTotalInvoiceContext)
  
  const [cardState, setCardState] = useState<boolean>(false)
  const zoom:React.MouseEventHandler<HTMLDivElement> = () => setCardState(!cardState)

  const lowerProductName = productName.toLowerCase()
 
  return (
    <Card isFooterBlurred className={`card-${index} flex flex-col justify-evenly items-center w-72 ${url ? "h-full" : "h-96"} hover:scale-105  rounded-2xl cursor-pointer ${lowerProductName.includes(input) ? '' : 'hidden'} ${categoryOptions.includes(category) ? '' : 'hidden'} ${cardState && ''} transition-all ease-in-out duration-[.3s]`} data-value={category}>
      
      <div ref={node} className="img flex py-8 h-1/3 justify-center items-center overflow-hidden select-none" >
        {newsrc ? (

          <Image loader={({ src, width }) => { return src + "?w=" + width }} src={url} width={0} height={0} alt="cardImage" className="w-28 h-32 object-contain" priority={true}/>
          ) : (
            <CircularProgress aria-label="Loading..."/>
          )}
      </div>
      <div className={`info flex flex-col gap-10 p-8 ${cardState && 'h-fit'} select-none`}>
        <div className="info flex flex-col gap-5">
          <span className="text-sm font-bold">{productName}</span>
          <p className={`description text-xs  line-clamp-4 ${cardState && ' line-clamp-none '} `}  onClick={zoom}>{description}</p>
        </div>

        <Divider/>      

        <CardFooter  className="lastRow flex justify-center items-center shadow-small justify-between " >
          <span className="price text-sm font-bold">${price}</span>
          <div className="rate flex items-center gap-1">
            <span className="rate text-xs font-bold">{rate}</span>
            <BsFillStarFill className="text-blue-500 text-xs" />
          </div>
          <Button onClick={(e)=>addToCart({e,occ,cart, setCart,setTotalInvoice})}  className="addshoppingIcon bg-blue-300 hover:bg-blue-400 hover:text-white hover:scale-110 rounded-full transition duration-500 cursor-pointer" size="sm">
            <BiShoppingBag className="text-sm" />
          </Button>
        </CardFooter >
      </div>
    </Card>
  )
}