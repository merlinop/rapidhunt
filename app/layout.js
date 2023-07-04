import { QuestionProvider } from "@/Contexts/QuestionContext"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Quiz Application",
  description: "Quiz Application",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QuestionProvider>{children}</QuestionProvider>
      </body>
    </html>
  )
}
