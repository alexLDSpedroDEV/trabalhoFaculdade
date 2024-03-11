"use client"
import NavBar from '@/components/NavBar'
import React, { useEffect, useState } from 'react'
import FoodItens from '../../components/foods'
import Image from 'next/image';
import sobremesa1 from '@/../../image/sobremesa1.png'
import SideBar from '@/components/sideBar';
import Link from 'next/link';

import { dados } from '@/components/carrinhoProduts';

function Page() {
    const [quantidades, setQuantidades] = useState<number[]>(Array(dados.length).fill(1));

    const incrementarQuantidade = (index: number) => {
        const newQuantidades = [...quantidades];
        newQuantidades[index] += 1;
        setQuantidades(newQuantidades);
    }

    const decrementarQuantidade = (index: number) => {
        const newQuantidades = [...quantidades];
        if (newQuantidades[index] > 1) {
            newQuantidades[index] -= 1;
            setQuantidades(newQuantidades);
        }
    }

    return (
        <div className='bg-black'>
            <div className='grid grid-cols-4 col-1-[25vw] '>
                <SideBar />
                <div className='w-[auto] p-4'>
                    <div className={`bg-white grid grid-cols-1 grid-row-auto  w-[72vw] h-[100%] justify-center rounded-xl items-center`}>
                        <div className='grid justify-center items-center text-center p-2'>
                            <h1 className='border-2 border-red-700 w-[200px] rounded-[50vw] text-black font-semibold text-xl p-3'>Seu Pedido</h1>
                        </div>

                        {
                            dados.map((item: any, index: number) => (
                                <div key={index} className=' hover:cursor-pointer grid justify-center items-center xl:w-[97%] sm:w-[97%] sm:m-3 w-[97%]  h-[18vh] p-0 rounded-xl hover:bg-yellow '>
                                    <div className='grid grid-cols-4 gap-7'>
                                        <div>
                                            <Image src={item.image} alt="Food" width={120} height={120} />
                                        </div>
                                        <div className='grid justify-center items-center' >
                                            <h3 className=' text-xl font-bold'>{item.name}</h3>
                                        </div>
                                        <div className='grid justify-center items-center'>
                                            <h1 className=' text-xl font-bold'>$ {item.value}</h1>
                                        </div>
                                        <div className='grid grid-cols-3 justify-center items-center gap-3'>
                                            <div className=' bg-black text-yellow text-center grid justify-center rounded-xl' onClick={() => decrementarQuantidade(index)}>-</div>
                                            <div className=' bg-black text-yellow text-center grid justify-center rounded-xl w-[45px]'>{quantidades[index]}</div>
                                            <div className=' bg-black text-yellow text-center grid justify-center rounded-xl' onClick={() => incrementarQuantidade(index)}>+</div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;
