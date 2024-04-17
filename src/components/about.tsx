import React from 'react'
import Image from 'next/image'

function about() {
  return (
    <section className="w-screen h-auto grid justify-center items-center grid-cols-1 lg:grid-cols-2 py-2">
        <div className="md:text-center px-8">
          <h1 className=" pt-10 text-yellow text-center text-[3em] font-serif">Conheça</h1>
          <h3 className="text-[3.5em] text-center font-extrabold">Nossa Historia</h3>
          <p className="pt-7 ">Desde sua inauguração em 1985, a Hamburgueria Retro tem sido um verdadeiro ícone da cena gastronômica, imersa nas vibrações únicas e na estética inconfundível dos anos 80. Fundada por um grupo de amigos apaixonados pela cultura pop da época, a hamburgueria rapidamente se tornou um ponto de encontro querido pela comunidade, onde música, diversão e, é claro, hambúrgueres deliciosos se encontravam.</p>
          <p className="pt-7  "> O aroma tentador dos hambúrgueres grelhando na chapa mistura-se ao som de hits atemporais que ecoam pelas paredes adornadas com posters de filmes clássicos da década. Nossa equipe, conhecida pela sua paixão e simpatia, recebe os clientes com sorrisos calorosos, prontos para proporcionar uma experiência memorável a cada visita. Nosso cardápio, meticulosamente elaborado ao longo dos anos, apresenta uma variedade de opções suculentas, desde os hambúrgueres tradicionais até criações exclusivas que despertam o paladar mais exigente.</p>
          <p className="pt-7 pb-12 hidden md:block" >Além dos sabores inigualáveis, a Hamburgueria Retro é um verdadeiro santuário da nostalgia, onde cada detalhe, desde os bancos vermelhos com estofamento de vinil até os brinquedos vintage que decoram as prateleiras, evoca lembranças preciosas de uma era passada. Aqui, não se trata apenas de uma refeição, mas sim de uma jornada no tempo, onde os clientes podem reviver os momentos mais emblemáticos de suas vidas enquanto desfrutam de uma comida reconfortante e genuína. Venha se juntar a nós e faça parte desta história que começou em 1985 e continua a encantar gerações até os dias de hoje.</p>
        </div>
        <div className="grid gap-5 py-5  px-5">
          <Image className="shadow shadow-xl m-auto shadow-black max-w-[90vw]  max-h-[600px]" width={1920} height={1080} src={"https://uploads.montage.com/uploads/sites/4/2023/07/17122727/Scout-Field-Bar-hero-shot-interior-1920x1080.jpg"} alt="imagem salao do restaurante"></Image>
          <Image className="shadow shadow-xl m-auto shadow-black max-w-[90vw]  max-h-[600px]" width={1920} height={1080} src={"https://s1.1zoom.me/b5655/742/Fast_food_Hamburger_Vegetables_520537_1920x1080.jpg"} alt="imagem salao do restaurante"></Image>
        </div>
      </section>
  )
}

export default about