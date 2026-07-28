import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { hashPassword } from '../lib/hash'
import { getUsers, saveUsers, getAdmin, saveAdmin, getSession, saveSession, clearSession } from '../lib/storage'

const AuthContext = createContext(null)

const DEFAULT_ADMIN = {
  name: 'Admin',
  email: 'admin@illuminator.tech',
  password: 'Illuminate#2026',
}

export function AuthProvider({ children }) {
  const [session, setSessionState] = useState(() => getSession())
  const [ready, setReady] = useState(false)

  useEffect(() => {
    async function seedAdmin() {
      if (!getAdmin()) {
        const passwordHash = await hashPassword(DEFAULT_ADMIN.password)
        saveAdmin({ name: DEFAULT_ADMIN.name, email: DEFAULT_ADMIN.email, passwordHash })
      }
      setReady(true)
    }
    seedAdmin()
  }, [])

  const signup = useCallback(async ({ name, email, password }) => {
    const users = getUsers()
    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      throw new Error('An account with this email already exists.')
    }
    const passwordHash = await hashPassword(password)
    const newUser = { id: crypto.randomUUID(), name, email, passwordHash, createdAt: Date.now() }
    saveUsers([...users, newUser])
    const nextSession = { type: 'user', email: newUser.email, name: newUser.name }
    saveSession(nextSession)
    setSessionState(nextSession)
    return nextSession
  }, [])

  const login = useCallback(async ({ email, password }) => {
    const users = getUsers()
    const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase())
    if (!user) throw new Error('No account found with that email.')
    const passwordHash = await hashPassword(password)
    if (passwordHash !== user.passwordHash) throw new Error('Incorrect password.')
    const nextSession = { type: 'user', email: user.email, name: user.name }
    saveSession(nextSession)
    setSessionState(nextSession)
    return nextSession
  }, [])

  const adminLogin = useCallback(async ({ email, password }) => {
    const admin = getAdmin()
    if (!admin) throw new Error('Admin account is still warming up — try again in a second.')
    const passwordHash = await hashPassword(password)
    if (email.trim().toLowerCase() !== admin.email.toLowerCase() || passwordHash !== admin.passwordHash) {
      throw new Error('Invalid admin credentials.')
    }
    const nextSession = { type: 'admin', email: admin.email, name: admin.name }
    saveSession(nextSession)
    setSessionState(nextSession)
    return nextSession
  }, [])

  const logout = useCallback(() => {
    clearSession()
    setSessionState(null)
  }, [])

  const value = {
    session,
    ready,
    isAuthenticated: Boolean(session),
    isUser: session?.type === 'user',
    isAdmin: session?.type === 'admin',
    signup,
    login,
    adminLogin,
    logout,
    adminEmailHint: DEFAULT_ADMIN.email,
    adminPasswordHint: DEFAULT_ADMIN.password,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}
