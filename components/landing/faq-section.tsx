"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AnimatedSection } from "./animated-section"

const faqItems = [
  {
    q: "Нужно ли знать время рождения?",
    a: "Нет, расклад можно получить и без точного времени. Но если ты укажешь время рождения, расклад будет значительно точнее.",
  },
  {
    q: "Это предсказания или подсказки?",
    a: "Скорее подсказки и ориентиры. Veta помогает увидеть твой потенциал, сильные и слабые стороны, но финальные решения всегда за тобой.",
  },
  {
    q: "Можно ли делать расклад на другого человека?",
    a: "Да, ты можешь сделать расклад на друга, родственника или партнёра. Достаточно ввести их данные.",
  },
  {
    q: "Что такое Оракул?",
    a: "Оракул \u2014 это AI-чат-бот внутри Veta. Ты задаёшь любой жизненный вопрос, а Оракул даёт развёрнутый персональный ответ.",
  },
  {
    q: "Как работает рефералка?",
    a: "Ты делишься ссылкой с друзьями. Когда они регистрируются и начинают пользоваться Veta, вы оба получаете бонусные монеты.",
  },
  {
    q: "Что такое Веты?",
    a: "Веты \u2014 это внутренняя валюта приложения. Их можно заработать через рефералку или приветственный бонус и тратить на расклады.",
  },
  {
    q: "Нужно ли устанавливать приложение?",
    a: "Нет. Veta работает как Telegram Mini App. Просто открой бота в Telegram \u2014 и всё готово.",
  },
  {
    q: "Как накопить бонусные Веты?",
    a: "Приглашай друзей по реферальной ссылке, получай приветственный бонус при регистрации и зарабатывай за активность.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-16 lg:py-14">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <AnimatedSection>
          <h2 className="text-balance text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {"Часто задаваемые вопросы"}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Accordion type="single" collapsible className="mt-10">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  )
}
