import { useState, useRef, useEffect } from "react"

export const observerFunction = (url:string) =>{

  const node = useRef<HTMLImageElement>(null)
  const [newsrc, setSrc] = useState<string>('')

  useEffect(()=>{
    const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting) setSrc(url)
      })
    })

    observer.observe(node.current!)

    return ()=>{
      observer.disconnect()
    }
  },[url])
  
  return {newsrc, node}

}