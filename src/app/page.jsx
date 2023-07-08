import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/button/Button'
// import hero from 'public/hero.png'

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products
        </h1>
        <p>
          Turning your idea inot reality. We bring together the teams for the
          global tech industry
        </p>
        <Button url='/portfolio' text='See Our Work' />
      </div>
      {/* <Image src={hero} /> */}
      <div className={styles.item}>
        <div className={styles.imgContainer}>
          <Image
            src='/hero.png'
            fill={true}
            className={styles.img}
            alt='dfsdfs'
          />
        </div>
      </div>
    </main>
  )
}
