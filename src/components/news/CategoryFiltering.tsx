import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

interface SetCategoryProps{
  OnChangeCategory:(category:string)=>void
    
}

const CategoryFiltering = ({OnChangeCategory}:SetCategoryProps) => {
  const categorise =["all","tech","health","business","sports"]
  return (
    <div className='flex items-center gap-2 justify-center mx-4'>
      <h3 className='font-bold text-lg mb-2 flex-shrink-0'>Filter By Category</h3>
      <Select onValueChange={(value)=> OnChangeCategory(value === "all"?"":value)}>
  <SelectTrigger className="w-[180px] capitalize rounded-md">
    <SelectValue placeholder="select category" />
  </SelectTrigger>
  <SelectContent>
    {
      categorise.map((category) =>(  <SelectItem className='capitalize' key={category} value={category}>{category}</SelectItem>))
    }
   
   
  </SelectContent>
</Select>

     
    </div>
  )
}

export default CategoryFiltering
