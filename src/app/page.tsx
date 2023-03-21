import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { Client } from './client'

const inter = Inter({ subsets: ['latin'] })

export default function page() {
  return (
    <main className={styles.main}>

        < Client/>

    </main>
  )
}
