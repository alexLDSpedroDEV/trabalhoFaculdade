import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF, FaTiktok } from 'react-icons/fa'

function footer() {
  return (
    <section>
        <div  className="text-yellow mt-8">
          <div className="h-auto w-screen grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-10 lg:justify-around text-center pt-5 m-0 bg-black">
            <div className="p-10 sm:max-w-[250px] max-w-auto">
              <h4 className="text-[2em] text-white font-bold uppercase pb-7">Starburguer </h4>
              <p>DESDE 1985, TORNANDO SONHOS EM REALIDADE </p>
              <div className="flex gap-5 justify-center pt-5 text-white">
                <button>
                  <FaFacebookF size={20} />
                </button>
                <button>
                  <AiOutlineInstagram size={20} />
                </button>
                <button>
                  <FaTiktok size={20} />
                </button>
                <button>
                  <AiOutlineTwitter size={20} />
                </button>
              </div>
            </div>
            <div className="cursor-pointer hidden sm:grid font-bold font-sans text-[1.2em]">
              <h4>Suport</h4>
              <p> Product</p>
              <p> Help & Support</p>
              <p> Retunr Policy</p>
              <p> Terms Of Use</p>
            </div>
            <div className="cursor-pointer hidden lg:grid font-bold font-sans  text-[1.2em]">
              <h4>View Guider</h4>
              <p> Features</p>
              <p> Careers</p>
              <p> Blog Post</p>
              <p> Our Branches</p>
            </div>
          </div>
          <div className="p-5 text-center">
            <p>Projeto Academico todos os direito reservado para os autores</p>
          </div>
        </div>

      </section>
  )
}

export default footer