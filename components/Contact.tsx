"use client"

import { useState } from 'react'
import Link from 'next/link'
import { FaInstagram, FaYoutube, FaWhatsapp, FaTelegram, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Contact() {
  const [newsletterStatus, setNewsletterStatus] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setNewsletterStatus('Inscrevendo...')

    const formData = new FormData(e.currentTarget)
    const email = formData.get('newsletter_email') as string

    try {
      // Integração real com a API
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const result = await response.json()
      
      if (result.success) {
        setNewsletterStatus('Inscrição na newsletter realizada com sucesso!')
        e.currentTarget.reset()
      } else {
        setNewsletterStatus(`Erro: ${result.error || 'Ocorreu um problema ao processar sua inscrição.'}`)
      }
    } catch (error) {
      setNewsletterStatus('Erro ao inscrever. Tente novamente.')
      console.error('Erro na newsletter:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.section 
      id="contato" 
      className="py-10 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.h3 
          className="text-2xl mb-5"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          Siga e Entre em Contato
        </motion.h3>
        <div className="social-icons flex justify-center gap-6 mb-6">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.3, delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Link href="https://instagram.com/profmilenamachado" target="_blank" className="text-3xl text-secondary hover:text-white transition-colors" title="Instagram">
              <FaInstagram />
            </Link>
          </motion.div>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.3, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <Link href="https://youtube.com/profmilenamachado" target="_blank" className="text-3xl text-secondary hover:text-white transition-colors" title="YouTube">
              <FaYoutube />
            </Link>
          </motion.div>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.3, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <Link href="https://wa.me/5521XXXXXXXXX" target="_blank" className="text-3xl text-secondary hover:text-white transition-colors" title="WhatsApp">
              <FaWhatsapp />
            </Link>
          </motion.div>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.3, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <Link href="https://t.me/profmilenamachado" target="_blank" className="text-3xl text-secondary hover:text-white transition-colors" title="Telegram">
              <FaTelegram />
            </Link>
          </motion.div>
        </div>
        
        <div className="support-email mt-5 flex items-center justify-center gap-2">
          <FaEnvelope className="text-secondary" />
          <div className="overflow-hidden">
            <span className="mr-1">Suporte:</span>
            <Link 
              href="mailto:suporte@profmilenamachado.com.br" 
              className="text-[#B0B0B0] hover:underline inline-block truncate max-w-[220px] align-bottom"
              title="suporte@profmilenamachado.com.br"
            >
              suporte@profmilenamachado.com.br
            </Link>
          </div>
        </div>

        <motion.div 
          className="mt-8"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl mb-4">Receba novidades por e-mail:</h3>
          <form 
            onSubmit={handleSubmit} 
            className="flex flex-col md:flex-row justify-center gap-2 max-w-lg mx-auto"
          >
            <input
              type="email"
              name="newsletter_email"
              placeholder="Seu melhor e-mail"
              required
              className="p-3 border border-[#555555] bg-[#333333] text-text rounded w-full md:w-2/3"
            />
            <button 
              type="submit" 
              className="cta-button secondary-cta w-full md:w-auto"
              disabled={isSubmitting}
            >
              Assinar Newsletter
            </button>
          </form>
          {newsletterStatus && (
            <div 
              className={`mt-3 text-sm ${
                newsletterStatus.includes('sucesso') ? 'text-green-400' : 
                newsletterStatus.includes('Erro') ? 'text-orange-400' : ''
              }`}
            >
              {newsletterStatus}
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>
  )
} 