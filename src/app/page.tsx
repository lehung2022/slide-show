import Image from 'next/image'
import styles from './page.module.css'


export default function Home() {
  return (
    <>
      <Image
        className={styles.pics}
        src="/static/images/ashina-genichiro-1.jpg"
        width={600}
        height={600}
        alt=""
      />
    </>
  )
}
