import Image from 'next/image'
import styles from './page.module.css'


export default function Home() {
  return (
    <>
      <Image
        className={styles.pics}
        src="/static/images/ashina-genichiro-1.jpg"
        width={1920}
        height={1026}
        alt=""
      />
      <div className={styles.container}>
        <h1>Why did this thing not appear</h1>
      </div>
   
    </>
  )
}
