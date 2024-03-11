export const openCartHeader:React.MouseEventHandler<SVGAElement> = (e:React.MouseEvent) =>{
  
  const classList = e.currentTarget.parentNode as HTMLElement 
  
  if ([...classList.classList].includes('bagIconOpen')) classList.classList.remove('bagIconOpen')
  else classList.classList.add('bagIconOpen')

}