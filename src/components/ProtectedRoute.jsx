import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute({ children, role = 'admin', redirectTo = '/admin' }) {
  const { session, ready } = useAuth()

  if (!ready) return null
  if (!session || session.type !== role) {
    return <Navigate to={redirectTo} replace />
  }
  return children
}
