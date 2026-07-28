import Reveal from '../Reveal'
import { IconArrowSquiggle } from '../icons/DoodleIcons'

const steps = [
  { n: '1', title: 'Sign up in seconds', desc: 'Create your free account — no credit card, no sales call.' },
  { n: '2', title: 'Connect your data', desc: 'Import contacts, risks and workflows from your existing tools.' },
  { n: '3', title: 'Let Illuminator glow', desc: 'Automations, dashboards and alerts switch on instantly.' },
  { n: '4', title: 'Grow with confidence', desc: 'Make decisions with full visibility across the business.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-paper-dark/40 border-y-2 border-ink/10 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-hand text-teal-dark text-lg">✦ Getting started is easy</span>
          <h2 className="font-hand text-3xl sm:text-4xl md:text-5xl mt-2">How it works</h2>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-10 md:gap-6 relative">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.12} className="relative flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full sketch-border bg-paper-light flex items-center justify-center shadow-sketch shrink-0">
                <span className="font-hand text-3xl text-bulb-dark">{step.n}</span>
              </div>
              <h3 className="font-hand text-xl mt-4">{step.title}</h3>
              <p className="font-body text-ink-soft text-sm mt-2 max-w-[16rem]">{step.desc}</p>

              {i < steps.length - 1 && (
                <IconArrowSquiggle className="hidden md:block absolute top-8 -right-6 w-14 h-6 text-ink/30 rotate-0" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
