import { BsArrowLeftCircleFill, BsArrowRightCircleFill, BsTrash3Fill} from 'react-icons/bs'
import { useContext } from 'react'

import { cartContext, setCartContext,setTotalInvoiceContext } from '@/pages'

type ElementCardProps = {
  productName:string,
  quantity:string,
  total:string
}

export default function ElementCard({productName,quantity, total}:ElementCardProps):JSX.Element{

  const setCart = useContext(setCartContext)
  const setTotalInvoice = useContext(setTotalInvoiceContext)
  const orderList = useContext(cartContext)

  const sum = () => {

    if (+orderList[productName][1] > 98) return 

    orderList[productName][1]=`${+orderList[productName][1]+1}`
    orderList[productName][3] = `${(+orderList[productName][2]*(+orderList[productName][1])).toFixed(2)}`
    
    const res = (Object.values(orderList).map(e => parseFloat(e[3])).reduce((ac,el)=>ac+el)).toFixed(2)
    setTotalInvoice!(res)
    setCart!({...orderList})
    
  }
  
  const minus = () => {

    if (+orderList[productName][1] <= 1) return 

    orderList[productName][1]=`${+orderList[productName][1]-1}`
    orderList[productName][3] = `${(+orderList[productName][2]*(+orderList[productName][1])).toFixed(2)}`
    
    const res = (Object.values(orderList).map(e => parseFloat(e[3])).reduce((ac,el)=>ac+el)).toFixed(2)

    setTotalInvoice!(res)
    setCart!({...orderList})

  }
  
  const deleteElement:React.MouseEventHandler<SVGElement> = (e:React.MouseEvent) => {

    delete orderList[productName]
    setCart!({...orderList})
    
    if (Object.keys(orderList).length == 0){setTotalInvoice!('0'); return}

    const res = (Object.values(orderList).map(el => parseFloat(el[3])).reduce((ac,el)=>ac+el)).toFixed(2)
    setTotalInvoice!(res)
    
  }

  return (
    <div className="element flex gap-5 ">
      <div className="bill-left w-9/12 flex  items-center gap-2 ">
        <span className="spancito text-sm line-clamp-1">{productName}</span>
      </div>
      
      <div className="bill-right w-56 flex justify-between items-center  gap-3">
        <div className="quantity flex justify-center items-center gap-1">
          <BsArrowLeftCircleFill onClick={minus} className="text-xs"/>
          <div className="w-4 h-4 p-0 text-black text-xs text-center bg-white rounded">{quantity }</div>
          <BsArrowRightCircleFill onClick={sum} className="text-xs" />
        </div>
        <span className="price text-sm font-bold">{`$${total } `}</span>
        <BsTrash3Fill onClick={deleteElement} className="text-xs"/>
      </div>
    </div>
    )
}  
