"use client"

import { AppWindow, Shield, MousePointerClick } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const benefits = [
  {
    icon: AppWindow,
    title: "Нет лишних иконок",
    text: "Нет лишних иконок на рабочем столе.",
  },
  {
    icon: Shield,
    title: "Конфиденциальность",
    text: "Полная конфиденциальность.",
  },
  {
    icon: MousePointerClick,
    title: "Работает везде",
    text: "Работает на любом устройстве в 1 клик.",
  },
]

export function WhyTelegram() {
  return (
    <section className="py-16 lg:py-14">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <AnimatedSection>
          <h2 className="text-balance text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {"Почему в Telegram?"}
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {benefits.map((benefit, i) => (
            <AnimatedSection key={benefit.title} delay={i * 0.1}>
              <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10">
                  <benefit.icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{benefit.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
