import dynamic from "next/dynamic";
import '../styles/globals.css'
import '../styles/client.css'

const Navbar = dynamic(
  () => {
    return import('../components/Navbar');
  }
);

export const metadata = {
  icons: {
    icon: 'https://em-content.zobj.net/thumbs/120/twitter/348/sunrise-over-mountains_1f304.png'
  },
  title: 'Guevara Torres - Fullstack Developer',
  keywords: ['Portfolio', 'Guevara Torres', 'Software Developer'],
  description: 'Portfolio',
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
