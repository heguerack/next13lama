'use client'
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
export default function loginPage({ url }) {
  const { data: session, status } = useSession()

  const router = useRouter()
  const params = useSearchParams()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  // useEffect(() => {
  //   setError(params.get('error'))
  //   setSuccess(params.get('success'))
  // }, [params])

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value
    signIn('credentials', {
      email,
      password,
    })
  }
  if (status === 'loading') {
    return <p>Loading...</p>
  }
  if (status === 'authenticated') {
    router.push('/dashboard')
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Email'
          required
          className={styles.input}
        />
        <input
          type='password'
          placeholder='Password'
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
      </form>
      <button className={styles.button} onClick={() => signIn('google')}>
        Sign In with google
      </button>
    </div>
  )
}
