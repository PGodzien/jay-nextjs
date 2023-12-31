import type { Metadata } from 'next'
import { Prompt } from 'next/font/google'
import './globals.css'
import localFont from '@next/font/local'

const inter = Prompt({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ['latin']
})

const gilroy = localFont({
  src: [
    {
      path: '../public/font/HubotSansExpanded-Light.woff2',
      weight: '300'
    },
    {
      path: '../public/font/HubotSansExpanded-Regular.woff2',
      weight: '400'
    },
    {
      path: '../public/font/HubotSansExpanded-Medium.woff2',
      weight: '500'
    },
    {
      path: '../public/font/HubotSansExpanded-SemiBold.woff2',
      weight: '600'
    },
    {
      path: '../public/font/HubotSansExpanded-Bold.woff2',
      weight: '700'
    },
    {
      path: '../public/font/HubotSansExpanded-ExtraBold.woff2',
      weight: '800'
    },
    {
      path: '../public/font/HubotSansExpanded-Black.woff2',
      weight: '900'
    },

  ],
  variable: '--font-gilroy'
});

export const metadata: Metadata = {
  title: 'Government Boiler Replacement Scheme',
  description: 'Apply for the Boiler Upgrade Scheme and check if youre eligible',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={gilroy.className}>{children}</body>
    </html>
  )
}
