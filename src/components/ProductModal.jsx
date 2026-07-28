import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { iconMap, fallbackIcon } from '../lib/iconMap'
import { IconClose } from './icons/DoodleIcons'

export default function ProductModal({ product, onClose }) {
  const Icon = iconMap[product.icon] || fallbackIcon
  const hasLiveLink = Boolean(product.link) && product.link !== '#'

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        layoutId={`card-${product.id}`}
        className="relative sketch-card bg-paper-light w-full max-w-2xl max-h-[85vh] overflow-y-auto no-scrollbar"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-paper flex items-center justify-center sketch-border z-10"
          aria-label="Close"
        >
          <IconClose className="w-4 h-4" />
        </button>

        <div className="p-6 sm:p-8">
          <motion.div
            layoutId={`icon-${product.id}`}
            className="w-16 h-16 rounded-full flex items-center justify-center bg-bulb/15 text-bulb-dark"
          >
            <Icon className="w-9 h-9" />
          </motion.div>

          <motion.span layoutId={`category-${product.id}`} className="font-hand text-sm text-teal-dark mt-4 inline-block">
            {product.category}
          </motion.span>
          <motion.h3 layoutId={`title-${product.id}`} className="font-hand text-3xl mt-1">
            {product.name}
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-6 sketch-border overflow-hidden bg-white"
          >
            <div className="flex items-center gap-1.5 px-3 py-2 bg-paper-dark border-b-2 border-ink/10">
              <span className="w-2.5 h-2.5 rounded-full bg-marker/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-bulb-dark/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-teal/70" />
              <span className="ml-3 font-body text-xs text-ink-soft truncate bg-paper px-2 py-0.5 rounded flex-1">
                {hasLiveLink ? product.link : `illuminator.tech/demo/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
              </span>
            </div>
            <div className="p-5 space-y-3 bg-gradient-to-br from-paper-light to-paper-dark/40">
              <div className="h-4 w-2/3 rounded bg-ink/10" />
              <div className="h-24 rounded bg-ink/5 flex items-end gap-2 p-3">
                {[40, 70, 50, 90, 60, 35].map((h, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.25 + idx * 0.06, duration: 0.4 }}
                    className="flex-1 rounded bg-bulb/50"
                  />
                ))}
              </div>
              <div className="h-3 w-1/2 rounded bg-ink/10" />
              <div className="h-3 w-1/3 rounded bg-ink/10" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-body text-ink-soft mt-6"
          >
            {product.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {hasLiveLink ? (
              <a
                href={product.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 font-hand text-lg sketch-border shadow-sketch bg-bulb hover:bg-bulb-light text-ink transition-colors"
              >
                Visit Demo ↗
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-6 py-3 font-hand text-lg sketch-border shadow-sketch bg-paper-dark text-ink-soft cursor-not-allowed">
                Demo coming soon
              </span>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
