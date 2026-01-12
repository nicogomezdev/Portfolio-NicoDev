import "./globals.css";
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

export const metadata = {
  title: "NicoDev | Portfolio",
  description: "Frontend Developer Portfolio",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${openSans.variable} ${allura.variable} `}>
        {children}
        <Footer />
      </body>
    </html>
  );}