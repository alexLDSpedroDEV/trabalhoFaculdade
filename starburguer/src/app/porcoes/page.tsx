"use client"
import NavBar from '@/components/NavBar'
import React, { useEffect, useState } from 'react'
import FoodItens from '../../components/foods'
import Image from 'next/image';
import porcoes1 from './/../../../image/porcoes1.png'
import SideBar from '@/components/sideBar';
import SideBarMobile from '@/components/sideBarMobile';
import Swal from 'sweetalert2';
import { CarrinhoProdutos } from '@/components/carrinhoProduts';

function page() {

    const enviarPedido = (props: any) => {
        CarrinhoProdutos.addNewFoods(props)
        Swal.fire({
            title: 'Produto Adicionado ao Carrinho',
            text: 'O produto foi adicionado ao carrinho com sucesso!',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    }


    return (
        <div className='bg-black'>
            <div className='grid grid-cols-4 gap-20 lg:col-1-[25vw] col-1-[35vw] '>
                <SideBar />
                <SideBarMobile />

                <div className='w-[auto] p-4 hidden md:block'>
                    <div className={` bg-white grid lg:grid-cols-3 grid-cols-2 lg:col-span-3  lg:w-[72vw] w-[68vw] h-[100%] justify-center rounded-xl items-center`}>
                        {

                            FoodItens.map((item: any, index: number) => (
                                <div key={index} className='hover:cursor-pointer grid justify-center items-center xl:w-[20vw] sm:w-[auto] sm:m-3 w-[90vw]  h-[50vh] p-0 rounded-xl hover:bg-yellow '>

                                    <Image className='m-auto ' src={porcoes1} alt={item.name} width={200} height={200} />
                                    <div className='mt-1 grid grid-cols-2 justify-between items-center align-middle text-black'>
                                        <h2 className='sm:text-[25px] font-bold text-[30px] p-4'>{item.name}</h2>
                                        <h2 className='text-end  text-[25px] font-bold sm:text-[18px]'>$ {item.value}</h2>
                                    </div>
                                    {/* <p>{item.text}</p> */}
                                    <button className='text-center rounded-md p-4 bg-black sm:p-2 text-yellow sm:text-[12px]' onClick={() => enviarPedido(item)}>ADD TO CART</button>
                                </div>
                            ))
                        }
                    </div>
                </div>


                <div className=' w-screen h-auto bg-white pb-20 md:hidden grid justify-center items-center'>
                    <div className=' w-[100vw] bg-black mb-8 py-4'>
                        <div className="w-screen h-[50px]  grid justify-center items-center text-center text-yellow text-[12px] sm:text-[15px]"> DESDE 1985, TORNANDO SONHOS EM REALIDADE</div>
                        <div className='col-span-2 sm:col-auto uppercase text-[20px] sm:text-[25px] flex items-center justify-center text-[2em] text-white font-bold'>
                            <h1>Starburguer</h1>
                        </div>
                    </div>
                    <div className=' w-screen grid justify-center sm:grid-cols-2'>
                        {
                            
                            FoodItens.map((item: any, index: number) => (
                                <div key={index} className='hover:cursor-pointer grid justify-center items-center xl:w-[20vw] sm:w-[auto] sm:m-3 w-[90vw]  h-[50vh] p-0 rounded-xl hover:bg-yellow '>

                                    <Image className='m-auto ' src={porcoes1} alt={item.name} width={200} height={200} />
                                    <div className='mt-1 grid grid-cols-2 justify-between items-center align-middle text-black'>
                                        <h2 className='sm:text-[25px] font-bold text-[30px] p-4'>{item.name}</h2>
                                        <h2 className='text-end  text-[25px] font-bold sm:text-[18px]'>$ {item.value}</h2>
                                    </div>
                                    {/* <p>{item.text}</p> */}
                                    <button className='text-center rounded-md p-4 bg-black sm:p-2 text-yellow sm:text-[12px]' onClick={() => enviarPedido(item)}>ADD TO CART</button>
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


