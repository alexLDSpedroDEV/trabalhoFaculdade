import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import imagen from '../../image/hamburguer1.png'

function NavBar() {
  return (
    <div className=' bg-black text-white  fixed z-50'>

      <div className="w-screen h-[50px]  grid justify-center items-center text-center text-yellow text-[12px] sm:text-[15px]"> DESDE 1985, TORNANDO SONHOS EM REALIDADE</div>

      <div className=' w-screen grid grid-cols-3 h-[70px] border-b-[1px]'>

        <div className=' text-yellow uppercase hidden md:flex gap-7 align-middle items-center p-4
            '>
          <Link href={'/'}>HomePage</Link>
          <Link href={'/hamburguer'}>Menu</Link>
        </div>

        <div className='col-span-2 sm:col-auto uppercase text-[20px] sm:text-[25px] flex items-center justify-center text-[2em] text-white font-bold'>
          <h1>Starburguer</h1>
        </div>

        <div className=' flex text-yellow uppercase justify-end items-center pr-5 gap-4  sm:w-full'>

          <Link href={'/carrinho'} >Cart</Link>

        </div>

      </div>

    </div>

  )
}

export default NavBar