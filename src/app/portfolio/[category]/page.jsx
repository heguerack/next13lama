import Button from '@/components/button/Button'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { items } from './data'

const getData = (cat) => {
  // console.log(cat)
  // console.log(items)
  const data = items[cat]
  if (data) {
    return data
  }
  return notFound()
}

export default function categoryPage({ params }) {
  // params.category because thats our folder name[category]
  const categoryItems = getData(params.category)

  return (
    <div className={styles.container}>
      <h1 className={styles.cardTitle}>{params.category}</h1>
      {/* ITEM */}
      {categoryItems.map((item) => {
        return (
          <div className={styles.item} key={item.id}>
            <div className={styles.content}>
              <h2 className={styles.title}>{item.title}</h2>
              <p>{item.description}</p>
              <Button text='test' url='/' />
            </div>
            <div className={styles.imgContainer}>
              <Image src={item.image} fill={true} className={styles.img} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
