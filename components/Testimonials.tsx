"use client"

import { useEffect } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const testimonialData = [
  {
    id: 1,
    name: 'João Silva',
    role: 'Aprovado PC-RJ',
    avatar: '/mi2.png',
    text: 'A mentoria da Professora Milena foi um divisor de águas na minha preparação. Didática incrível e foco total no que realmente importa. Recomendo demais!'
  },
  {
    id: 2,
    name: 'Maria Oliveira',
    role: 'Aprovada PRF',
    avatar: '/mi4.png',
    text: 'Finalmente conquistei minha vaga na PRF! O material e as dicas da Milena foram essenciais. Gratidão eterna!'
  },
  {
    id: 3,
    name: 'Carlos Souza',
    role: 'Aprovado PM-SP',
    avatar: '/mi6.png',
    text: 'Passei na PM-SP graças ao direcionamento estratégico da Professora. Os simulados e correções fizeram toda a diferença.'
  },
  {
    id: 4,
    name: 'Ana Ferreira',
    role: 'Aprovada PC-SP',
    avatar: '/mi4.png',
    text: 'Depois de 2 anos tentando, finalmente passei! Os métodos da Professora Milena são diferenciados e focados no que realmente cai nas provas.'
  },
  {
    id: 5,
    name: 'Bruno Carvalho',
    role: 'Aprovado PF',
    avatar: '/mi2.png',
    text: 'A mentoria foi fundamental para minha aprovação na Polícia Federal. Organização, foco e estratégia fizeram toda a diferença na reta final.'
  }
]

export default function Testimonials() {
  // Configurações do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  return (
    <motion.section 
      id="depoimentos" 
      className="py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.h2 
          className="text-3xl text-center mb-10 text-primary"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Quem já passou pela mentoria aprova!
        </motion.h2>
        
        <div className="max-w-2xl mx-auto">
          <Slider {...settings} className="testimonial-slider">
            {testimonialData.map((testimonial) => (
              <div key={testimonial.id} className="outline-none px-2">
                <motion.div
                  className="bg-[#2C2C2C] p-6 sm:p-8 rounded-lg border border-[#444444] shadow-lg overflow-hidden"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <FaQuoteLeft className="text-secondary text-2xl opacity-40" />
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-500 text-sm sm:text-base" />
                      ))}
                    </div>
                  </div>
                  <div className="min-h-[120px] sm:min-h-[100px] mb-5">
                    <p className="italic text-[#D0D0D0] text-base sm:text-lg">{testimonial.text}</p>
                  </div>
                  <div className="flex items-center mt-4 pt-2 border-t border-[#444444]">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden mr-3 flex-shrink-0">
                      <Image 
                        src={testimonial.avatar} 
                        alt={`Foto de ${testimonial.name}`}
                        fill
                        sizes="(max-width: 640px) 48px, 56px"
                        className="object-cover"
                      />
                    </div>
                    <div className="overflow-hidden flex-1">
                      <h4 className="text-white font-bold text-lg truncate">{testimonial.name}</h4>
                      <span className="text-xs sm:text-sm text-secondary block truncate">{testimonial.role}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </motion.section>
  )
} 