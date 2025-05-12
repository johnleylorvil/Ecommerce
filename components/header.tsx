"use client"

import Link from "next/link"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import CartDrawer from "@/components/cart-drawer"
import { useState } from "react"

export default function Header() {
  const { cart } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="border-b sticky top-0 z-10 bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          ShopSimple
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-600">
            Home
          </Link>
          <Link href="/products" className="hover:text-gray-600">
            Products
          </Link>
          <Link href="/about" className="hover:text-gray-600">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-600">
            Contact
          </Link>
        </nav>

        <Button variant="outline" size="icon" className="relative" onClick={() => setIsCartOpen(true)}>
          <ShoppingCart className="h-5 w-5" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Button>

        <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </header>
  )
}
