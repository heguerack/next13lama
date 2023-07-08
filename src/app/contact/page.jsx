import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/button/Button'

export default function contactPage() {
  return (
    <div>
      <h1 className={styles.title}>Lets keep in touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src='/contact.png'
            alt='sds'
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type='text' placeholder='Name' className={styles.input} />
          <input type='email' placeholder='Email' className={styles.input} />
          <textarea
            name='message'
            id=''
            className={styles.textArea}
            placeholder='message'></textarea>
          <Button url='#' text='Send' />
        </form>
      </div>
    </div>
  )
}
