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
      <body className="bg-fixed bg-cover bg-center bg-no-repeat min-h-screen" 
        style={{ 
          backgroundImage: "url('/mi1.png')", 
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          WebkitBackgroundSize: "cover", /* Safari/iOS */
          MozBackgroundSize: "cover"
        }}>
        <div className="min-h-screen relative backdrop-blur-[1px] bg-black/5">
          {children}
        </div>
        <Toaster position="bottom-center" />
      </body>
    </html>
  )
} 