import { addToCartprops } from "@/types"

export const addToCart = ({e,occ, cart,setCart,setTotalInvoice}:addToCartprops) => {
  
  occ = cart
  const element = e.currentTarget! as HTMLElement
  const product = element.parentNode!.parentNode!
  
  const productImage = product.parentNode!.firstChild!.firstChild! as HTMLImageElement
  const productName = product.firstChild!.firstChild!.textContent as string
  const quantity = `${occ[productName!]==undefined ? 1 : parseInt(occ[productName!][1])+1}`
  const productPrice = product.lastChild!.firstChild!.textContent!.substring(1) as string
  if (product != null) occ[productName!] = [productName,quantity,productPrice, `${(+productPrice*+quantity).toFixed(2)}`, productImage.src ]

  const res = (Object.values(occ).map(e => parseFloat(e[3])).reduce((ac,el)=>ac+el)).toFixed(2)
  
  setCart!({...occ})
  setTotalInvoice!(`${res}`)
  
}