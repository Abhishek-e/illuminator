import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { collection, addDoc, deleteDoc, doc, onSnapshot, query, orderBy } from 'firebase/firestore'
import { db } from '../lib/firebase'
import { seedProducts } from '../data/seedProducts'

const ProductContext = createContext(null)

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const q = query(collection(db, 'products'), orderBy('addedAt', 'desc'))
    const unsubscribe = onSnapshot(
      q,
      (snap) => {
        setProducts(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
        setReady(true)
      },
      () => setReady(true),
    )
    return unsubscribe
  }, [])

  const addProduct = useCallback(async (product) => {
    await addDoc(collection(db, 'products'), { ...product, addedAt: Date.now() })
  }, [])

  const removeProduct = useCallback(async (id) => {
    await deleteDoc(doc(db, 'products', id))
  }, [])

  const seedDemoProducts = useCallback(async () => {
    await Promise.all(
      seedProducts.map(({ id, ...rest }) => addDoc(collection(db, 'products'), rest)),
    )
  }, [])

  const value = { products, ready, addProduct, removeProduct, seedDemoProducts }
  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

export function useProducts() {
  const ctx = useContext(ProductContext)
  if (!ctx) throw new Error('useProducts must be used within a ProductProvider')
  return ctx
}
