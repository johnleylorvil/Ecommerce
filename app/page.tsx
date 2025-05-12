import ProductGrid from "@/components/product-grid"
import { products } from "@/lib/products"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Featured Products</h1>
      <ProductGrid products={products} />
    </div>
  )
}
