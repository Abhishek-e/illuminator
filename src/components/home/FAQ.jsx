import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '../Reveal'
import { IconPlus, IconMinus } from '../icons/DoodleIcons'

const faqs = [
  {
    q: 'Is Illuminator really one platform for CRM and ERM?',
    a: 'Yes. Customer relationships, enterprise risk, workflow automation and analytics all live in the same dashboard and share the same data — no more exporting from one tool to patch together a report in another.',
  },
  {
    q: 'Do I need a credit card to start?',
    a: "Nope. Every account starts with a free 14-day trial with full access, no card required. We'll only ask for billing details if you decide to keep the lights on.",
  },
  {
    q: 'Can I invite my whole team?',
    a: 'Yes — invite as many teammates as you like. Admins can control who sees what with simple role-based permissions.',
  },
  {
    q: 'How does the Products / demo area work?',
    a: 'Our Products page showcases live demo modules our team is actively building. Our admins publish new demos there as they ship, complete with a short description and a link so you can try them out.',
  },
  {
    q: 'What happens to my data if I cancel?',
    a: 'You can export everything at any time. If you cancel, your data is securely deleted from our systems within 30 days.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-24 max-w-3xl mx-auto px-6 md:px-8 scroll-mt-20">
      <Reveal className="text-center mb-14">
        <span className="font-hand text-indigo text-lg">✦ Questions, answered</span>
        <h2 className="font-hand text-3xl sm:text-4xl md:text-5xl mt-2">Frequently asked questions</h2>
      </Reveal>

      <div className="space-y-4">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <Reveal key={item.q} delay={i * 0.05}>
              <div className="sketch-card overflow-hidden">
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-hand text-xl">{item.q}</span>
                  <span className="shrink-0 text-bulb-dark">
                    {isOpen ? <IconMinus className="w-6 h-6" /> : <IconPlus className="w-6 h-6" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <p className="font-body text-ink-soft px-6 pb-5">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
