import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IconBulb, IconSpark } from './icons/DoodleIcons'
import Button from './Button'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(e) {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer id="contact" className="relative mt-24 bg-ink text-paper-light">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 grid gap-12 grid-cols-2 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <IconBulb className="w-8 h-8 text-bulb" />
            <span className="font-hand text-2xl">Illuminator Technologies</span>
          </div>
          <p className="font-script text-2xl text-bulb-light mb-3">Light up your Business with Illuminator</p>
          <p className="text-paper-light/70 max-w-xs">
            The ERM, CRM and management platform that keeps your risk, your customers and your operations glowing in
            one place.
          </p>
        </div>

        <div>
          <h4 className="font-hand text-xl mb-4 text-bulb-light">Explore</h4>
          <ul className="space-y-2 text-paper-light/80">
            <li>
              <Link to="/#features" className="hover:text-bulb">Features</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-bulb">Products</Link>
            </li>
            <li>
              <Link to="/#how-it-works" className="hover:text-bulb">How it Works</Link>
            </li>
            <li>
              <Link to="/#testimonials" className="hover:text-bulb">Testimonials</Link>
            </li>
            <li>
              <Link to="/#faq" className="hover:text-bulb">FAQ</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-hand text-xl mb-4 text-bulb-light">Account</h4>
          <ul className="space-y-2 text-paper-light/80">
            <li>
              <Link to="/login" className="hover:text-bulb">Sign in</Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-bulb">Create account</Link>
            </li>
            <li>
              <Link to="/admin" className="hover:text-bulb">Admin</Link>
            </li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1">
          <h4 className="font-hand text-xl mb-4 text-bulb-light">Stay in the light</h4>
          <p className="text-paper-light/70 mb-3 text-sm">Get product updates. No spam, promise.</p>
          {subscribed ? (
            <p className="font-hand text-bulb-light">✓ You're on the list!</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="min-w-0 flex-1 rounded-md px-3 py-2 text-ink bg-paper-light border-2 border-transparent focus:border-bulb focus:outline-none"
              />
              <Button type="submit" variant="primary" className="px-4 py-2 text-base">
                Join
              </Button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-paper-light/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-paper-light/60 text-center">
          <p>© {new Date().getFullYear()} Illuminator Technologies. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <IconSpark className="w-4 h-4 text-bulb" /> and a lot of coffee.
          </p>
        </div>
      </div>
    </footer>
  )
}
