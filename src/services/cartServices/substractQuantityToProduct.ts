import type { propsState } from "@/types"

export const substractQuantityToProduct = ({orderList,productName, setCart,setTotalInvoice}:propsState) => {

  if (+orderList[productName][1] <= 1) return 

  orderList[productName][1]=`${+orderList[productName][1]-1}`
  orderList[productName][3] = `${(+orderList[productName][2]*(+orderList[productName][1])).toFixed(2)}`
  
  const res = (Object.values(orderList).map(e => parseFloat(e[3])).reduce((ac,el)=>ac+el)).toFixed(2)

  setTotalInvoice!(res)
  setCart!({...orderList})

}