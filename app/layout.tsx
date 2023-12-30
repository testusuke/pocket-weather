import './globals.css'
import {Inter} from 'next/font/google'
import { cn } from '@/lib/utils'
import NextAuthProvider from '@/providers/NextAuth'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
})

export const metadata = {
    title: 'Pocket Weather',
    description: 'Pocket Weather is web weather application.',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang='ja-JP'>
        <body className={cn(inter.variable)}>
        <NextAuthProvider>
            {children}
        </NextAuthProvider>
        </body>
        </html>
    )
}
