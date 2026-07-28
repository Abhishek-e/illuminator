import Reveal from '../Reveal'
import { IconChat, IconShield, IconGear, IconChart, IconLock, IconLink } from '../icons/DoodleIcons'

const features = [
  {
    icon: IconChat,
    title: 'Customer Relationship Management',
    desc: 'Every lead, deal and conversation tracked automatically so no customer feels forgotten.',
    color: 'text-indigo bg-indigo/10',
  },
  {
    icon: IconShield,
    title: 'Enterprise Risk Management',
    desc: 'Score, heatmap and squash risks before they turn into headlines.',
    color: 'text-marker bg-marker/10',
  },
  {
    icon: IconGear,
    title: 'Workflow Automation',
    desc: 'Approvals, escalations and hand-offs between teams that run themselves.',
    color: 'text-teal-dark bg-teal/10',
  },
  {
    icon: IconChart,
    title: 'Analytics & Reporting',
    desc: 'Live KPI dashboards your whole leadership team will actually open.',
    color: 'text-bulb-dark bg-bulb/10',
  },
  {
    icon: IconLock,
    title: 'Compliance & Security',
    desc: 'Audit trails, access control and policy storage, always in order.',
    color: 'text-ink bg-ink/5',
  },
  {
    icon: IconLink,
    title: 'Integrations',
    desc: 'Connect Slack, Salesforce, Teams and 50+ tools in a couple of clicks.',
    color: 'text-indigo bg-indigo/10',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 max-w-6xl mx-auto px-6 md:px-8 scroll-mt-20">
      <Reveal className="text-center max-w-2xl mx-auto mb-16">
        <span className="font-hand text-bulb-dark text-lg">✦ Everything in one place</span>
        <h2 className="font-hand text-3xl sm:text-4xl md:text-5xl mt-2">Three platforms. One glowing dashboard.</h2>
        <p className="font-body text-ink-soft mt-4">
          Stop juggling separate tools for risk, customers and operations — Illuminator brings them together so your
          team always knows where they stand.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <Reveal key={feature.title} delay={(i % 3) * 0.1}>
            <div
              className={`sketch-card p-6 h-full ${i % 2 === 0 ? 'rotate-[-1deg]' : 'rotate-[1deg]'} hover:rotate-0 hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center ${feature.color}`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="font-hand text-2xl mt-4">{feature.title}</h3>
              <p className="font-body text-ink-soft mt-2">{feature.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
