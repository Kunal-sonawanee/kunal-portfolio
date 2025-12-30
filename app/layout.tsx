import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kunal Sonawane | Java Developer & Software Engineer',
  description: 'Software Engineer specializing in Java, Spring Boot, and full-stack development. IT Intern at Cohesity, published researcher, and freelance developer with 650+ LeetCode problems solved.',
  keywords: [
    'Kunal Sonawane',
    'Java Developer',
    'Software Engineer',
    'Full Stack Developer',
    'Spring Boot Developer',
    'Backend Developer',
    'Cohesity',
    'IT Intern',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Salesforce',
    'PostgreSQL',
    'MySQL',
    'DSA',
    'Problem Solving',
    'LeetCode',
    'Published Researcher',
    'Springer Publication',
    'IoT Research',
    'Freelance Developer',
    'MCA',
    'MIT World Peace University',
  ],
  openGraph: {
    title: 'Kunal Sonawane | Java Developer & Software Engineer',
    description: 'Software Engineer specializing in Java development, research, and full-stack solutions. Currently at Cohesity. Published researcher with freelance project experience.',
    url: 'https://kunalsonawane.com',
    siteName: 'Kunal Sonawane - Software Engineer',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kunal Sonawane | Java Developer & Software Engineer',
    description: 'Software Engineer at Cohesity. Java, Spring Boot, Full-Stack Development. Published Researcher.',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  applicationName: 'Kunal Sonawane Portfolio',
  generator: 'Next.js',
  authors: [{ name: 'Kunal Sonawane' }],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
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
