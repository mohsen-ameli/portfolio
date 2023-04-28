import "./globals.css"
import { Node } from "@/types/main.type"
import Navbar from "@/components/Navbar"
import { Caveat } from "next/font/google"
import Layout from "./_layout"

export const metadata = {
  title: "Mohsen's Portfolio | Home",
  description: "This is the home page of my portfolio.",
}

const inter = Caveat({ subsets: ["latin"], weight: ["700"] })

const RootLayout = ({ children }: Node) => {
  return (
    <html lang="en">
      <body className={"bg-[#000033] select-none relative " + inter.className}>
        <Navbar />

        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

export default RootLayout
