import { Inter, Poppins, Euphoria_Script, Bebas_Neue} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics"

const inter = Inter({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-inter',
 })

 const poppins = Poppins({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
 })

 const euphoria = Bebas_Neue({ 
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-euphoria',
 })


export const metadata = {
  title: "Soy Carlic",
  description: "Masculinidad, Transformación Personal y Estilo de Vida.",
  openGraph: {
    title: 'Soy Carlic',
    description: 'Masculinidad, Transformación Personal y Estilo de Vida.',
    url: 'https://www.soycarlic.com',
    images: [
      {
        url: 'https://www.soycarlic.com/ctablog.png',
        width: 1200,
        height: 630,
        alt: 'soy carlic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soy Carlic',
    description: 'Masculinidad, Transformación Personal y Estilo de Vida.',
    images: ['https://www.soycarlic.com/ctablog.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable}  ${poppins.variable} ${euphoria.variable}`}
      >
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
