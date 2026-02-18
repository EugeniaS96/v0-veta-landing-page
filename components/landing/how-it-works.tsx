"use client"

import { AnimatedSection } from "./animated-section"

const steps = [
  {
    number: "1",
    title: "Открой Veta в Telegram",
    text: "Нажми на кнопку и перейди прямо в бот.",
  },
  {
    number: "2",
    title: "Выбери расклад или задай вопрос Оракулу",
    text: "Натальная карта, Ба Цзы и др.",
  },
  {
    number: "3",
    title: "Получи персональный разбор",
    text: "Расклад по твоим данным.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-10 lg:py-14">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-[#9090FF]/20 p-8 md:p-12 lg:p-16">
          <AnimatedSection>
            <h2 className="text-balance text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {"Как это работает"}
            </h2>
          </AnimatedSection>

          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-stretch">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.12} className="flex-1">
                <div className="relative flex h-full min-h-[220px] flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    {step.number}
                  </div>

                  {i < steps.length - 1 && (
                    <div className="absolute -right-3 top-1/2 hidden h-0.5 w-6 -translate-y-1/2 bg-border md:block" />
                  )}

                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="mt-10 flex justify-center">
              <a
                href="https://t.me/vetaapp_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
              >
                {"Начать прямо сейчас"}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
