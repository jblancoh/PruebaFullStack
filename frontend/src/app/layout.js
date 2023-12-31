import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prueba Frontend',
  description: 'Pagina de prueba frontend',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="emerald">
      <body className={`${inter.className} container mx-auto`}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
