import React from "react"
import { Footer } from "../Footer"
import { Header } from "../Header"

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col justify-between">
      <Header />
      <main className="h-full">{children}</main>
      <Footer />
    </div>
  )
}
