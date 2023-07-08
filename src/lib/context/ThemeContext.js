'use client'
import { createContext, useState, useContext } from 'react'
export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light')
  const toggle = () => {
    console.log('toggling!')
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }
  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  )
}
export const useThemeContext = () => {
  return useContext(ThemeContext)
}
