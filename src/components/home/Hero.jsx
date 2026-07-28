import { motion } from 'framer-motion'
import Button from '../Button'
import Reveal from '../Reveal'
import { IconBulb, IconSpark, IconCheck } from '../icons/DoodleIcons'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 sketch-border bg-paper-light px-4 py-1.5 font-hand text-sm rotate-[-1deg] shadow-sketch">
              <IconSpark className="w-4 h-4 text-bulb-dark" />
              ERM · CRM · Management — all in one
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-hand text-4xl sm:text-5xl md:text-6xl leading-[1.1] mt-6">
              Light up your Business with{' '}
              <span className="relative inline-block text-bulb-dark">
                Illuminator
                <svg
                  className="absolute left-0 -bottom-2 w-full"
                  viewBox="0 0 200 20"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 12 Q 30 2, 55 12 T 105 12 T 155 12 T 198 12"
                    stroke="#FFB703"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-body text-lg text-ink-soft mt-6 max-w-lg">
              Illuminator Technologies unifies enterprise risk, customer relationships and day-to-day operations into
              one bright, refreshingly simple platform — so nothing your business needs stays in the dark.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button to="/login" variant="primary" className="text-xl px-7 py-3.5">
                Get Started Free
              </Button>
              <Button to="/products" variant="outline" className="text-xl px-7 py-3.5">
                Explore Products
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-6 font-body text-sm text-ink-soft">
              {['No credit card needed', 'Free 14-day glow-up', 'Cancel any time'].map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <IconCheck className="w-4 h-4 text-teal-dark" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="relative flex items-center justify-center h-80 md:h-[26rem]">
          <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-dashed border-bulb/40 animate-[spin_30s_linear_infinite]" />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative animate-float"
          >
            <IconBulb className="w-48 h-48 md:w-64 md:h-64 text-bulb-dark animate-flicker" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10, rotate: -6 }}
            animate={{ opacity: 1, y: 0, rotate: -4 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="tape absolute top-4 right-0 sm:right-4 sketch-card px-4 py-2 text-center"
          >
            <p className="font-hand text-2xl text-teal-dark leading-none">−35%</p>
            <p className="font-body text-xs text-ink-soft">business risk</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10, rotate: 6 }}
            animate={{ opacity: 1, y: 0, rotate: 3 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="tape absolute bottom-2 left-0 sm:left-2 sketch-card px-4 py-2 text-center"
          >
            <p className="font-hand text-2xl text-bulb-dark leading-none">10k+</p>
            <p className="font-body text-xs text-ink-soft">happy teams</p>
          </motion.div>

          <IconSpark className="w-6 h-6 text-bulb-dark absolute top-8 left-6 animate-pulse" />
          <IconSpark className="w-4 h-4 text-teal-dark absolute bottom-10 right-10 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
