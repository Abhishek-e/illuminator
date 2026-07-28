export const inputClass =
  'w-full px-4 py-2.5 rounded-md bg-paper border-2 border-ink/15 focus:border-bulb-dark focus:outline-none font-body'

export default function FormField({ label, children }) {
  return (
    <label className="block">
      <span className="font-hand text-sm text-ink-soft">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  )
}
