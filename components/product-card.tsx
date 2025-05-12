"use client"

import { useState } from "react"
import Image from "next/image"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    setTimeout(() => {
      addToCart(product)
      setIsAdding(false)
    }, 500)
  }

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        {product.sale && <Badge className="absolute top-2 right-2 bg-red-500">Sale</Badge>}
      </div>
      <CardContent className="pt-4 flex-grow">
        <h3 className="font-medium text-lg mb-1">{product.name}</h3>
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-sm">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        <p className="text-gray-500 text-sm mt-2">{product.description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button className="w-full" onClick={handleAddToCart} disabled={isAdding}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          {isAdding ? "Adding..." : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  )
}
