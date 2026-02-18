"use client"

import { Moon } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card pb-28 pt-12 lg:pb-12">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <a href="#" className="flex items-center gap-2">
            <Moon className="h-5 w-5 text-secondary" />
            <span className="text-xl font-bold text-foreground">VETA — Вета</span>
          </a>

          <a
            href="https://t.me/vetaapp_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
          >
            {"Открыть Veta в Telegram"}
          </a>

          <p className="max-w-lg text-xs leading-relaxed text-muted-foreground">
            {"Контент носит развлекательный и информационный характер и не заменяет профессиональные медицинские, юридические или финансовые рекомендации."}
          </p>

          <p className="text-xs text-muted-foreground">
            {`\u00A9 ${new Date().getFullYear()} Veta. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
