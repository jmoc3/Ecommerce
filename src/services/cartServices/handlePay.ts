import axios from "axios"

export const handlePay:React.MouseEventHandler<HTMLButtonElement> = async(e) =>{

  const products = e.currentTarget.parentNode!.parentElement!.childNodes[3].firstChild?.firstChild?.childNodes

  if (Array.from(products!).length == 0) return 

  const stringProd = Array.from(products!).map((e)=>{
    const div = e as HTMLElement

    const productImg = div.dataset.imgUrl
    const productName = div.firstChild!.firstChild!.textContent
    const quantity = div.lastChild!.childNodes[0].textContent
    const unit_amount = ((+div.lastChild!.childNodes[1].textContent!.substring(1))/(+quantity!))*100
    
    return {price_data:{currency:'usd', product_data:{ name:productName,images:[productImg],}, unit_amount,},quantity}
  })

  axios.post('/api/checkout',stringProd)
  .then( res => window.location = res.data.url)
}