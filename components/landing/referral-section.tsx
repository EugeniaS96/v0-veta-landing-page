"use client"

import { Gift, Coins, Crown } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const bonuses = [
  {
    icon: Gift,
    title: "Бонус за друга",
    text: "Получай бонусные монеты (веты) за каждого приглашённого друга.",
  },
  {
    icon: Coins,
    title: "Приветственный бонус",
    text: "Приветственный бонус при первой регистрации.",
  },
  {
    icon: Crown,
    title: "Заходи каждый день",
    text: "Открывай Лунный календарь и Карту дня и получай веты.",
  },
]

export function ReferralSection() {
  return (
    <section id="referral" className="py-16 lg:py-14">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <AnimatedSection>
          <div className="overflow-hidden rounded-3xl bg-[#9090FF]/20 p-8 md:p-12 lg:p-16">
            <h2 className="text-balance text-center text-3xl font-semibold tracking-tight text-[#352D55] md:text-4xl">
              {"Приглашай друзей \u2014 получай Веты!"}
            </h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {bonuses.map((bonus, i) => (
                <AnimatedSection key={bonus.title} delay={i * 0.1}>
                  <div className="rounded-2xl bg-[#ffffff]/70 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#352D55]/10">
                      <bonus.icon className="h-6 w-6 text-[#352D55]" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-[#352D55]">{bonus.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#352D55]/70">{bonus.text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
