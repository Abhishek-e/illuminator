import { createContext, useContext, useState, useCallback } from 'react'
import { getProducts, saveProducts } from '../lib/storage'
import { seedProducts } from '../data/seedProducts'

const ProductContext = createContext(null)

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(() => {
    const existing = getProducts()
    if (existing && existing.length) return existing
    saveProducts(seedProducts)
    return seedProducts
  })

  const addProduct = useCallback((product) => {
    setProducts((prev) => {
      const next = [{ id: crypto.randomUUID(), addedAt: Date.now(), ...product }, ...prev]
      saveProducts(next)
      return next
    })
  }, [])

  const removeProduct = useCallback((id) => {
    setProducts((prev) => {
      const next = prev.filter((p) => p.id !== id)
      saveProducts(next)
      return next
    })
  }, [])

  const value = { products, addProduct, removeProduct }
  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

export function useProducts() {
  const ctx = useContext(ProductContext)
  if (!ctx) throw new Error('useProducts must be used within a ProductProvider')
  return ctx
}
