import axios from "axios"

export const fetchProductAndCategories = () =>{

  return axios.get("https://fakestoreapi.com/products")
    .then((res)=> res.data)
}