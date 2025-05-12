"use client"

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import FreeContent from '@/components/FreeContent'
import Testimonials from '@/components/Testimonials'
import CallToAction from '@/components/CallToAction'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  // Animação suavizada para ser reproduzida ao entrar no campo de visão
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  }

  return (
    <main className="container mx-auto py-0">
      <div className="content-container">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
        >
          <Hero />
        </motion.div>
        
        <motion.div 
          className="block-container backdrop-blur-[0.5px] bg-black/30 my-10 p-6 rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
        >
          <About />
        </motion.div>
        
        <motion.div 
          className="block-container backdrop-blur-[0.5px] bg-black/30 my-10 p-6 rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
        >
          <Products />
        </motion.div>
        
        <motion.div 
          className="block-container backdrop-blur-[0.5px] bg-black/30 my-10 p-6 rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
        >
          <FreeContent />
        </motion.div>
        
        <motion.div 
          className="block-container backdrop-blur-[0.5px] bg-black/30 my-10 p-6 rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
        >
          <Testimonials />
        </motion.div>
        
        <motion.div 
          className="block-container backdrop-blur-[0.5px] bg-black/30 my-10 p-6 rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
        >
          <CallToAction />
        </motion.div>
        
        <motion.div 
          className="block-container backdrop-blur-[0.5px] bg-black/30 my-10 p-6 rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
        >
          <Contact />
        </motion.div>
        
        <motion.div 
          className="backdrop-blur-[0.5px] bg-black/40 mt-10 p-6 rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
        >
          <Footer />
        </motion.div>
      </div>
    </main>
  )
} 