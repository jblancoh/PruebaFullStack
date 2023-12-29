import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prueba Frontend',
  description: 'Pagina de prueba frontend',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='light'>
      <body className={`${inter.className} bg-white dark:bg-black dark:text-white`}>
        {children}
      </body>
    </html>
  )
}
