import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/page.module.css'
import dynamic from "next/dynamic";

const Client = dynamic(
  () => {
    return import('./client');
  },
  { ssr: false }
);

const inter = Inter({ subsets: ['latin'] })

export default function page() {
  return (
    <main className={styles.main}>
        < Client/>
    </main>
  )
}
