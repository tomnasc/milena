"use client"

import { useState } from 'react'
import { FaFileDownload, FaCheckCircle, FaEnvelope, FaUser } from 'react-icons/fa'

export default function FreeContent() {
  const [status, setStatus] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('Enviando...')

    const formData = new FormData(e.currentTarget)
    const nome = formData.get('nome') as string
    const email = formData.get('email') as string
    const consent = formData.get('consent') === 'on'

    if (!consent) {
      setStatus('Você precisa concordar com os termos.')
      setIsSubmitting(false)
      return
    }

    try {
      // Integração real com a API
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, consent }),
      })

      const result = await response.json()
      
      if (result.success) {
        setStatus('Inscrição realizada com sucesso! Verifique seu e-mail para baixar o material.')
        e.currentTarget.reset()
      } else {
        setStatus(`Erro: ${result.error || 'Ocorreu um problema ao processar seu cadastro.'}`)
      }
    } catch (error) {
      setStatus('Erro ao enviar. Tente novamente mais tarde.')
      console.error('Erro no formulário:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="material-gratuito" className="py-12 text-center">
      <div className="container">
        <h2 className="text-3xl mb-4">Garanta seu Checklist do Aprovado!</h2>
        <p className="text-lg mb-8">
          Receba gratuitamente o "Checklist do Aprovado nas Forças Policiais" e comece a organizar seus estudos hoje mesmo.
        </p>
        <form 
          className="lead-form flex flex-col items-center" 
          onSubmit={handleSubmit}
        >
          <div className="relative w-full max-w-[350px]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <FaUser />
            </div>
            <input
              type="text"
              name="nome"
              placeholder="Seu nome completo"
              required
              className="p-3 pl-10 mb-4 border border-[#555555] bg-[#333333] text-text rounded w-full"
            />
          </div>
          <div className="relative w-full max-w-[350px]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <FaEnvelope />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Seu melhor e-mail"
              required
              className="p-3 pl-10 mb-4 border border-[#555555] bg-[#333333] text-text rounded w-full"
            />
          </div>
          <button 
            type="submit" 
            className="cta-button primary-cta w-full max-w-[350px] flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            <FaFileDownload /> Baixar Checklist Agora!
          </button>
          <div className="consent-text max-w-[400px] text-[#AAAAAA] text-sm mt-4 mx-auto flex items-start gap-2">
            <input 
              type="checkbox" 
              id="consent" 
              name="consent" 
              required 
              defaultChecked 
              className="mt-1"
            />
            <label htmlFor="consent" className="flex-1 text-left">
              Concordo em receber e-mails com promoções e conteúdos da Professora Milena Machado.
            </label>
          </div>
        </form>
        {status && (
          <div 
            className={`mt-4 flex items-center justify-center gap-2 ${
              status.includes('sucesso') ? 'text-green-400' : 
              status.includes('Erro') ? 'text-orange-400' : ''
            }`}
          >
            {status.includes('sucesso') && <FaCheckCircle />} {status}
          </div>
        )}
      </div>
    </section>
  )
} 