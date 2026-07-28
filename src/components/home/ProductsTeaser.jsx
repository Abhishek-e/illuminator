import Reveal from '../Reveal'
import Button from '../Button'
import { useProducts } from '../../context/ProductContext'
import { iconMap, fallbackIcon } from '../../lib/iconMap'

export default function ProductsTeaser() {
  const { products } = useProducts()
  const preview = [...products].sort((a, b) => b.addedAt - a.addedAt).slice(0, 3)

  return (
    <section className="py-24 max-w-6xl mx-auto px-6 md:px-8">
      <Reveal className="text-center max-w-2xl mx-auto mb-14">
        <span className="font-hand text-indigo text-lg">✦ See it in action</span>
        <h2 className="font-hand text-3xl sm:text-4xl md:text-5xl mt-2">Peek inside our demo services</h2>
        <p className="font-body text-ink-soft mt-4">
          A running list of demo modules our team is actively building — new ones light up here the moment they ship.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {preview.map((product, i) => {
          const Icon = iconMap[product.icon] || fallbackIcon
          return (
            <Reveal key={product.id} delay={i * 0.1}>
              <div className="sketch-card p-6 h-full flex flex-col">
                <div className="w-12 h-12 rounded-full bg-bulb/10 text-bulb-dark flex items-center justify-center">
                  <Icon className="w-7 h-7" />
                </div>
                <span className="font-hand text-xs text-teal-dark mt-3">{product.category}</span>
                <h3 className="font-hand text-xl mt-1">{product.name}</h3>
                <p className="font-body text-sm text-ink-soft mt-2 flex-1">{product.tagline}</p>
              </div>
            </Reveal>
          )
        })}
      </div>

      <div className="text-center mt-12">
        <Button to="/products" variant="dark" className="text-lg px-7 py-3">
          See all product demos →
        </Button>
      </div>
    </section>
  )
}
