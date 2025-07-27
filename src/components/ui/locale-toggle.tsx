'use client'
import { useRouter, usePathname } from 'next/navigation'

export function LocaleToggle() {
  const router = useRouter()
  const pathname = usePathname()
  const current = pathname.startsWith('/en') ? 'en' : 'fa'
  const nextLocale = current === 'fa' ? 'en' : 'fa'

  return (
    <button onClick={() => router.push(`/${nextLocale}${pathname.replace(/^\/(fa|en)/, '')}`)}>
      {nextLocale === 'fa' ? '🇮🇷 فارسی' : '🇺🇸 English'}
    </button>
  )
}