import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/button/Button'

export default function aboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          fill={true}
          src={'/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg'}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Story Tellers</h1>
          <h2 className={styles.imgDesc}>
            Handwcrafting award winning digital experiences
          </h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h2 className={styles.title}>Who are we</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias modi
            odio corrupti in sapiente distinctio similique libero ipsam? Saepe
            amet itaque modi sed maiores temporibus praesentium natus dolorum
            aperiam enim, dignissimos beatae veritatis aliquam nihil! Officia
            placeat explicabo minima dolorum doloremque laboriosam rem veritatis
            iure, ex tempore, minus ducimus aliquam.
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quos
            officiis qui architecto blanditiis minima harum dolores
            reprehenderit placeat a ab dolorum beatae neque incidunt, vero
            dignissimos ea tenetur, illo voluptatum excepturi consequatur vitae?
            Voluptatem laborum sed animi veritatis fuga hic, ad earum temporibus
            dicta laudantium quod blanditiis provident eius incidunt a, quo
            consequatur. Nemo consequatur quibusdam ad praesentium perspiciatis!
          </p>
        </div>
        <div className={styles.item}>
          <h2 className={styles.title}>What we do?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            fuga, magnam quibusdam blanditiis praesentium totam debitis maiores
            officia delectus ullam unde libero, voluptatibus pariatur quasi
            impedit error tempore voluptate, voluptatem hic numquam minus.
            Temporibus velit qui quae vero quam dolore.
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque,
            molestias.
          </p>
          <Button url='contact' text='Contact' />
        </div>
      </div>
    </div>
  )
}
