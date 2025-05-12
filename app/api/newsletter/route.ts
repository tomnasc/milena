import { NextResponse } from 'next/server'
import { saveNewsletterSubscription } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { email } = data
    
    if (!email) {
      return NextResponse.json({ success: false, error: 'Email é obrigatório' }, { status: 400 })
    }
    
    const result = await saveNewsletterSubscription(email)
    
    if (!result.success) {
      return NextResponse.json({ success: false, error: 'Erro ao salvar inscrição' }, { status: 500 })
    }
    
    return NextResponse.json({ success: true, message: 'Inscrição realizada com sucesso' })
  } catch (error) {
    console.error('Erro ao processar requisição:', error)
    return NextResponse.json({ success: false, error: 'Erro interno do servidor' }, { status: 500 })
  }
} 