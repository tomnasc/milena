import { createClient } from '@supabase/supabase-js'
import type { Database, TableInsert } from './database.types'

// Inicialize o cliente Supabase com as credenciais do ambiente
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

export async function saveLeadToSupabase(nome: string, email: string, consent: boolean) {
  try {
    const leadData: TableInsert<'leads'> = {
      nome,
      email,
      consentimento_marketing: consent
    }

    const { data, error } = await supabase
      .from('leads')
      .insert([leadData])
    
    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Erro ao salvar lead:', error)
    return { success: false, error }
  }
}

export async function saveNewsletterSubscription(email: string) {
  try {
    const newsletterData: TableInsert<'newsletter'> = { email }

    const { data, error } = await supabase
      .from('newsletter')
      .insert([newsletterData])
    
    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Erro ao salvar inscrição na newsletter:', error)
    return { success: false, error }
  }
} 