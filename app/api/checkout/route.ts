import { NextResponse } from 'next/server'
import stripe, { createCheckoutSession } from '@/lib/stripe'

export async function POST(request: Request) {
  // Verificar se o Stripe está configurado
  if (!stripe) {
    return NextResponse.json(
      { success: false, error: 'O sistema de pagamentos não está configurado corretamente.' },
      { status: 503 }
    )
  }

  try {
    const data = await request.json()
    const { productId, priceId, email } = data
    
    if (!productId || !priceId) {
      return NextResponse.json({ success: false, error: 'ID do produto e do preço são obrigatórios' }, { status: 400 })
    }
    
    const result = await createCheckoutSession(productId, priceId, email)
    
    if (!result.success) {
      return NextResponse.json({ success: false, error: 'Erro ao criar sessão de checkout' }, { status: 500 })
    }
    
    return NextResponse.json({ success: true, sessionId: result.sessionId, url: result.url })
  } catch (error) {
    console.error('Erro ao processar requisição:', error)
    return NextResponse.json({ success: false, error: 'Erro interno do servidor' }, { status: 500 })
  }
} 