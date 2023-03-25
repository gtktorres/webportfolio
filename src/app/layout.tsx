import dynamic from "next/dynamic";
import '../styles/globals.css'
import '../styles/client.css'

const Navbar = dynamic(
  () => {
    return import('../components/Navbar');
  },
  { ssr: false }
);

export const metadata = {
  title: 'Welcome to guevaratorres.space!',
  description: 'Welcome to Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body>
      < Navbar /> 
      {children}
      </body>

    </html>
  )
}
