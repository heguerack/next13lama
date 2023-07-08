'use client'
import { useThemeContext } from '@/lib/context/ThemeContext'
// import { useContext } from 'react'
// import { ThemeContext } from '@/utils/context/themeContext'
import styles from './darkmodeToggle.module.css'

const DarkModeToggle = () => {
  const { toggle, mode } = useThemeContext()
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === 'light' ? { left: '2px' } : { right: '2px' }}
      />
    </div>
  )
}

export default DarkModeToggle
