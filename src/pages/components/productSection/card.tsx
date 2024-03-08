import Image from "next/image"
import { BsFillStarFill } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { useContext, useState, useRef, useEffect } from "react";
import {CircularProgress} from "@nextui-org/react";


import { setTotalInvoiceContext, cartContext,setCartContext, InputTextContext,CategoryOptionsContext } from "@/pages";

type CardProps = {
  index: number,
  url: string,
  productName: string,
  category:string,
  description: string,
  price: string,
  rate:string
}


let occ:Record<string,Array<string>> = {}

export default function Card({index,url,productName,category,description,price,rate}:CardProps){
  
  const node = useRef<HTMLImageElement>(null)
  const [newsrc, setSrc] = useState<string>('')

  useEffect(()=>{
    const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting) setSrc(url)
      })
    })

    observer.observe(node.current!)

    return ()=>{
      observer.disconnect()
    }
  },[url])
  
  
  const input = useContext(InputTextContext)
  const categoryOptions = useContext(CategoryOptionsContext)
  
  const cart = useContext(cartContext)
  const setCart = useContext(setCartContext)
  const setTotalInvoice = useContext(setTotalInvoiceContext)

  occ = cart

  const [cardState, setCardState] = useState<boolean>(false)

  const zoom:React.MouseEventHandler<HTMLDivElement> = () => setCardState(!cardState)

  const addToCart:React.MouseEventHandler = (e) => {

    const product = e.currentTarget.parentNode!.parentNode!
    const productName = product.firstChild!.firstChild!.textContent as string
    const quantity = `${occ[productName!]==undefined ? 1 : parseInt(occ[productName!][1])+1}`
    const productPrice = product.lastChild!.firstChild!.textContent!.substring(1) as string

    if (product != null) occ[productName!] = [productName,quantity,productPrice, `${(+productPrice*+quantity).toFixed(2)}` ]

    const res = (Object.values(occ).map(e => parseFloat(e[3])).reduce((ac,el)=>ac+el)).toFixed(2)

    setCart!({...occ})
    setTotalInvoice!(`${res}`)
    console.log(productName)
  }

  return (
    <div className={`card-${index} flex flex-col justify-evenly items-center w-72 ${url ? "h-full" : "h-96"} hover:scale-105  rounded-2xl cursor-pointer ${productName?.toLowerCase().includes(input) ? '' : 'hidden'} ${categoryOptions.includes(category) ? '' : 'hidden'} ${cardState && ''} transition-all ease-in-out duration-[.3s]`} data-value={category}>
      
      <div ref={node} className="img flex py-8 h-1/3 justify-center items-center overflow-hidden select-none" >
        {newsrc ? (

          <Image loader={({ src, width }) => { return src + "?w=" + width }} src={newsrc} width={0} height={0} alt="cardImage" className="w-28 h-32 object-contain" priority={true}/>
          ) : (
            <CircularProgress aria-label="Loading..."/>
          )}
      </div>
      
      <div className={`info flex flex-col gap-10 p-8 ${cardState && 'h-fit'} select-none`}>
        <div className="info flex flex-col gap-5">
          <span className="text-sm font-bold">{productName}</span>
          <p className={`description text-xs  line-clamp-4 ${cardState && ' line-clamp-none '} `}  onClick={zoom}>{description}</p>
        </div>

        <div className="lastRow flex justify-center items-center justify-between">
          <span className="price text-sm font-bold">${price}</span>
          <div className="rate flex items-center gap-1">
            <span className="rate text-xs font-bold">{rate}</span>
            <BsFillStarFill className="text-red-500 text-xs" />
          </div>
          <div onClick={addToCart} className="addshoppingIcon p-[.5rem] bg-red-300 hover:bg-red-400 hover:text-white hover:scale-110 rounded-full transition duration-500 cursor-pointer">
            <BiShoppingBag className="text-sm" />
          </div>
        </div>
      </div>
    </div>
  )
}