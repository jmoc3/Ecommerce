import { useState, useEffect } from "react"
import type { Product } from "@/types";
import { fetchProductAndCategories } from "@/services/fetchProd&Cat";
import { animateHeroText } from "@/services/animationHeroText";

export const useFetchContent = () => {

  const [products, setProducts] = useState<Product[]>([]) 
  const [categories, setCategories] = useState<string[]>([]) 
  const [categoryOptions,setCategoriesOption] = useState<string[]>([])
  
  const productsInfo = async():Promise<void> => {
    
    fetchProductAndCategories()
    .then(products =>{

      setProducts(products)
      
      const categories_values:string[] = products.map((product:Product)=> product.category)
      const category:string[] = Array.from(new Set(categories_values))
      setCategories(['All',...category])
      setCategoriesOption([...category])
    
      })
  }

  useEffect(():void=>{
    productsInfo()
    animateHeroText()
  },[])

  return {products,categories,categoryOptions,setCategoriesOption}

}
