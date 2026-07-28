import Reveal from '../Reveal'
import { IconLink } from '../icons/DoodleIcons'

const tools = ['Slack', 'Microsoft Teams', 'Salesforce', 'Google Workspace', 'Zapier', 'Notion', 'HubSpot', 'Jira']

export default function Integrations() {
  return (
    <section className="py-20 max-w-5xl mx-auto px-6 md:px-8 text-center">
      <Reveal>
        <span className="font-hand text-teal-dark text-lg">✦ Plays well with others</span>
        <h2 className="font-hand text-3xl sm:text-4xl mt-2">Connects to the tools you already use</h2>
      </Reveal>

      <div className="flex flex-wrap justify-center gap-3 mt-10">
        {tools.map((tool, i) => (
          <Reveal key={tool} delay={i * 0.05}>
            <span
              className={`inline-flex items-center gap-2 sketch-border bg-paper-light px-4 py-2 font-hand text-base shadow-sketch ${i % 2 === 0 ? 'rotate-[-1deg]' : 'rotate-[1deg]'}`}
            >
              <IconLink className="w-5 h-5 text-indigo" />
              {tool}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
