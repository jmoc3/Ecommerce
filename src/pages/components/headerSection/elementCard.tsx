import { BsArrowLeftCircleFill, BsArrowRightCircleFill, BsTrash3Fill} from 'react-icons/bs'
import { useContext } from 'react'

import { cartContext, setCartContext,setTotalInvoiceContext } from '@/pages'
import { addQuantityToProduct } from '@/services/cartServices/addQuantityToProduct'
import { substractQuantityToProduct } from '@/services/cartServices/substractQuantityToProduct'
import { deletCarteElement } from '@/services/cartServices/deleteCartElement'
import type { ElementCardProps } from '@/types'

export default function ElementCard({productName,quantity, total, image}:ElementCardProps):JSX.Element{

  const setCart = useContext(setCartContext)
  const setTotalInvoice = useContext(setTotalInvoiceContext)
  const orderList = useContext(cartContext)

  return (
    <div className="element flex gap-5 " data-img-url={image}>
      <div className="bill-left w-9/12 flex  items-center gap-2 ">
        <span className="spancito text-sm line-clamp-1">{productName}</span>
      </div>
      
      <div className="bill-right w-56 flex justify-between items-center  gap-3">
        <div className="quantity flex justify-center items-center gap-1">
          <BsArrowLeftCircleFill onClick={()=>substractQuantityToProduct({orderList,productName, setCart,setTotalInvoice})} className="text-xs cursor-pointer"/>
          <div className="w-4 h-4 p-0 text-black text-xs text-center bg-white rounded">{quantity }</div>
          <BsArrowRightCircleFill onClick={()=>addQuantityToProduct({orderList,productName, setCart,setTotalInvoice})} className="text-xs cursor-pointer" />
        </div>
        <span className="price text-sm font-bold">{`$${total } `}</span>
        <BsTrash3Fill onClick={()=>deletCarteElement({orderList,productName, setCart,setTotalInvoice})} className="text-xs cursor-pointer"/>
      </div>
    </div>
    )
}  
