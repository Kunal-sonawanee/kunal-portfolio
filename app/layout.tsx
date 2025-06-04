import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kunal Sonawane | Software Engineer',
  description: 'Welcome to my personal website',
  keywords: [
    'Kunal Sonawane',
    'Software Engineer',
    'Web Developer',
    'Portfolio',
    'Next.js',
    'React',
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'Java Developer',
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'UI/UX Designer',
    'Software Development',
    'Web Development',
    'Programming',
    'Coding',
    'Node.js',
    'Express',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    'Git',
    'GitHub',
    'Open Source',
    'Tech Enthusiast',
    'Tech Blogger',
    'Tech Speaker',
    'Tech Community',
    'Tech Mentor',
    'Tech Education',
    'Tech Career',
    'Tech Industry',
  ],
  openGraph: {
    title: 'Kunal Sonawane | Software Engineer',
    description: 'Welcome to my personal portfolio website.',
    url: 'https://kunalsonawane.com',
    siteName: 'Kunal Sonawane Portfolio',
    images: [
      {
        url: '/og-image.png', // optional if you have OG image
        width: 1200,
        height: 630,
        alt: 'Kunal Sonawane Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico', // ✅ Make sure this file is in /public
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png', // ✅ Optional but better to use PNG
  },
  applicationName: 'Kunal Sonawane Portfolio',
  generator: 'Next.js',
  authors: [{ name: 'Kunal Sonawane', url: 'https://kunalsonawane.com' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
