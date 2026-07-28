import Reveal from '../Reveal'
import Button from '../Button'
import { IconBulb } from '../icons/DoodleIcons'

export default function CTASection() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-8 py-10">
      <Reveal>
        <div className="relative sketch-card bg-bulb/15 px-8 py-16 text-center overflow-hidden">
          <IconBulb className="w-16 h-16 text-bulb-dark mx-auto animate-wiggle" />
          <h2 className="font-hand text-3xl sm:text-4xl md:text-5xl mt-4">Ready to light up your business?</h2>
          <p className="font-body text-ink-soft mt-4 max-w-xl mx-auto">
            Join thousands of teams who ditched the spreadsheets and turned on Illuminator. Setup takes minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button to="/login" variant="primary" className="text-xl px-8 py-3.5">
              Create your free account
            </Button>
            <Button to="/#contact" variant="outline" className="text-xl px-8 py-3.5">
              Talk to us
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
