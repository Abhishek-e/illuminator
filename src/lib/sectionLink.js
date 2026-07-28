import { useNavigate, useLocation } from 'react-router-dom'

export function useSectionLink() {
  const navigate = useNavigate()
  const location = useLocation()

  return function goToSection(e, sectionId) {
    e.preventDefault()
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate('/', { state: { scrollTo: sectionId } })
    }
  }
}
