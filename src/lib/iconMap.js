import { IconChat, IconShield, IconGear, IconChart, IconLock, IconLink, IconSpark } from '../components/icons/DoodleIcons'

export const iconMap = {
  chat: IconChat,
  shield: IconShield,
  gear: IconGear,
  chart: IconChart,
  lock: IconLock,
  link: IconLink,
}

export const iconOptions = Object.keys(iconMap)
export const fallbackIcon = IconSpark
