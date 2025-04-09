import React from 'react'
import { Input } from '../ui/input'

interface searchBarProps{
    onSearch:(searchTerm:string)=>void
}

const SearchBar = ({onSearch}:searchBarProps) => {
  return (
    <div className='mb-4 md:w-3/4'>
      <h3 className='font-bold text-lg mb-2'>
        search bar
      </h3>
      <Input 
      placeholder='search news....'
      type='text' 
      onChange={(e)=>onSearch(e.target.value)}
      className='p-2 border rounded-md w-full'></Input>
    </div>
  )
}

export default SearchBar
