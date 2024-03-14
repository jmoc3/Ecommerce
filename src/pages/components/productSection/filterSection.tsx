import { ChangeEventHandler, useContext } from "react"
import { CategoriesContext, CategoryOptionsToggleContext } from "@/pages"

let categoryOptions:string[] = []

export default function FilterSection(){
  const categories = useContext<string[]>(CategoriesContext)
  const categoryOptionsHandler = useContext<React.Dispatch<React.SetStateAction<string[]>>|null>(CategoryOptionsToggleContext)
  const checked:ChangeEventHandler<HTMLInputElement> = (e:React.ChangeEvent<HTMLInputElement>) =>{
    const label = e.target as HTMLInputElement 

    if (categoryOptions.length==categories.length) categoryOptions = []
     
    if (label.dataset.value == 'All') categoryOptions = [...categories]
    else categoryOptions = [label.dataset.value!]

    categoryOptionsHandler!(categoryOptions)
    
  }

  return ( 
    <div className="categories flex flex-col gap-5 ">
      <h2 className="text-xl font-bold ">Categories</h2>
        <div className="categoryOptions flex flex-col gap-2">
          {
            categories!.map((category,index)=>(
              <label className="c-options flex w-fit gap-5 text-xs" key={`${index}`}>
                <input type="radio"  name='category-data' data-value={category} onChange={checked} />{category}
              </label>
              ))}
        </div>
    </div>
  )
}