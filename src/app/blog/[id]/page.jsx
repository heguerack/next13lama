// import { singleBlog } from '../../../utils/data/blogData'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'
// async function getData(id) {
async function getData({ id }) {
  console.log(id)
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store',
  })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error('Failed to fetch data')
    return notFound()
  }
  return res.json()
}
export default async function blogPostpage({ params }) {
  // const data = await getData(params.id)
  const data = await getData(params)

  console.log(data)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src={data.image}
              width={40}
              height={40}
              alt='dfsd'
              className={styles.avatar}
            />
            {/* <span className={styles.username}>{data.username}</span> */}
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={data.img} alt='' fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  )
}
