"use client"

import { Sparkles, MessageCircle, Zap } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const features = [
  { icon: MessageCircle, text: "Работает как диалог" },
  { icon: MessageCircle, text: "Можно задавать уточняющие вопросы" },
  { icon: Zap, text: "Ответы формируются мгновенно" },
]

export function OracleSection() {
  return (
    <section id="oracle" className="py-16 lg:py-14">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <AnimatedSection>
          <h2 className="text-balance text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {"Оракул — ваш личный ИИ-советчик"}
          </h2>
        </AnimatedSection>

        <div className="mt-12 flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16">
          {/* Video on the left */}
          <AnimatedSection delay={0.1} className="w-full flex-shrink-0 lg:w-auto">
            <div className="mx-auto w-[280px] md:w-[320px]">
              <div className="overflow-hidden rounded-[2.5rem] border-[8px] border-foreground/10 bg-card shadow-2xl shadow-foreground/10">
                <video
                  src="/assets/oracle/oracle.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full"
                >
                  Ваш браузер не поддерживает видео.
                </video>
              </div>
            </div>
          </AnimatedSection>

          {/* Text + features on the right */}
          <div className="flex flex-1 flex-col gap-8 lg:pt-4">
            <AnimatedSection delay={0.2}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {"Задай любой вопрос и получи мгновенный ответ. Оракул Veta — это умный чат-бот, который поможет разобраться в сложной ситуации, даст совет и раскроет неочевидные знаки судьбы."}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col gap-3">
                {features.map((f) => (
                  <div key={f.text} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                      <f.icon className="h-4 w-4 text-secondary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.35}>
              <a
                href="https://t.me/vetaapp_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
              >
                <Sparkles className="h-5 w-5" />
                {"Спросить Оракула"}
              </a>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
