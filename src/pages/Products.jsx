import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import ProductModal from '../components/ProductModal'
import { useProducts } from '../context/ProductContext'
import { iconMap, fallbackIcon } from '../lib/iconMap'

const categoryColors = {
  CRM: 'bg-indigo/10 text-indigo',
  ERM: 'bg-marker/10 text-marker',
  Automation: 'bg-teal/10 text-teal-dark',
  Analytics: 'bg-bulb/15 text-bulb-dark',
  Compliance: 'bg-ink/10 text-ink',
  Integrations: 'bg-indigo/10 text-indigo',
}

export default function Products() {
  const { products } = useProducts()
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedId, setSelectedId] = useState(null)

  const categories = useMemo(() => ['All', ...new Set(products.map((p) => p.category))], [products])
  const filtered = activeCategory === 'All' ? products : products.filter((p) => p.category === activeCategory)
  const selected = products.find((p) => p.id === selectedId)

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 min-h-[70vh]">
      <Reveal className="text-center max-w-2xl mx-auto mb-4">
        <span className="font-hand text-teal-dark text-lg">✦ Try before you buy</span>
        <h1 className="font-hand text-4xl sm:text-5xl mt-2">Our demo web services</h1>
        <p className="font-body text-ink-soft mt-4">
          Click any card to preview what it does. Our admins publish new demos here as they ship.
        </p>
      </Reveal>

      <div className="flex flex-wrap justify-center gap-2 my-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`font-hand px-4 py-1.5 sketch-border text-sm transition-colors ${
              activeCategory === cat ? 'bg-ink text-paper-light' : 'bg-paper-light text-ink hover:bg-paper-dark'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((product, i) => {
            const Icon = iconMap[product.icon] || fallbackIcon
            return (
              <motion.button
                layoutId={`card-${product.id}`}
                key={product.id}
                type="button"
                onClick={() => setSelectedId(product.id)}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -4 }}
                className="text-left sketch-card p-6 flex flex-col cursor-pointer"
              >
                <motion.div
                  layoutId={`icon-${product.id}`}
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    categoryColors[product.category] || 'bg-bulb/10 text-bulb-dark'
                  }`}
                >
                  <Icon className="w-7 h-7" />
                </motion.div>
                <motion.span layoutId={`category-${product.id}`} className="font-hand text-xs text-teal-dark mt-3">
                  {product.category}
                </motion.span>
                <motion.h3 layoutId={`title-${product.id}`} className="font-hand text-2xl mt-1">
                  {product.name}
                </motion.h3>
                <p className="font-body text-sm text-ink-soft mt-2 flex-1">{product.tagline}</p>
                <span className="font-hand text-indigo mt-4 inline-flex items-center gap-1">View demo →</span>
              </motion.button>
            )
          })}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center font-hand text-xl text-ink-soft mt-16">
          No demos in this category yet — check back soon!
        </p>
      )}

      <AnimatePresence>{selected && <ProductModal product={selected} onClose={() => setSelectedId(null)} />}</AnimatePresence>
    </div>
  )
}
