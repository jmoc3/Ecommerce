import { useContext } from "react"
import ProductCard from "./card"
import { ProductContext, setInputTextContext } from "@/pages"

export default function ProductFather(){
  
  const products = useContext(ProductContext)

  const setter = useContext(setInputTextContext)
  const texting:React.ChangeEventHandler<HTMLInputElement> = (e:React.ChangeEvent<HTMLInputElement>) => setter!(e.target.value)
  
  return(
    <div className={`productsFather w-screen ${products.length>0 ? "h-fit" : "h-screen"} px-10  border-double border-l-2 border-[#1E3A3E] border-r-2 border-[#2C484C]`}>
      <div className="welcome flex flex-col gap-6 py-[5rem] px-[1.5rem]">

      <div className="welcomeText">
        <div className="title flex mb-2">
          <h1 className="text-6xl">Welcome to</h1><span className="text-6xl text-blue-800 ml-5 cursive"> Leblonde shop</span>
        </div>
          <span className="text-xl">Something specific you want to find?</span>
      </div>
      <input type="text" onChange={texting} maxLength={20} className="h-8 w-96 p-2 rounded hover:scale-105 transition duration-500 border-2 border-blue-200"/>
      </div>

      <div className="products grid grid-cols-3 gap-10 place-items-center">
        {
          products.map((product,index)=>(
            <ProductCard index={product.id} key={index} url={product.image} productName={product.title} category={product.category} price={product.price} rate={product.rating.rate} description={product.description}/>
            ))
          }
        </div>
          </div>
  )
}