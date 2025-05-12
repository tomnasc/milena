import Link from 'next/link'
import { FaInstagram, FaYoutube, FaWhatsapp, FaTelegram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-[#888888] text-center py-6 text-sm">
      <div className="container">
        <div className="social-icons flex justify-center gap-4 mb-5">
          <Link href="https://instagram.com/profmilenamachado" target="_blank" className="text-xl text-[#666] hover:text-secondary transition-colors" title="Instagram">
            <FaInstagram />
          </Link>
          <Link href="https://youtube.com/profmilenamachado" target="_blank" className="text-xl text-[#666] hover:text-secondary transition-colors" title="YouTube">
            <FaYoutube />
          </Link>
          <Link href="https://wa.me/5521XXXXXXXXX" target="_blank" className="text-xl text-[#666] hover:text-secondary transition-colors" title="WhatsApp">
            <FaWhatsapp />
          </Link>
          <Link href="https://t.me/profmilenamachado" target="_blank" className="text-xl text-[#666] hover:text-secondary transition-colors" title="Telegram">
            <FaTelegram />
          </Link>
        </div>
        <div className="footer-links mb-4">
          <Link href="#sobre" className="text-[#AAAAAA] hover:underline mx-2">
            Sobre a Mentora
          </Link>
         
          <Link href="/politica-de-privacidade" className="text-[#AAAAAA] hover:underline mx-2">
            Política de Privacidade
          </Link>
        </div>
        <p className="copyright">
          Copyright © {new Date().getFullYear()} – Professora Milena Machado. Todos os direitos reservados.
        </p>
      
      </div>
    </footer>
  )
} 