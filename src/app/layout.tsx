import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '~/app/components/header'
import { Footer } from '~/app/components/footer'

import LocalFont from 'next/font/local'

const siteUrl = 'https://modespray.vercel.app'

export const metadata: Metadata = {
  title: {
    default: 'ModeSpray',
    template: '%s | ModeSpray',
  },
  description: 'Send Tokens to Multiple Addresses in One Click',
  openGraph: {
    title: 'ModeSpray',
    description: 'Send Tokens to Multiple Addresses in One Click',
    url: siteUrl,
    siteName: 'ModeSpray',
    images: [
      {
        url: `${siteUrl}/thumbnail.png`,
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'ModeSpray',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.png',
  },
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const calSans = LocalFont({
  src: '../../public/fonts/CalSans-SemiBold.ttf',
  variable: '--font-calsans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(' ')}>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === 'development' ? 'debug-screens' : undefined
        }`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
