import Image from 'next/image'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Portrait0 from '../components/Project-Images/portrait0.jpg'

const inter = Inter({ subsets: ['latin'] })

export default function page() {
  return (
    <main>
      <div>
        <Image
          height={500}
          width={370}
          src={Portrait0}
          className="App-port"
          alt="Portrait"
        />
      </div>
      <div className="About">
          <h2>About Me</h2>
        </div>

        <div className="Border">
          <p>
            I&#39;m a Software Developer with a Bachelor of Science in Computer
            Science degree, with an interest in Fullstack applications.
          </p>
        </div>
    </main>
  );
}
