export const seedProducts = [
  {
    id: 'seed-crm',
    name: 'Illuminator CRM Suite',
    tagline: 'Track leads, deals and every customer chat in one glowing pipeline.',
    description:
      'A full customer relationship hub built for growing teams — capture leads, visualize your pipeline stage by stage, log every call and email automatically, and get nudged before a deal goes cold. Built-in reminders keep your team following up on time, every time.',
    category: 'CRM',
    icon: 'chat',
    link: '#',
    addedAt: Date.now() - 1000 * 60 * 60 * 24 * 30,
  },
  {
    id: 'seed-erm',
    name: 'Illuminator Risk Radar',
    tagline: 'Spot, score and squash enterprise risks before they spread.',
    description:
      'Enterprise risk management with real heatmaps, not spreadsheets. Register risks, assign owners, score likelihood vs. impact, and track remediation to close. Executive roll-ups give leadership a shared, real-time view of every open risk across the business.',
    category: 'ERM',
    icon: 'shield',
    link: '#',
    addedAt: Date.now() - 1000 * 60 * 60 * 24 * 26,
  },
  {
    id: 'seed-flow',
    name: 'Illuminator Flow',
    tagline: 'Automate approvals and workflows without writing a line of code.',
    description:
      'Drag-and-drop workflow builder for approvals, onboarding, escalations and hand-offs between teams. Trigger actions on due dates, form submissions, or status changes, and watch busywork disappear from your team\'s plate.',
    category: 'Automation',
    icon: 'gear',
    link: '#',
    addedAt: Date.now() - 1000 * 60 * 60 * 24 * 20,
  },
  {
    id: 'seed-insights',
    name: 'Illuminator Insights',
    tagline: 'Real-time dashboards and KPI heatmaps for every team.',
    description:
      'Turn raw CRM and risk data into dashboards a whole company can actually read. Drag in charts, set live KPI targets, and share a link with the board instead of exporting yet another slide deck.',
    category: 'Analytics',
    icon: 'chart',
    link: '#',
    addedAt: Date.now() - 1000 * 60 * 60 * 24 * 14,
  },
  {
    id: 'seed-vault',
    name: 'Illuminator Vault',
    tagline: 'Centralize compliance docs, audits and policy trails securely.',
    description:
      'One locked, versioned home for every policy, audit trail and compliance certificate. Role-based access keeps sensitive documents visible only to the right people, with a full history of who viewed or changed what.',
    category: 'Compliance',
    icon: 'lock',
    link: '#',
    addedAt: Date.now() - 1000 * 60 * 60 * 24 * 9,
  },
  {
    id: 'seed-connect',
    name: 'Illuminator Connect',
    tagline: 'Plug into Slack, Teams, Salesforce and 50+ tools in minutes.',
    description:
      'A two-way integration hub that keeps Illuminator in sync with the tools your team already lives in. Push risk alerts to Slack, sync contacts with your inbox, and connect Salesforce or HubSpot without touching a line of code.',
    category: 'Integrations',
    icon: 'link',
    link: '#',
    addedAt: Date.now() - 1000 * 60 * 60 * 24 * 3,
  },
]
