"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

import logo from '@/../../image/logotipo.png'
import Link from 'next/link';



function sideBar() {

    
    return (
        <div className='bg-black w-[25vw] col-span-1 '>
            <div className='grid grid-cols-2 w-screen'>
                <div className='w-[25vw] max-w-[500px] h-[auto]  grid grid-cols-1 grid-row-2'>
                    <div className=' h-[100vh]'>
                        {/* div da logo */}
                        <div className='h-[35vh] grid justify-center items-center '>
                            <Image src={logo} alt='' height={200}/>
                        </div>
                        {/* div do menu lateral */}
                        <div className='w-[100%] h-[65vh] m-auto grid justify-center items-center'>
                            <div className='  bg-white w-[22vw] h-[90%] rounded-2xl grid grid-rows-5 p-3'>
                                <Link href={'/hamburguer'} className='w-[100%] bg-red-200 flex justify-center items-center hover:bg-red-700 cursor-pointer rounded-md mb-3'>
                                    <h1  className=' text-black font-semibold text-xl'>Lanches</h1>
                                </Link>
                                <Link href={'/porcoes'} className='w-[100%] bg-red-200 flex justify-center items-center hover:bg-red-700 cursor-pointer rounded-md mb-3'>
                                    <h1  className=' text-black font-semibold text-xl'>Porções</h1>
                                </Link>
                                <Link  href={'/bebidas'} className='w-[100%] bg-red-200 flex justify-center items-center hover:bg-red-700 cursor-pointer rounded-md mb-3'>
                                    <h1 className=' text-black font-semibold text-xl'>Bebidas</h1>
                                </Link>
                                <Link  href={'/sobremesas'} className='w-[100%] bg-red-200 flex justify-center items-center hover:bg-red-700 cursor-pointer rounded-md mb-3'>
                                    <h1 className=' text-black font-semibold text-xl'>Sobremesa</h1>
                                </Link>
                                <Link  href={'/hamburguer'} className='w-[100%] bg-red-200 flex justify-center items-center hover:bg-red-700 cursor-pointer rounded-md'>
                                    <h1  className=' text-black font-semibold text-xl'>Seu Pedido</h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default sideBar