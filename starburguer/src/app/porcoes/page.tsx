"use client"
import React, { useEffect, useState } from 'react'
import FoodItens from '../../components/foods'
import Image from 'next/image';
import porcoes1 from '@/../../image/porcoes1.png'


import SideBar from '@/components/sideBar';


function page() {


    return (
        <div className='bg-black'>
            <div className='grid grid-cols-4 col-1-[25vw] '>
                <SideBar />
                <div className='w-[auto] p-4'>
                    <div className={` bg-white grid grid-cols-3 col-span-3  w-[72vw] h-[100%] justify-center rounded-xl items-center`}>
                        {

                            FoodItens.map((item: any, index: number) => (
                                <div key={index} className='hover:cursor-pointer grid justify-center items-center xl:w-[20vw] sm:w-[20vw] sm:m-3 w-[90vw]  h-[50vh] p-0 rounded-xl hover:bg-yellow '>
                                    
                                    <Image className='m-auto ' src={porcoes1} alt={item.name} width={200} height={200} />
                                    <div className='mt-1 grid grid-cols-2 justify-between items-center align-middle text-black'>
                                        <h2 className='sm:text-[25px] font-bold text-[30px] p-4'>{item.name}</h2>
                                        <h2 className='text-end  text-[25px] font-bold sm:text-[18px]'>$ {item.value}</h2>
                                    </div>
                                    {/* <p>{item.text}</p> */}
                                    <button className='text-center rounded-md p-4 bg-black sm:p-2 text-yellow sm:text-[12px]'>ADD TO CART</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page