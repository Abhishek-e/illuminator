import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const MotionLink = motion.create(Link)

const variants = {
  primary: 'bg-bulb hover:bg-bulb-light text-ink',
  dark: 'bg-ink hover:bg-ink/90 text-paper-light',
  outline: 'bg-paper-light hover:bg-paper-dark text-ink',
  teal: 'bg-teal hover:bg-teal-dark text-paper-light',
  marker: 'bg-marker hover:opacity-90 text-paper-light',
}

const shared =
  'inline-flex items-center justify-center gap-2 px-6 py-3 font-hand text-lg sketch-border shadow-sketch select-none cursor-pointer whitespace-nowrap'

const motionProps = {
  whileHover: { y: -3, rotate: -0.6 },
  whileTap: { y: 1, x: 1, boxShadow: 'none' },
  transition: { type: 'spring', stiffness: 400, damping: 15 },
}

export default function Button({
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  children,
  disabled = false,
}) {
  const classes = `${shared} ${variants[variant]} ${className} ${disabled ? 'opacity-50 pointer-events-none' : ''}`

  if (to) {
    return (
      <MotionLink to={to} onClick={onClick} className={classes} {...motionProps}>
        {children}
      </MotionLink>
    )
  }

  if (href) {
    return (
      <motion.a href={href} target="_blank" rel="noreferrer" className={classes} {...motionProps}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type={type} onClick={onClick} disabled={disabled} className={classes} {...motionProps}>
      {children}
    </motion.button>
  )
}
