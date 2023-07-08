'use client'
import { useSession, signIn, signOut } from 'next-auth/react'

import { useState, useEffect } from 'react'
import styles from './page.module.css'
import useSWR, { mutate } from 'swr'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function DashboardPage() {
  const router = useRouter()
  const { data: session, status } = useSession()
  console.log(session?.user.name)

  // seems like this function can only beclled inside the body on main function
  const fetcher = (...args) => fetch(...args).then((res) => res.json())

  const { data, error, isLoading } = useSWR(
    `/api/posts?username=${session?.user.name}`,
    fetcher
  )
  // console.log(data)

  if (status === 'loading') {
    return <p>Loading...</p>
  }
  if (status === 'unauthenticated') {
    router.push('/dashboard/login')
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('handledSubmit jusct ckicked')
    const title = e.target[0].value
    const desc = e.target[1].value
    const image = e.target[2].value
    const content = e.target[3].value
    // console.log(title, desc, image, content)
    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          desc,
          image,
          content,
          username: session.user.name,
        }),
      })
      mutate()
      e.target.reset
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      })
      mutate()
    } catch (error) {}
  }

  if (status === 'authenticated') {
    return (
      <div className={styles.container}>
        {/* <h1>{status === 'authenticated' ? 'we are in :)' : 'we are out :('}</h1> */}
        <div className={styles.posts}>
          {data?.map((post) => (
            <>
              <div className={styles.imgConatiner}>
                <Image src={post.image} alt='effsr' width={200} height={100} />
              </div>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <span
                onClick={() => handleDelete(post._id)}
                className={styles.delete}>
                X
              </span>
            </>
          ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <p>Add new post</p>
          <input type='text' placeholder='title' className={styles.input} />
          <input type='text' placeholder='Desc' className={styles.input} />
          <input type='text' placeholder='Image' className={styles.input} />
          <textarea
            name=''
            id=''
            cols='30'
            rows='10'
            placeholder='Content'
            className={styles.textArea}></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    )
  }
}
