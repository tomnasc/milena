"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="sobre" className="py-12">
      <div className="container flex flex-col md:flex-row items-center gap-10">
        <motion.div 
          className="about-text flex-1 min-w-[300px]"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl mb-5 text-secondary">Sobre a Mentora</h2>
          <p className="mb-4">
            Milena Machado é Policial Civil no estado do Rio de Janeiro, com vasta experiência na área de segurança pública e um histórico impressionante de aprovações em diversos concursos policiais.
          </p>
          <p className="mb-4">
            Apaixonada por ajudar concurseiros a alcançarem seus sonhos, desenvolveu métodos de estudo focados em resultados, que já transformaram a trajetória de centenas de alunos.
          </p>
          <p>
            Sua missão é desmistificar o caminho até a aprovação, oferecendo direcionamento estratégico e o suporte necessário para que você conquiste a sua farda.
          </p>
        </motion.div>
        <motion.div 
          className="about-image w-full sm:w-[300px] h-[300px] md:h-[350px] relative rounded-lg overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image 
            src="/mi5.png" 
            alt="Professora Milena Machado" 
            fill 
            sizes="(max-width: 768px) 100vw, 300px"
            style={{objectFit: 'cover'}} 
            className="rounded-lg"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
} 