import styles from './page.module.css'

export default function layout({ children }) {
  return (
    <div>
      <h1 className={styles.mainTile}>Our Works</h1>
      {children}
    </div>
  )
}
