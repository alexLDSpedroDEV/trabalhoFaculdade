import React from 'react'
import { FaHamburger } from "react-icons/fa";
import { BiDish, BiSolidDrink } from "react-icons/bi";
import { RiLinksLine } from "react-icons/ri";
import { LuDessert } from "react-icons/lu";
import { IoMdCart } from "react-icons/io";
import Link from 'next/link';


function sideBarMobile() {
    return (
        <div className='md:hidden fixed  sm:w-[80vw] w-[90vw] sm:left-[calc(10vw)] left-[5vw] top-[90%] rounded-xl bg-black'>
            <div className='grid grid-cols-5 justify-center items-center py-5'>
                <Link href={'/hamburguer'} className='w-[70px] flex justify-center cursor-pointer text-yellow sm:text-[30px] text-[22px]'><FaHamburger /></Link>
                <Link href={'/porcoes'} className='w-[70px] flex justify-center cursor-pointer text-yellow sm:text-[30px] text-[22px]'><BiDish /></Link>
                <Link href={'/bebidas'} className='w-[70px] flex justify-center cursor-pointer text-yellow sm:text-[30px] text-[22px]'><BiSolidDrink /></Link>
                <Link href={'/sobremesas'} className='w-[70px] flex justify-center cursor-pointer text-yellow sm:text-[30px] text-[22px]'><LuDessert /></Link>
                <Link href={'/carrinho'} className='w-[70px] flex justify-center cursor-pointer text-yellow sm:text-[30px] text-[22px]'><IoMdCart /></Link>
            </div>
        </div>
    )
}

export default sideBarMobile