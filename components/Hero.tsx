"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="py-16 text-center backdrop-blur-[0.5px] bg-black/20 rounded-lg my-10">
      <div className="container">
        <motion.div 
          className="relative w-48 h-48 rounded-full overflow-hidden mx-auto mb-5"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ 
            type: "spring", 
            stiffness: 180, 
            damping: 25,
            delay: 0.1 
          }}
        >
          <Image 
            src="/mi3.png" 
            alt="Professora Milena Machado" 
            fill 
            sizes="(max-width: 768px) 100vw, 192px"
            style={{objectFit: 'cover', objectPosition: 'center top'}} 
            className="rounded-full"
            priority
          />
        </motion.div>
        <motion.h1 
          className="text-4xl md:text-5xl mb-2"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Professora Milena Machado
        </motion.h1>
        <motion.p 
          className="subtitle text-xl md:text-2xl mb-6 text-text-faded"
          initial={{ y: -15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Transformando alunos comuns em aprovados!
        </motion.p>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link href="#material-gratuito" className="cta-button primary-cta">
            Baixe o material gratuito
          </Link>
        </motion.div>
        <motion.span 
          className="badge block mt-5 text-[#CCCCCC]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Policial Civil do RJ | Mentora de Concursos
        </motion.span>
      </div>
    </section>
  )
} 