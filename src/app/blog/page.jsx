import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts/', {
    // { next: { revalidate: 10 } }
    cache: 'no-store',
  })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
// jjjjjjjjjjjjjjjjjjjjjjjj
export default async function BlogPage() {
  const data = await getData()
  console.log(data)
  return (
    <div className={styles.mainContainer}>
      {data?.map((blog) => {
        const { userId, _id: id, title, content, image } = blog
        return (
          <Link href={`/blog/${id}`} className={styles.container} key={id}>
            <div className={styles.imgContainer}>
              <Image src={image} fill={true} className={styles.img} />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.desc}>{content}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
