"use client";

import { loadStripe } from '@stripe/stripe-js'
import Stripe from 'stripe'

// Carregar o Stripe no lado do cliente
const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
export const stripePromise = typeof publishableKey === 'string' && publishableKey 
  ? loadStripe(publishableKey) 
  : null;

// Instância do Stripe para o lado do servidor (não é executada no cliente)
let stripe: Stripe | null = null;

// Inicialização segura do Stripe no lado do servidor
if (typeof window === 'undefined') {
  const apiKey = process.env.STRIPE_SECRET_KEY;
  if (typeof apiKey === 'string' && apiKey) {
    stripe = new Stripe(apiKey, {
      apiVersion: '2023-10-16', // Usar a versão mais recente disponível
    });
  }
}

export default stripe;

// Tipos de produtos
export enum ProductTypes {
  CURSO_TAF = 'curso_taf_extremo',
  MENTORIA = 'mentoria_individualizada',
  APOSTILA = 'apostila_legislacao_penal',
}

// Função para criar checkout session (apenas para o lado do servidor)
export async function createCheckoutSession(productId: string, priceId: string, customerEmail?: string) {
  if (!stripe) {
    console.error('Stripe não foi inicializado corretamente');
    return { success: false, error: 'Configuração do Stripe ausente' };
  }

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/sucesso?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancelado`,
      customer_email: customerEmail,
      metadata: {
        productId,
      },
    })
    
    return { success: true, sessionId: session.id, url: session.url }
  } catch (error) {
    console.error('Erro ao criar sessão de checkout:', error)
    return { success: false, error }
  }
}