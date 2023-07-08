import Image from 'next/image'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <div className={styles.container}>
      <p>@2023 FDM Solutions. All rights reserved</p>
      <div className={styles.social}>
        <Image
          src={'/1.png'}
          width={50}
          height={50}
          className={styles.icon}
          alt='sdasda'
        />
        <Image
          src={'/2.png'}
          width={50}
          height={50}
          className={styles.icon}
          alt='sdasda'
        />
        <Image
          src={'/3.png'}
          width={50}
          height={50}
          className={styles.icon}
          alt='sdasda'
        />
        <Image
          src={'/4.png'}
          width={50}
          height={50}
          className={styles.icon}
          alt='sdasda'
        />
        <Image
          src={'/5.png'}
          width={50}
          height={50}
          className={styles.icon}
          alt='sdasda'
        />
      </div>
    </div>
  )
}
