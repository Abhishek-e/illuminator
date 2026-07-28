import Reveal from '../Reveal'

const companies = ['Northwind Traders', 'Globex Corp', 'Initech Labs', 'Umbrella Group', 'Wonka Industries', 'Hooli Inc']
const badges = ['ISO 27001 ready', 'SOC 2 aligned', 'GDPR compliant']

export default function TrustBar() {
  const loop = [...companies, ...companies]

  return (
    <section className="py-10 border-y-2 border-ink/10 bg-paper-dark/40">
      <Reveal>
        <p className="text-center font-hand text-lg text-ink-soft mb-6">
          Trusted by teams who like sleeping at night 😌
        </p>
      </Reveal>

      <div className="overflow-hidden no-scrollbar mask-fade">
        <div className="flex gap-10 w-max animate-marquee">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-hand text-xl sm:text-2xl text-ink/50 whitespace-nowrap px-2"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-8 px-6">
        {badges.map((badge, i) => (
          <Reveal key={badge} delay={i * 0.1}>
            <span className="inline-block sketch-border bg-paper-light px-4 py-1.5 font-hand text-sm text-ink-soft rotate-[-1deg]">
              🔒 {badge}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
