export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      leads: {
        Row: {
          consentimento_marketing: boolean
          created_at: string | null
          email: string
          id: string
          nome: string
          updated_at: string | null
        }
        Insert: {
          consentimento_marketing?: boolean
          created_at?: string | null
          email: string
          id?: string
          nome: string
          updated_at?: string | null
        }
        Update: {
          consentimento_marketing?: boolean
          created_at?: string | null
          email?: string
          id?: string
          nome?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      newsletter: {
        Row: {
          created_at: string | null
          email: string
          id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      vendas: {
        Row: {
          created_at: string | null
          email_cliente: string | null
          id: string
          produto_id: string
          status: string
          stripe_checkout_id: string
          stripe_payment_id: string | null
          updated_at: string | null
          valor: number
        }
        Insert: {
          created_at?: string | null
          email_cliente?: string | null
          id?: string
          produto_id: string
          status?: string
          stripe_checkout_id: string
          stripe_payment_id?: string | null
          updated_at?: string | null
          valor: number
        }
        Update: {
          created_at?: string | null
          email_cliente?: string | null
          id?: string
          produto_id?: string
          status?: string
          stripe_checkout_id?: string
          stripe_payment_id?: string | null
          updated_at?: string | null
          valor?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  T extends keyof Database['public']['Tables']
> = Database['public']['Tables'][T]['Row']

export type TableInsert<
  T extends keyof Database['public']['Tables']
> = Database['public']['Tables'][T]['Insert']

export type TableUpdate<
  T extends keyof Database['public']['Tables']
> = Database['public']['Tables'][T]['Update'] 