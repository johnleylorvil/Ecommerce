import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import { CartProvider } from "@/lib/cart-context"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ShopSimple - Simple Ecommerce",
  description: "A simple ecommerce interface",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <footer className="border-t py-6 text-center text-gray-500 text-sm">
                <div className="container mx-auto">© {new Date().getFullYear()} ShopSimple. All rights reserved.</div>
              </footer>
            </div>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
