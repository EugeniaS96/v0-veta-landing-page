"use client"

import { Star } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const reviews = [
  {
    name: "Алина",
    text: "После расклада совместимости стали лучше понимать друг друга. Очень точно попало!",
    stars: 5,
  },
  {
    name: "Дмитрий",
    text: "Оракул дал совет, который реально помог в сложной рабочей ситуации. Пользуюсь каждый день.",
    stars: 5,
  },
  {
    name: "Мария",
    text: "Натальная карта раскрыла вещи, о которых я даже не задумывалась. Рекомендую подругам.",
    stars: 5,
  },
  {
    name: "Арсений",
    text: "Удобно, что всё прямо в Telegram. Не нужно ничего скачивать, открыл и пользуешься.",
    stars: 5,
  },
  {
    name: "Екатерина",
    text: "Ба-Цзы расклад попал точно. Про стихии и характер всё совпало. Делаю расклады на друзей и близких.",
    stars: 5,
  },
  {
    name: "Олег",
    text: "Классная реферальная система. Пригласил троих друзей и получил бонусы на расклады.",
    stars: 4,
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="py-16 lg:py-14">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <AnimatedSection>
          <h2 className="text-balance text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {"Отзывы"}
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <AnimatedSection key={review.name} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      className={`h-4 w-4 ${si < review.stars
                        ? "fill-[#FFB800] text-[#FFB800]"
                        : "fill-muted text-muted"
                        }`}
                    />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {`\u201C${review.text}\u201D`}
                </p>
                <p className="mt-4 text-sm font-semibold text-foreground">{review.name}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
