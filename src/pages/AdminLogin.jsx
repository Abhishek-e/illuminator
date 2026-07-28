import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Button from '../components/Button'
import FormField, { inputClass } from '../components/FormField'
import { IconShield, IconPin } from '../components/icons/DoodleIcons'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { adminLogin, session, adminEmailHint, adminPasswordHint } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (session?.type === 'admin') navigate('/admin/dashboard', { replace: true })
  }, [session, navigate])

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await adminLogin({ email, password })
      navigate('/admin/dashboard')
    } catch (err) {
      setError(err.message || 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="sketch-card bg-paper-light p-8 shadow-sketch-lg">
          <div className="flex flex-col items-center text-center mb-6">
            <IconShield className="w-14 h-14 text-marker" />
            <h1 className="font-hand text-3xl mt-3">Admin Login</h1>
            <p className="font-body text-ink-soft text-sm mt-1">Manage the products shown across Illuminator.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <FormField label="Admin email">
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@illuminator.tech"
                className={inputClass}
              />
            </FormField>
            <FormField label="Password">
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={inputClass}
              />
            </FormField>

            {error && <p className="text-marker font-body text-sm bg-marker/10 sketch-border px-3 py-2">{error}</p>}

            <Button type="submit" variant="dark" disabled={loading} className="w-full justify-center mt-2">
              {loading ? 'Checking…' : 'Enter Dashboard'}
            </Button>
          </form>
        </div>

        <div className="tape sketch-card bg-bulb/20 mt-8 mx-6 p-4 rotate-[-2deg] relative">
          <p className="font-hand text-sm flex items-center gap-1 text-ink-soft">
            <IconPin className="w-4 h-4" /> Demo credentials
          </p>
          <p className="font-body text-sm mt-1">
            <span className="font-semibold">{adminEmailHint}</span>
            <br />
            <span className="font-semibold">{adminPasswordHint}</span>
          </p>
        </div>

        <p className="text-center font-body text-sm text-ink-soft mt-6">
          Not an admin? <Link to="/login" className="text-indigo underline">Go to user sign in</Link>
        </p>
      </div>
    </div>
  )
}
