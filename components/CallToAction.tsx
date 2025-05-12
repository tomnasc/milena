"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

export default function CallToAction() {
  return (
    <section id="cta-final" className="py-16 text-center">
      <div className="container">
        <motion.h2 
          className="text-4xl mb-6 text-primary"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Dê o próximo passo rumo à sua farda!
        </motion.h2>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="#ofertas" 
            className="cta-button bg-primary text-white hover:bg-primary-dark text-xl py-4 px-8 flex items-center justify-center gap-2 inline-flex"
          >
            Quero me preparar com a Milena <FaArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 