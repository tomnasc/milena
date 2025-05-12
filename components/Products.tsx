"use client"

import { useState, useEffect } from 'react'
import { ProductTypes } from '@/lib/stripe'
import { toast } from 'react-hot-toast'
import { FaDumbbell, FaUserGraduate, FaBook, FaShoppingCart, FaLock } from 'react-icons/fa'

const produtos = [
  {
    id: ProductTypes.CURSO_TAF,
    priceId: 'price_123', // Substituir pelo ID real do preço no Stripe
    nome: 'Curso Completo TAF Extremo',
    descricao: 'Prepare-se para todas as etapas do Teste de Aptidão Física com treinos específicos e orientação profissional.',
    botao: 'Quero este!',
    icon: <FaDumbbell className="text-4xl text-secondary mx-auto mb-4" />
  },
  {
    id: ProductTypes.MENTORIA,
    priceId: 'price_456', // Substituir pelo ID real do preço no Stripe
    nome: 'Mentoria Individualizada Foco Total',
    descricao: 'Acompanhamento personalizado com a Professora Milena para otimizar seus estudos e traçar a melhor estratégia.',
    botao: 'Quero mentoria!',
    icon: <FaUserGraduate className="text-4xl text-secondary mx-auto mb-4" />
  },
  {
    id: ProductTypes.APOSTILA,
    priceId: 'price_789', // Substituir pelo ID real do preço no Stripe
    nome: 'Apostila Bizurada Legislação Penal',
    descricao: 'Material completo e esquematizado com os pontos mais cobrados em concursos policiais.',
    botao: 'Comprar apostila!',
    icon: <FaBook className="text-4xl text-secondary mx-auto mb-4" />
  }
]

export default function Products() {
  const [loadingId, setLoadingId] = useState<string | null>(null)
  const [isStripeReady, setIsStripeReady] = useState<boolean>(false)

  useEffect(() => {
    // Verificar se a variável de ambiente do Stripe está configurada
    const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    setIsStripeReady(!!stripeKey && stripeKey !== 'pk_test_placeholder')
  }, [])

  const handleCompra = async (produtoId: string, priceId: string) => {
    try {
      if (!isStripeReady) {
        toast.error('O sistema de pagamentos está em modo de demonstração. Em produção, você seria redirecionado para o Stripe.')
        console.info('Stripe não está configurado corretamente. Este é apenas um modo de demonstração.')
        return
      }

      setLoadingId(produtoId)
      
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: produtoId, priceId }),
      })

      const result = await response.json()
      
      if (result.success && result.url) {
        // Redirecionar para o checkout do Stripe
        window.location.href = result.url
      } else {
        toast.error('Erro ao processar pagamento. Por favor, tente novamente.')
        console.error('Erro no checkout:', result.error)
      }
    } catch (error) {
      toast.error('Erro ao conectar com o servidor de pagamentos. Por favor, tente novamente.')
      console.error('Erro ao processar pagamento:', error)
    } finally {
      setLoadingId(null)
    }
  }

  return (
    <section id="ofertas" className="py-12">
      <div className="container">
        <h2 className="text-3xl text-center mb-10">Conquiste sua Aprovação</h2>
        <div className="product-cards flex flex-wrap gap-8 justify-center">
          {produtos.map((produto) => (
            <div key={produto.id} className="product-card bg-dark-card border border-[#444444] rounded-lg p-5 w-[300px] text-center shadow-lg">
              {produto.icon}
              <h3 className="text-xl mb-2 text-secondary">{produto.nome}</h3>
              <p className="text-sm mb-4 min-h-[60px]">{produto.descricao}</p>
              <button 
                onClick={() => handleCompra(produto.id, produto.priceId)}
                className="cta-button secondary-cta flex items-center justify-center gap-2 mx-auto"
                disabled={loadingId === produto.id}
              >
                {loadingId === produto.id ? 'Processando...' : (
                  <>
                    <FaShoppingCart /> {produto.botao}
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
        <p className="text-center mt-5 text-sm italic flex items-center justify-center gap-2">
          <FaLock className="text-gray-400" /> Pagamentos seguros processados via Stripe. Acesso ao material liberado após confirmação.
        </p>
        {!isStripeReady && (
          <p className="text-center mt-3 text-sm text-orange-400">
            Modo de demonstração: o sistema de pagamentos não está configurado para processar pagamentos reais.
          </p>
        )}
      </div>
    </section>
  )
}