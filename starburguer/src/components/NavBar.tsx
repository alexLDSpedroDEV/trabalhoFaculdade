import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import imagen from '../../image/hamburguer1.png'

function NavBar() {
  return (
    <div className=' bg-black'>
        
        <div className="w-screen h-[50px]  grid justify-center items-center text-center text-yellow text-[15px]"> DESDE 1985, TORNANDO SONHOS EM REALIDADE</div>
              
        <div className=' w-screen grid grid-cols-2 h-[70px] border-b-[1px] border-red-500 md:grid-cols-3'>
          
          <div className='hidden md:flex gap-7 align-middle items-center p-4
            '>
            <Link href={'/'}>HomePage</Link>
            <Link href={'/hamburguer'}>Menu</Link>
          </div>
          
          
          <div className='uppercase text-[25px] flex items-center justify-center text-red-500 font-semibold'>
            <Image src={''} alt={'logo'} width={250} height={250} className='w-[80px] xl:w-[120px]' />
          </div>

          <div className=' flex justify-end items-center pr-5 gap-4  sm:w-full'>
            <Link href={'/admin'}></Link>
            <Link href={'/dashbord'}></Link>
            <Link href={'/carrinho'} >Cart</Link>
            
          </div>
          
        </div>
        
    </div>
    
  )
}

export default NavBar