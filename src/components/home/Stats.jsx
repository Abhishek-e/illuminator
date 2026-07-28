import Reveal from '../Reveal'
import Counter from '../Counter'

const stats = [
  { value: 10200, suffix: '+', label: 'Businesses illuminated' },
  { value: 35, suffix: '%', label: 'Avg. risk reduction' },
  { value: 99.9, suffix: '%', decimals: 1, label: 'Platform uptime' },
  { value: 4.9, suffix: '/5', decimals: 1, label: 'Customer rating' },
]

export default function Stats() {
  return (
    <section className="py-20 bg-ink text-paper-light">
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1}>
            <p className="font-hand text-4xl sm:text-5xl text-bulb">
              <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals || 0} />
            </p>
            <p className="font-body text-paper-light/70 mt-2 text-sm sm:text-base">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
