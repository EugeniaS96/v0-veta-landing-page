"use client"

import Image from "next/image"
import { AnimatedSection } from "./animated-section"

const TELEGRAM_LINK = "https://t.me/vetaapp_bot"

interface LayoutCard {
  title: string
  description: string
  image: string
  alt: string
}

interface Category {
  label: string
  cards: LayoutCard[]
}

const categories: Category[] = [
  {
    label: "НА СЕБЯ",
    cards: [
      {
        title: "Лунный календарь на день",
        description:
          "Посмотри, какие энергии несет Луна сегодня, и настройся на их ритм, чтобы провести день в гармонии с собой и миром!",
        image: "/assets/layouts/self/lunar_calendar.jpg",
        alt: "Иллюстрация лунного календаря с луной и кристаллом",
      },
      {
        title: "Натальная карта",
        description:
          "Натальная карта — это твоя личная карта звёзд, зафиксированная в момент рождения. Она раскрывает твой характер, таланты, слабые места и ключи к гармонии.",
        image: "/assets/layouts/self/natal_chart.png",
        alt: "Иллюстрация натальной карты с солнцем и луной",
      },
      {
        title: "Ба Цзы",
        description:
          "Какая стихия заключена в твоем рождении? Древняя китайская система Ба Цзы покажет, какие силы ведут тебя по жизни, где скрыт твой источник мощи и как направить потоки энергии к успеху.",
        image: "/assets/layouts/self/ba_tzu.jpg",
        alt: "Иллюстрация Ба-Цзы с китайскими иероглифами",
      },
    ],
  },
  {
    label: "НА ДРУГИХ",
    cards: [
      {
        title: "Нумерология",
        description:
          "Загляни в тайны своих друзей через магию чисел и узнай, какие энергии ведут их по жизни и что говорит о них нумерология!",
        image: "/assets/layouts/friends/numerology.png",
        alt: "Иллюстрация девушки в костюме, сидящей по-турецки на фиолетовом фоне",
      },
      {
        title: "Аркан рождения",
        description:
          "Какой Аркан отражает суть твоих близких и ведет их по жизни? Посмотри, что карта говорит об их судьбе, какие энергии формируют их характер и путь.",
        image: "/assets/layouts/friends/arcana_of_birth.jpg",
        alt: "Иллюстрация девушки в красной футболке Friends, тащущей кого-то за руку",
      },
      {
        title: "Карта судьбы",
        description:
          "Загляни в эмоциональный мир своих близких. Что делает их счастливыми, как они проявляют чувства, чего боятся и ждут в ответ? Карта любви приоткроет тайные грани их эмоций и сокровенные желания.",
        image: "/assets/layouts/friends/destiny_card.png",
        alt: "Иллюстрация девушки в очках с картами на бирюзовом фоне",
      },
    ],
  },
  {
    label: "ПРОВЕРИТЬ СОВМЕСТИМОСТЬ",
    cards: [
      {
        title: "Карта совместимости",
        description:
          "Раскрой глубину ваших отношений через карты. Узнай, какие энергии соединяют вас, в чем гармония, а где скрыты вызовы, и получи советы для укрепления связи.",
        image: "/assets/layouts/compatibility/compatibility_card.jpg",
        alt: "Иллюстрация пары — мужчина в белом пиджаке и девушка в розовом платье",
      },
      {
        title: "Ба Цзы совместимость",
        description:
          "Ваши стихии — союз или испытание? Древняя китайская система Ба Цзы покажет, что вас связывает, какие уроки приготовила судьба и как выстроить гармоничные отношения.",
        image: "/assets/layouts/compatibility/ba_tzu_compatibility.jpg",
        alt: "Иллюстрация парня в розовых очках и ярком пиджаке с китайскими иероглифами",
      },
      {
        title: "Нумерология совместимости",
        description:
          "Что числа говорят о вашей совместимости? Узнай, какие вибрации притягивают вас друг к другу, как найти баланс и какие уроки приготовила судьба вашей паре.",
        image: "/assets/layouts/compatibility/numerology_compatibility.jpg",
        alt: "Иллюстрация парня в широких розовых штанах с надписями Destiny, Fortune, Luck",
      },
    ],
  },
]

export function LayoutsSection() {
  return (
    <section id="layouts" className="py-16 lg:py-14">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <AnimatedSection>
          <h2 className="text-balance text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {"Выбери расклад в Veta"}
          </h2>
        </AnimatedSection>

        {categories.map((category, catIdx) => (
          <div key={category.label} className={catIdx === 0 ? "mt-12" : "mt-16"}>
            <AnimatedSection delay={catIdx * 0.1}>
              <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                {category.label}
              </p>
            </AnimatedSection>

            <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.cards.map((card, cardIdx) => (
                <AnimatedSection key={card.title} delay={catIdx * 0.1 + cardIdx * 0.08}>
                  <a
                    href={TELEGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        width={480}
                        height={300}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {card.description}
                      </p>
                      <div className="mt-5">
                        <span className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all group-hover:opacity-90">
                          {"Получить"}
                        </span>
                      </div>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
