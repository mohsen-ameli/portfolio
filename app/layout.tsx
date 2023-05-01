import "./globals.css"
import { Node } from "@/types/main.type"
import Navbar from "@/components/Navbar"
import { Roboto_Slab } from "next/font/google"
import Experience from "./experience"
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Mohsen's Portfolio | Home",
  description: "This is the home page of my portfolio.",
}

const inter = Roboto_Slab({ subsets: ["latin"], weight: ["400"] })

const RootLayout = ({ children }: Node) => {
  return (
    <html lang="en">
      <body className={"bg-[#000033] select-none " + inter.className}>
        <Analytics />

        <Experience />

        <Navbar />

        {children}

        {/* <Transition>{children}</Transition> */}
      </body>
    </html>
  )
}

export default RootLayout
