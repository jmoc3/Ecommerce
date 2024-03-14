type Product = {
  id:number
  image:string,
  title:string,
  description:string,
  price:string,
  rating:Record<string,string>,
  category:string
}


type CardProps = {
  index: number,
  url: string,
  productName: string,
  category:string,
  description: string,
  price: string,
  rate:string
}

type ElementCardProps = {
  productName:string,
  quantity:string,
  total:string,
  image:string
}

type propsState = {
  orderList:Record<string,Array<string>>,
  productName:string, 
  setCart:React.Dispatch<React.SetStateAction<Record<string,Array<string>>>> | null,
  setTotalInvoice:React.Dispatch<React.SetStateAction<string>> | null
}

type addToCartprops = {
  e:React.MouseEvent<HTMLButtonElement, MouseEvent>,
  occ:Record<string,Array<string>>,
  cart:Record<string,Array<string>>,
  setCart:React.Dispatch<React.SetStateAction<Record<string,Array<string>>>> | null,
  setTotalInvoice:React.Dispatch<React.SetStateAction<string>> | null
}

export type {Product, CardProps, ElementCardProps, propsState, addToCartprops}