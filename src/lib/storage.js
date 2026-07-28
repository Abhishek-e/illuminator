const USERS_KEY = 'illuminator_users'
const ADMIN_KEY = 'illuminator_admin'
const SESSION_KEY = 'illuminator_session'
const PRODUCTS_KEY = 'illuminator_products'

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getUsers = () => read(USERS_KEY, [])
export const saveUsers = (users) => write(USERS_KEY, users)

export const getAdmin = () => read(ADMIN_KEY, null)
export const saveAdmin = (admin) => write(ADMIN_KEY, admin)

export const getSession = () => read(SESSION_KEY, null)
export const saveSession = (session) => write(SESSION_KEY, session)
export const clearSession = () => localStorage.removeItem(SESSION_KEY)

export const getProducts = () => read(PRODUCTS_KEY, null)
export const saveProducts = (products) => write(PRODUCTS_KEY, products)
