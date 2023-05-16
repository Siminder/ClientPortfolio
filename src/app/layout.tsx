import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Taylor Portfolio',
  description: 'Made by Siminder Bansal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scrollbar" id="scrollbar6">
      <head />
      <body>{children}</body>
    </html>
  )
}
