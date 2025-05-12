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
  // Animação para ser reproduzida ao entrar no campo de visão
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <main className="container mx-auto py-0">
      <div className="content-container">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Hero />
        </motion.div>
        
        <motion.div 
          className="block-container backdrop-blur-sm bg-black/40 my-10 p-6 rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <About />
        </motion.div>
        
        <motion.div 
          className="block-container backdrop-blur-sm bg-black/40 my-10 p-6 rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Products />
        </motion.div>
        
        <motion.div 
          className="block-container backdrop-blur-sm bg-black/40 my-10 p-6 rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <FreeContent />
        </motion.div>
        
        <motion.div 
          className="block-container backdrop-blur-sm bg-black/40 my-10 p-6 rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Testimonials />
        </motion.div>
        
        <motion.div 
          className="block-container backdrop-blur-sm bg-black/40 my-10 p-6 rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <CallToAction />
        </motion.div>
        
        <motion.div 
          className="block-container backdrop-blur-sm bg-black/40 my-10 p-6 rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Contact />
        </motion.div>
        
        <motion.div 
          className="backdrop-blur-sm bg-black/60 mt-10 p-6 rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Footer />
        </motion.div>
      </div>
    </main>
  )
} 