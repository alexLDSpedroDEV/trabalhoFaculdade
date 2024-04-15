"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function NavBar() {
    const [width, setWidth] = useState<string>("")


    useEffect(() => {
     const setImagens = () => {
       if ( window.innerWidth >= 700){
         setWidth("https://wallpapers.com/images/featured/burger-kn39aebv42rw5w19.jpg")
       } else {
         setWidth("https://img.freepik.com/fotos-gratis/delicioso-hamburguer-com-ingredientes-frescos_23-2150857908.jpg")
       }
     }
   
     setImagens();
   
     window.addEventListener('resize', setImagens);
   
     return () => {
       window.removeEventListener('resize', setImagens);
     };
   
     
    }, []);
    
  return (
    <section className="w-screen h-screen min-h-[700px] ">
        <div className="w-screen h-screen bg-black opacity-70 absolute z-10  min-h-[700px]">
        </div>
        <div className="z-20 w-screen h-screen grid justify-center items-center  min-h-[700px]  absolute item-center ">
          <div className=" text-white w-[300px] text-center h-[300px] grid justify-center gap-0 items-center">
            <h1 className=" text-yellow sm:text-[5rem] text-[3.5rem]  font-serif">Welcome</h1>
            <h2 className=" font-extrabold sm:text-[2.5em] text-[2em] uppercase">Starburguer</h2>
            <h3 className=" text-[1.5em]">Faça seu pedido</h3>

            <Link className="sm:w-[400px] w-[250px] cursor-pointer mt-8 py-4  bg-yellow" href={'/hamburguer'}>Pedir agora</Link>
          </div>
        </div>
        <Image className="  min-h-[700px] w-full h-[100vh] items-center  bg-contain absolute z-1" width={1920} height={1080} src={width} alt="image hamburguer"></Image>
      </section>

  )
}

export default NavBar