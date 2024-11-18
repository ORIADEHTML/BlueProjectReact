import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className='text-[#A3A3A3] flex justify-between px-36'>
        <div className='flex border-2 items-center w-fit h-10 gap-28 px-5'>
            <input type="text" placeholder='Search' className=''/>
            <CiSearch/>
        </div>
        <div className=''>
            <select name="" id="" className='border-2 pl-5 pr-16 h-10'>
                <option value="">Location</option>
            </select>
        </div>
        <div className=''>
            <select name="" id="" className='border-2 pl-5 pr-16 h-10 '>
                <option value="">Price range</option>
            </select>
        </div>
        <div className=''>
            <select name="" id="" className='border-2 pl-5 pr-16 h-10 '>
                <option value="">Property type</option>
            </select>
        </div>
    </div>
  )
}

export default SearchBar