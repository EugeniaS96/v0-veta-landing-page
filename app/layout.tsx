import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"

import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Veta — Расклады, Совместимость и AI-Оракул в Telegram",
  description:
    "Эзотерическое мини-приложение Veta в Telegram: натальная карта, Ба Цзы, совместимость и AI-Оракул. Без установки, в 1 тап.",
  openGraph: {
    title: "Veta — Расклады, Совместимость и AI-Оракул в Telegram",
    description:
      "Эзотерическое мини-приложение Veta в Telegram: натальная карта, Ба Цзы, совместимость и AI-Оракул. Без установки, в 1 тап.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#F5F3F8",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}

        {/* Yandex.Metrika */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              k=e.createElement(t),a=e.getElementsByTagName(t)[0];
              k.async=1;k.src=r;a.parentNode.insertBefore(k,a)
            })
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(106855911, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `}
        </Script>

        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/106855911"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  )
}

