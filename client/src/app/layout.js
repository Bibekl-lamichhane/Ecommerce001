'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"
import ReduxProvider from "@/redux/ReduxProvider";
import NavBar from "@/components/navbar/NavBar";
import { usePathname } from 'next/navigation';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout(props) {
  const pathname =usePathname()
    const isAdminRoute = pathname.startsWith('/admin');
   const { children } = props;
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}  
      > <ReduxProvider>{!isAdminRoute && <NavBar />}
        {children}</ReduxProvider>
      </body>
    </html>
  );
}
