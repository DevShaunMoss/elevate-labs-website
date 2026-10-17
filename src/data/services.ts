import type { LucideIcon } from 'lucide-react'
import { AppWindow, BriefcaseBusiness, LayoutTemplate, PanelsTopLeft, Sparkles } from 'lucide-react'

export const services: {
  title: string
  description: string
  icon: LucideIcon
}[] = [
  {
    title: 'Business websites',
    description: 'A clear home for your business, services, and the next step you want visitors to take.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Landing pages',
    description: 'A focused page for one offer, event, or campaign—with a direct path to enquire.',
    icon: LayoutTemplate,
  },
  {
    title: 'Portfolio websites',
    description: 'Show your work, skills, or personal brand in a way that is easy to explore.',
    icon: PanelsTopLeft,
  },
  {
    title: 'Web applications',
    description: 'Useful browser-based tools and experiences shaped around a real workflow.',
    icon: AppWindow,
  },
  {
    title: 'Custom digital solutions',
    description: 'A practical digital experience for a specific idea, organisation, or need.',
    icon: Sparkles,
  },
]
