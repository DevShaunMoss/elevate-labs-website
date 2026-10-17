export const brand = {
  name: 'Elevate Labs',
  tagline: 'Elevating Businesses Through Technology',
  descriptor: 'Websites · Web Apps · Digital Solutions',
} as const

export const contacts = [
  {
    label: 'Phone / WhatsApp 1',
    display: '097 220 5054',
    phone: '+260972205054',
    whatsapp: '260972205054',
  },
  {
    label: 'Phone / WhatsApp 2',
    display: '076 135 7438',
    phone: '+260761357438',
    whatsapp: '260761357438',
  },
] as const

export const navigation = [
  { id: 'services', label: 'Services' },
  { id: 'packages', label: 'Packages' },
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
] as const

export function whatsappUrl(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
