import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"

const fontSans = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
})

import { FloatingChat } from "@/components/shared/floating-chat"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}
    >
      <body>
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
            <FloatingChat />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
