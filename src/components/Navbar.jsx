import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { IconBulb, IconMenu, IconClose } from './icons/DoodleIcons'
import Button from './Button'
import { useAuth } from '../context/AuthContext'

const navLinks = [
  { label: 'Features', to: '/#features' },
  { label: 'How it Works', to: '/#how-it-works' },
  { label: 'Products', to: '/products' },
  { label: 'Testimonials', to: '/#testimonials' },
  { label: 'FAQ', to: '/#faq' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { session, isAdmin, logout } = useAuth()
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b-2 border-ink/10">
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <IconBulb className="w-9 h-9 text-bulb-dark group-hover:animate-wiggle" />
          <span className="font-hand text-xl sm:text-2xl leading-none">
            Illuminator <span className="text-bulb-dark">Technologies</span>
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-6 font-hand text-lg shrink-0">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to} className="underline-squiggle-hover hover:text-bulb-dark transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-3 shrink-0">
          {session ? (
            <>
              {!isAdmin && (
                <span className="font-hand text-ink/70 max-w-[8rem] truncate">
                  Hi, {session.name?.split(' ')[0] || 'there'}
                </span>
              )}
              {isAdmin && (
                <Button to="/admin/dashboard" variant="outline" className="text-base px-4 py-2">
                  Dashboard
                </Button>
              )}
              <Button onClick={logout} variant="dark" className="text-base px-4 py-2">
                Log out
              </Button>
            </>
          ) : (
            <Button to="/login" variant="primary" className="text-base px-5 py-2.5">
              Sign in
            </Button>
          )}
        </div>

        <button
          className="xl:hidden p-2 text-ink shrink-0"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <IconClose className="w-7 h-7" /> : <IconMenu className="w-7 h-7" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden overflow-hidden border-t-2 border-ink/10 bg-paper"
          >
            <div className="flex flex-col gap-4 px-6 py-6 font-hand text-lg">
              {navLinks.map((link) => (
                <Link key={link.label} to={link.to}>
                  {link.label}
                </Link>
              ))}
              <hr className="border-ink/10" />
              {session ? (
                <>
                  <span className="text-ink/70">Hi, {session.name?.split(' ')[0] || 'there'}</span>
                  {isAdmin && (
                    <Button to="/admin/dashboard" variant="outline">
                      Dashboard
                    </Button>
                  )}
                  <Button onClick={logout} variant="dark">
                    Log out
                  </Button>
                </>
              ) : (
                <Button to="/login" variant="primary">
                  Sign in
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
