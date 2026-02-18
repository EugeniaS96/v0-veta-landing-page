"use client"

import { Zap, History, Smartphone } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const highlights = [
  { icon: Zap, text: "Работает мгновенно" },
  { icon: History, text: "Всё сохраняется в истории" },
  { icon: Smartphone, text: "Доступно с любого устройства" },
]

export function WhatIsVeta() {
  return (
    <section id="what-is-veta" className="py-16 lg:py-14">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-[#9090FF]/20 p-8 md:p-12 lg:p-16">

          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                {"Что такое Veta?"}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {
                  "Veta — это мини-приложение в Telegram. Не нужно скачивать отдельное приложение. Ты просто открываешь бота и получаешь доступ к раскладам, совместимости и AI-Оракулу."
                }
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-4 sm:flex-row sm:justify-center">
              {highlights.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 shadow-sm"
                >
                  <item.icon className="h-5 w-5 flex-shrink-0 text-secondary" />
                  <span className="text-sm font-medium text-foreground">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}

