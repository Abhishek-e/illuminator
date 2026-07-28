import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import { useProducts } from '../context/ProductContext'
import Button from '../components/Button'
import FormField, { inputClass } from '../components/FormField'
import { iconMap, iconOptions, fallbackIcon } from '../lib/iconMap'
import { IconBulb } from '../components/icons/DoodleIcons'

const emptyForm = { name: '', tagline: '', description: '', category: '', icon: 'chat', link: '' }
const categorySuggestions = ['CRM', 'ERM', 'Automation', 'Analytics', 'Compliance', 'Integrations']

export default function AdminDashboard() {
  const { session, logout } = useAuth()
  const { products, addProduct, removeProduct } = useProducts()
  const [form, setForm] = useState(emptyForm)
  const [message, setMessage] = useState('')

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name.trim() || !form.tagline.trim() || !form.category.trim()) return

    addProduct({
      name: form.name.trim(),
      tagline: form.tagline.trim(),
      description: form.description.trim() || form.tagline.trim(),
      category: form.category.trim(),
      icon: form.icon,
      link: form.link.trim() || '#',
    })
    setMessage(`"${form.name.trim()}" is now live on the Products page!`)
    setForm(emptyForm)
    setTimeout(() => setMessage(''), 4000)
  }

  const sorted = [...products].sort((a, b) => b.addedAt - a.addedAt)

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-8 py-16">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
        <div>
          <span className="font-hand text-teal-dark text-lg">✦ Admin dashboard</span>
          <h1 className="font-hand text-3xl sm:text-4xl mt-1">
            Welcome back, {session?.name?.split(' ')[0] || 'Admin'} ☀️
          </h1>
        </div>
        <Button onClick={logout} variant="dark">
          Log out
        </Button>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8">
        <div className="sketch-card p-6 h-fit">
          <h2 className="font-hand text-2xl mb-4 flex items-center gap-2">
            <IconBulb className="w-6 h-6 text-bulb-dark" /> Add a product demo
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <FormField label="Product name">
              <input
                required
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                className={inputClass}
                placeholder="Illuminator Whatever"
              />
            </FormField>
            <FormField label="Short tagline (shown on the card)">
              <input
                required
                value={form.tagline}
                onChange={(e) => update('tagline', e.target.value)}
                className={inputClass}
                placeholder="One punchy line about it"
              />
            </FormField>
            <FormField label="Full description (shown in the demo modal)">
              <textarea
                value={form.description}
                onChange={(e) => update('description', e.target.value)}
                rows={3}
                className={inputClass}
                placeholder="What does it do?"
              />
            </FormField>
            <FormField label="Category">
              <input
                required
                list="category-options"
                value={form.category}
                onChange={(e) => update('category', e.target.value)}
                className={inputClass}
                placeholder="CRM, ERM, Analytics…"
              />
              <datalist id="category-options">
                {categorySuggestions.map((c) => (
                  <option key={c} value={c} />
                ))}
              </datalist>
            </FormField>
            <FormField label="Demo link (optional)">
              <input
                value={form.link}
                onChange={(e) => update('link', e.target.value)}
                className={inputClass}
                placeholder="https://your-demo.com"
                type="url"
              />
            </FormField>
            <FormField label="Icon">
              <div className="flex flex-wrap gap-2 mt-1">
                {iconOptions.map((key) => {
                  const Icon = iconMap[key]
                  const active = form.icon === key
                  return (
                    <button
                      type="button"
                      key={key}
                      onClick={() => update('icon', key)}
                      className={`w-11 h-11 rounded-full flex items-center justify-center sketch-border transition-colors ${
                        active ? 'bg-bulb text-ink' : 'bg-paper text-ink-soft'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </button>
                  )
                })}
              </div>
            </FormField>

            <Button type="submit" variant="primary" className="w-full justify-center">
              Publish product
            </Button>

            <AnimatePresence>
              {message && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="font-hand text-teal-dark text-center"
                >
                  ✓ {message}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>

        <div>
          <h2 className="font-hand text-2xl mb-4">Live products ({sorted.length})</h2>
          <div className="space-y-3 max-h-[42rem] overflow-y-auto pr-1 no-scrollbar">
            <AnimatePresence>
              {sorted.map((p) => {
                const Icon = iconMap[p.icon] || fallbackIcon
                return (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="sketch-card p-4 flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-bulb/10 text-bulb-dark flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-hand text-lg truncate">{p.name}</p>
                      <p className="font-body text-xs text-ink-soft truncate">
                        {p.category} · {p.tagline}
                      </p>
                    </div>
                    <button
                      onClick={() => removeProduct(p.id)}
                      className="font-hand text-marker text-sm shrink-0 hover:underline"
                    >
                      Remove
                    </button>
                  </motion.div>
                )
              })}
            </AnimatePresence>
            {sorted.length === 0 && (
              <p className="font-body text-ink-soft text-center py-10">No products yet — add your first one!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
