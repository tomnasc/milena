import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Professora Milena Machado - Mentoria para Concursos Policiais',
  description: 'Transformando alunos comuns em aprovados nas forças policiais! Conheça a mentoria da Professora Milena Machado, Policial Civil do RJ.',
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  formatDetection: {
    telephone: false,
  },
}

export const viewport: Viewport = {
  themeColor: '#121212',
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
  viewportFit: 'cover',
} 