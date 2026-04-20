import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from "@/components/ui/sonner" 
import { ThemeProvider } from "@/components/theme-provider" 
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const firaCode = Fira_Code({ 
  subsets: ["latin"],
  variable: '--font-fira-code'
});

export const metadata: Metadata = {
  title: 'Jorge Roberto | Dev Full Stack',
  description: 'Portfolio de desenvolvedor full stack especializado em Java, TypeScript, React e React Native.',
  icons: {
    icon: '/src/app/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" richColors /> 
          
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
