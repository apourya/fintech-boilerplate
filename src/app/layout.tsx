import './globals.css'
import { Inter } from 'next/font/google'
import { LocaleToggle } from '@/components/ui/locale-toggle'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const lang = 'fa'
  const dir = lang === 'fa' ? 'rtl' : 'ltr'

  return (
    <html lang={lang} dir={dir}>
      <body className={inter.className}>
        <LocaleToggle />
        {children}
      </body>
    </html>
  )
}