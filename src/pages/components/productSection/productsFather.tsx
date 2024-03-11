import { ProductContext } from "@/pages"
import { useContext } from "react"
import ProductCard from "./card"

export default function ProductFather(){
  
  const products = useContext(ProductContext)

  return(
    <div className={`productsFather w-screen ${products.length>0 ? "h-fit" : "h-screen"} px-10 py-12 grid grid-cols-3 gap-10 `}>
        {
          products.map((product,index)=>(
            <ProductCard index={product.id} key={index} url={product.image} productName={product.title} category={product.category} price={product.price} rate={product.rating.rate} description={product.description}/>
            ))
          }
        </div>
  )
}