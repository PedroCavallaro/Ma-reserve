import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { Montserrat as Mosterrat } from 'next/font/google'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })
const monsterrat = Mosterrat({
  subsets:['latin'],
  weight: "500",
  variable: '--font-monsterrat',
})

export const metadata: Metadata = {
  title: 'Ma reserve',
  description: 'Restaurant reservation app',

} 

export default function RootLayout({ children,}:
  { children: ReactNode}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} ${monsterrat.variable}`}>
        <Header/>
        
        {children}
      </body>
      
    </html>
  )
}
