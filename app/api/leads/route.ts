import { NextResponse } from 'next/server'
import { saveLeadToSupabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { nome, email, consent } = data
    
    if (!nome || !email) {
      return NextResponse.json({ success: false, error: 'Nome e email são obrigatórios' }, { status: 400 })
    }
    
    const result = await saveLeadToSupabase(nome, email, consent)
    
    if (!result.success) {
      return NextResponse.json({ success: false, error: 'Erro ao salvar lead' }, { status: 500 })
    }
    
    // Para uma versão real, aqui poderia ter integração com serviço de email para enviar o material
    
    return NextResponse.json({ success: true, message: 'Lead cadastrado com sucesso' })
  } catch (error) {
    console.error('Erro ao processar requisição:', error)
    return NextResponse.json({ success: false, error: 'Erro interno do servidor' }, { status: 500 })
  }
} 