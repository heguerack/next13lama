'use client'
import styles from './navbar.module.css'
import Link from 'next/link'
import { links } from '../../../public/data'
import DarkModeToggle from '../darkmodeToggle/DarkmodeToggle'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Navbar() {
  const { data: session } = useSession()
  console.log(session)
  return (
    <nav className={styles.container}>
      <div className={styles.links}>
        <p className=''>FDM</p>
        <div className={styles.rightLinks}>
          <DarkModeToggle />
          {links?.map((link) => (
            <Link href={link.url} key={link.id} className={styles.link}>
              {link.title}
            </Link>
          ))}
          {session && (
            <button onClick={signOut} type='button' className='button'>
              Logout
            </button>
          )}
          {!session && (
            <button onClick={signIn} type='button' className='button'>
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
