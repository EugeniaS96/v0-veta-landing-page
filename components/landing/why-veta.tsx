"use client"

import { User, Heart, Users, CalendarCheck } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const rows = [
  [
    {
      icon: User,
      title: "Понять себя",
      text: "Узнай сильные и слабые стороны, таланты и предназначение. Получай подсказки и ответы от AI-Оракула на важные для тебя вопросы.",
      gradient: "from-[#AB47BC]/10 to-[#EC407A]/10",
    },
    {
      icon: Users,
      title: "Окружение",
      text: "Лучше пойми друзей, близких и коллег: что ими движет, где возможны конфликты и как находить с ними общий язык.",
      gradient: "from-[#303F9F]/10 to-[#00BCD4]/10",
    },
  ],
  [
    {
      icon: Heart,
      title: "Гармония в паре",
      text: "Проверь совместимость с партнёром: в чём вы совпадаете, а где возникают сложности. Получи советы, как укрепить связь и доверие.",
      gradient: "from-[#EC407A]/10 to-[#FF4B5C]/10",
    },
    {
      icon: CalendarCheck,
      title: "Важные решения",
      text: "Подбирай удачные дни для стартов и перемен. Лунные ритмы и расклады помогут выбрать момент, когда стоит начинать и к чему быть готовой.",
      gradient: "from-[#4CAF50]/10 to-[#00BCD4]/10",
    },
  ],
]

export function WhyVeta() {
  return (
    <section id="features" className="py-16 lg:py-10">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <AnimatedSection>
          <h2 className="text-balance text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {"Почему Veta помогает в жизни?"}
          </h2>
        </AnimatedSection>

        <div className="mt-12 flex flex-col gap-6">
          {rows.map((row, rowIdx) => (
            <div key={rowIdx} className="grid items-stretch gap-6 sm:grid-cols-2">
              {row.map((card, colIdx) => (
                <AnimatedSection key={card.title} delay={(rowIdx * 2 + colIdx) * 0.1}>
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 transition-opacity group-hover:opacity-100`} />
                    <div className="relative flex flex-1 flex-col">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                        <card.icon className="h-6 w-6 text-secondary" />
                      </div>
                      <h3 className="mt-5 text-xl font-semibold text-foreground">{card.title}</h3>
                      <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{card.text}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
