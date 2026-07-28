import { useEffect, useState } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import Button from '../components/Button'
import FormField, { inputClass } from '../components/FormField'
import { IconBulb, IconCheck } from '../components/icons/DoodleIcons'

export default function Login() {
  const [mode, setMode] = useState('signin')
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login, signup, session } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.hash === '#signup') setMode('signup')
  }, [location.hash])

  useEffect(() => {
    if (session?.type === 'user') navigate('/', { replace: true })
  }, [session, navigate])

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (mode === 'signup') {
      if (!form.name.trim()) {
        setError('Please tell us your name.')
        return
      }
      if (form.password.length < 6) {
        setError('Password must be at least 6 characters.')
        return
      }
      if (form.password !== form.confirm) {
        setError('Passwords do not match.')
        return
      }
    }

    setLoading(true)
    try {
      if (mode === 'signup') {
        await signup({ name: form.name.trim(), email: form.email.trim(), password: form.password })
      } else {
        await login({ email: form.email.trim(), password: form.password })
      }
      navigate('/')
    } catch (err) {
      setError(err.message || 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-4xl grid md:grid-cols-2 sketch-card overflow-hidden bg-paper-light shadow-sketch-lg">
        <div className="hidden md:flex flex-col justify-center items-center gap-4 bg-ink text-paper-light p-10 text-center">
          <IconBulb className="w-20 h-20 text-bulb animate-flicker" />
          <p className="font-hand text-2xl">Light up your Business with Illuminator</p>
          <p className="font-body text-paper-light/70 text-sm max-w-xs">
            Sign in to manage your risk, your customers and your operations — all from one glowing dashboard.
          </p>
          <ul className="space-y-2 mt-4 text-sm">
            {['Free 14-day trial', 'No credit card needed', 'Cancel any time'].map((t) => (
              <li key={t} className="flex items-center gap-2 text-paper-light/80">
                <IconCheck className="w-4 h-4 text-bulb shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 sm:p-10">
          <div className="relative flex sketch-border p-1 bg-paper mb-8">
            {['signin', 'signup'].map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => {
                  setMode(m)
                  setError('')
                }}
                className={`relative z-10 flex-1 py-2 font-hand text-lg rounded transition-colors ${
                  mode === m ? 'text-paper-light' : 'text-ink'
                }`}
              >
                {m === 'signin' ? 'Sign In' : 'Create Account'}
              </button>
            ))}
            <motion.div
              className="absolute left-1 inset-y-1 w-[calc(50%-4px)] bg-ink rounded"
              animate={{ x: mode === 'signin' ? 0 : '100%' }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.form
              key={mode}
              initial={{ opacity: 0, x: mode === 'signin' ? -10 : 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {mode === 'signup' && (
                <FormField label="Full name">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    type="text"
                    placeholder="Jordan Lee"
                    className={inputClass}
                  />
                </FormField>
              )}
              <FormField label="Email">
                <input
                  required
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  type="email"
                  placeholder="you@company.com"
                  className={inputClass}
                />
              </FormField>
              <FormField label="Password">
                <input
                  required
                  value={form.password}
                  onChange={(e) => update('password', e.target.value)}
                  type="password"
                  placeholder="••••••••"
                  className={inputClass}
                />
              </FormField>
              {mode === 'signup' && (
                <FormField label="Confirm password">
                  <input
                    required
                    value={form.confirm}
                    onChange={(e) => update('confirm', e.target.value)}
                    type="password"
                    placeholder="••••••••"
                    className={inputClass}
                  />
                </FormField>
              )}

              {error && (
                <p className="text-marker font-body text-sm bg-marker/10 sketch-border px-3 py-2">{error}</p>
              )}

              <Button type="submit" variant="primary" disabled={loading} className="w-full justify-center mt-2">
                {loading ? 'One moment…' : mode === 'signin' ? 'Sign In' : 'Create Account'}
              </Button>
            </motion.form>
          </AnimatePresence>

          <p className="text-center font-body text-sm text-ink-soft mt-6">
            Are you an admin?{' '}
            <Link to="/admin" className="text-indigo underline">
              Go to Admin login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
