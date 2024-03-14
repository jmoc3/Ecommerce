import type { propsState } from "@/types";

export const deletCarteElement = ({orderList,productName, setCart,setTotalInvoice}:propsState) => {

  delete orderList[productName]
  setCart!({...orderList})
  
  if (Object.keys(orderList).length == 0){setTotalInvoice!('0'); return}

  const res = (Object.values(orderList).map((el:any) => parseFloat(el[3])).reduce((ac,el)=>ac+el)).toFixed(2)
  setTotalInvoice!(res)
  
}