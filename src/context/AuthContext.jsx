import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from '../lib/firebase'

const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

async function checkIsAdmin(uid) {
  const snap = await getDoc(doc(db, 'admins', uid))
  return snap.exists()
}

function toSession(user, isAdmin) {
  return {
    type: isAdmin ? 'admin' : 'user',
    uid: user.uid,
    email: user.email,
    name: user.displayName || user.email,
  }
}

export function AuthProvider({ children }) {
  const [session, setSessionState] = useState(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setSessionState(null)
        setReady(true)
        return
      }
      const isAdmin = await checkIsAdmin(user.uid)
      setSessionState(toSession(user, isAdmin))
      setReady(true)
    })
    return unsubscribe
  }, [])

  const signup = useCallback(async ({ name, email, password }) => {
    const cred = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(cred.user, { displayName: name })
    const nextSession = toSession({ ...cred.user, displayName: name }, false)
    setSessionState(nextSession)
    return nextSession
  }, [])

  const login = useCallback(async ({ email, password }) => {
    const cred = await signInWithEmailAndPassword(auth, email, password)
    const isAdmin = await checkIsAdmin(cred.user.uid)
    const nextSession = toSession(cred.user, isAdmin)
    setSessionState(nextSession)
    return nextSession
  }, [])

  const adminLogin = useCallback(async ({ email, password }) => {
    const cred = await signInWithEmailAndPassword(auth, email, password)
    const isAdmin = await checkIsAdmin(cred.user.uid)
    if (!isAdmin) {
      await signOut(auth)
      throw new Error('This account does not have admin access.')
    }
    const nextSession = toSession(cred.user, true)
    setSessionState(nextSession)
    return nextSession
  }, [])

  const loginWithGoogle = useCallback(async () => {
    const cred = await signInWithPopup(auth, googleProvider)
    const isAdmin = await checkIsAdmin(cred.user.uid)
    const nextSession = toSession(cred.user, isAdmin)
    setSessionState(nextSession)
    return nextSession
  }, [])

  const adminLoginWithGoogle = useCallback(async () => {
    const cred = await signInWithPopup(auth, googleProvider)
    const isAdmin = await checkIsAdmin(cred.user.uid)
    if (!isAdmin) {
      await signOut(auth)
      throw new Error('This account does not have admin access.')
    }
    const nextSession = toSession(cred.user, true)
    setSessionState(nextSession)
    return nextSession
  }, [])

  const logout = useCallback(async () => {
    await signOut(auth)
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
    loginWithGoogle,
    adminLoginWithGoogle,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}
