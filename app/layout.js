import { Inter, Poppins, Euphoria_Script, Bebas_Neue} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable}  ${poppins.variable} ${euphoria.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
