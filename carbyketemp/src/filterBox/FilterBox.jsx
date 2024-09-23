import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { CgSelectO } from "react-icons/cg";
import { FaFilter } from "react-icons/fa";

import { useContext } from 'react';
import { BioContext } from '../context';


import { useNavigate } from 'react-router-dom';


const FilterBox = ({theme}) => {
    
    const navigate = useNavigate();

    const {setFilters} = useContext(BioContext);


    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };



    const [state,setState] = useState(false)
    useEffect(()=>{
        if(theme==="dark"){
            setState(true)
        }
        else{
            setState(false)
        }
    },[theme])
   
  return (
    <div className={` ${state ? 'bg-customRed' : 'bg-gray-300 mb-12'}`}>
    <div class="flex justify-center mb-8">
        <Link to={"/list"} className="bg-yellow-400 text-black  py-2 px-16 rounded mt-5 hover:bg-yellow-500 hover:yellow">
           <span style={{display:"flex", flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
           Filter
           <FaFilter />
           </span>          
        </Link>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 max-w-4xl mx-auto">
        
 
        <select onChange={handleFilterChange} class={`font-sans font-bolder  w-[100%] border border-yellow-400 border-x-2 border-y-2 hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-400' } ${state ? 'bg-customRed' : 'bg-white' }`}>
            <option selected disabled class="font-bold text-dark">Price</option>
            <option>50T-1L</option>
            <option>1L-5L</option>
            <option>5L-10L</option>
            <option>10L-13L</option>
            <option>none</option>
        </select>
     
  <select  onChange={handleFilterChange} class={`font-sans font-bolder  w-full border border-yellow-400 border-x-2 border-y-2 hover:border-x-3.5 hover:border-y-3.5 hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-600' } ${state ? 'bg-customRed' : 'bg-white' }  hover:bg-opacity-900`}>
    <option selected disabled class="font-bold text-dark">Brand </option>
    <option>Mahindra</option>
    <option>TATA</option>
    <option>ROYAL</option>
    <option>YAMASAKI</option>
    <option>none</option>
  </select>
        <select   onChange={handleFilterChange} class={`font-sans font-bolder  w-full border border-yellow-400 border-x-2 border-y-2 hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-600' } ${state ? 'bg-customRed' : 'bg-white' }`}>
            <option selected disabled class="font-bold text-dark">Type-Owner</option>
            <option>Seller</option>
            <option>LocalSeller</option>
            <option>none</option>
        </select>
        <select   onChange={handleFilterChange} class={`font-sans font-bolder  w-full border border-yellow-400 border-x-2 border-y-2 hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-600' } ${state ? 'bg-customRed' : 'bg-white' }`}>
            <option selected disabled class="font-bold text-dark">Year</option>
            <option>2Y-4L</option>
            <option>4L-7L</option>
            <option>7L-10L</option>
            <option>10</option>
            <option>none</option>
        </select>
        <select   onChange={handleFilterChange} class={`font-sans font-bolder  w-full border border-yellow-400 border-x-2 border-y-2 hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-600' } ${state ? 'bg-customRed' : 'bg-white' }`}>
            <option selected disabled class="font-bold text-dark">Performance</option>
            <option>100c-500c</option>
            <option>500c-1500c</option>
            <option>1500c-5000c</option>
            <option>5000c-9000c</option>
            <option>9000c-13000c</option>
            <option>13000c</option>
            <option>none</option>
        </select>
        <select   onChange={handleFilterChange} class={`font-sans font-bolder  w-full border border-yellow-400 border-x-2 border-y-2 hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-600' } ${state ? 'bg-customRed' : 'bg-white' }`}>
            <option selected disabled class="font-bold text-dark">Owner</option>
            <option>FirstOwner</option>
            <option>ScondOwner</option>
            <option>ThirdOwner</option>
            <option>none</option>
        </select>
        <select   onChange={handleFilterChange} class={`font-sans font-bolder  w-full border border-yellow-400 border-x-2 border-y-2 hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-600' } ${state ? 'bg-customRed' : 'bg-white' }`}>
            <option selected disabled class="font-bold text-dark">MilLeag</option>
            <option>50c-1lc</option>
            <option>1lc-5lc</option>
            <option>5lc-10lc</option>
            <option>10lc-13lc</option>
            <option>none</option>
        </select>
        <select   onChange={handleFilterChange} class={`font-sans font-bolder  w-full border border-yellow-400 border-x-2 border-y-2 hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-600' } ${state ? 'bg-customRed' : 'bg-white' }`}>
            <option selected disabled class="font-bold text-dark">Servicing</option>
            <option>No SERVICE</option>
            <option>1T</option>
            <option>2T-5T</option>
            <option>10T</option>
            <option>none</option>
        </select>
    </div>
</div>

  )
}

export default FilterBox
