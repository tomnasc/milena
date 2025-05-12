import './globals.css'
import { Toaster } from 'react-hot-toast'
import { metadata, viewport } from './metadata'

export { metadata, viewport }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body 
        style={{ 
          backgroundImage: "url('/mi1.png')",
          height: '100%',
          width: '100%',
          margin: 0,
          padding: 0,
          overflow: 'auto'
        }}
        className="min-h-screen"
      >
        {/* Div overlay que contém a imagem de fundo real */}
        <div 
          className="fixed inset-0 -z-10"
          style={{
            backgroundImage: "url('/mi1.png')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
            position: 'fixed',
            top: 0,
            left: 0,
            WebkitBackgroundSize: 'cover',
            MozBackgroundSize: 'cover',
            WebkitTransform: 'translate3d(0,0,0)', /* Força o uso do hardware acceleration no iOS */
            transform: 'translate3d(0,0,0)', /* Melhora a performance de renderização */
          }}
        />
        <div className="min-h-screen relative backdrop-blur-[1px] bg-black/5 z-10">
          {children}
        </div>
        <Toaster position="bottom-center" />
      </body>
    </html>
  )
} 