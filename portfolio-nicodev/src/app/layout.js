import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { Open_Sans, Allura } from "next/font/google";
import Footer from "./components/Footer/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-allura",
});


export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${openSans.variable} ${allura.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );}