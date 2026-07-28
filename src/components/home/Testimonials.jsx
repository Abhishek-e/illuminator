import Reveal from '../Reveal'

const testimonials = [
  {
    quote:
      'Illuminator replaced four spreadsheets and a prayer. Our risk reviews now take an hour, not a week.',
    name: 'Maya Chen',
    role: 'Head of Risk, Northwind Traders',
    color: 'bg-indigo/15 text-indigo',
  },
  {
    quote:
      "Our sales team finally stopped losing leads in someone's inbox. Pipeline visibility changed overnight.",
    name: 'Diego Ruiz',
    role: 'VP Sales, Globex Corp',
    color: 'bg-teal/15 text-teal-dark',
  },
  {
    quote: 'The dashboards are the first thing our board actually asks to see in meetings.',
    name: 'Priya Nair',
    role: 'COO, Initech Labs',
    color: 'bg-bulb/20 text-bulb-dark',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 max-w-6xl mx-auto px-6 md:px-8 scroll-mt-20">
      <Reveal className="text-center max-w-2xl mx-auto mb-16">
        <span className="font-hand text-marker text-lg">✦ Kind words</span>
        <h2 className="font-hand text-3xl sm:text-4xl md:text-5xl mt-2">Loved by risk &amp; sales teams alike</h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.12}>
            <div
              className={`tape sketch-card p-6 h-full flex flex-col ${i % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[2deg]'}`}
            >
              <p className="font-hand text-3xl text-bulb-dark leading-none">&ldquo;</p>
              <p className="font-body text-ink-soft flex-1 -mt-2">{t.quote}</p>
              <div className="flex items-center gap-3 mt-5">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-hand ${t.color}`}>
                  {t.name.split(' ').map((p) => p[0]).join('')}
                </div>
                <div>
                  <p className="font-hand text-lg leading-none">{t.name}</p>
                  <p className="font-body text-xs text-ink-soft mt-1">{t.role}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
