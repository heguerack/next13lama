'use client'
import { useState, useEffect } from 'react'
import styles from './page.module.css'
import useSWR from 'swr'
import { SessionProvider } from 'next-auth/react'

export default function dashboardPage() {
  // seems like this function can only beclled inside the body on main function
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error, isLoading } = useSWR(
    `https://jsonplaceholder.typicode.com/posts`,
    fetcher
  )
  // instead we will use SWR, kind of like reactQuery
  // const [data, setData] = useState([])
  // const [err, setErr] = useState(false)
  // const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   async function getData() {
  //     setIsLoading(true)
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
  //       cache: 'no-store',
  //     })
  //     if (!res.ok) {
  //       setErr(true)
  //     }
  //     setData(await res.json())
  //     setIsLoading(false)
  //     // return res.json()
  //   }
  //   getData()
  // }, [])

  console.log(data)
  return <div>dashboardPage</div>
}
