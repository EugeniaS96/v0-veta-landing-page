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
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%BB%D1%83%D0%BD%D0%BD%D0%B0%D0%B9%20%D0%BA%D0%B0%D0%BB%D0%B5%D0%BD%D0%B4%D0%B0%D1%80%D1%8C%20%D0%BD%D0%B0%20%D0%B4%D0%B5%D0%BD%D1%8C-tt8WMfB0vH6QvoZRvIAJ3ICUqS2NKW.jpg",
        alt: "Иллюстрация лунного календаря с луной и кристаллом",
      },
      {
        title: "Натальная карта",
        description:
          "Натальная карта — это твоя личная карта звёзд, зафиксированная в момент рождения. Она раскрывает твой характер, таланты, слабые места и ключи к гармонии.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%BB%D1%83%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%20%D1%80%D0%BE%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F-OwyI73vmic4VgPOdbCgM9ZaxXwHc7y.png",
        alt: "Иллюстрация натальной карты с солнцем и луной",
      },
      {
        title: "Ба Цзы",
        description:
          "Какая стихия заключена в твоем рождении? Древняя китайская система Ба Цзы покажет, какие силы ведут тебя по жизни, где скрыт твой источник мощи и как направить потоки энергии к успеху.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%91%D0%B0%20%D0%A6%D0%B7%D1%8B-TXe4Qf2nJUS3xnKms99rsUElhTYvGI.jpg",
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
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%BD%D1%83%D0%BC%D0%B5%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F-7fsK2ZyWU5Mm2tnOyNvrQDj1qJsfzy.png",
        alt: "Иллюстрация девушки в костюме, сидящей по-турецки на фиолетовом фоне",
      },
      {
        title: "Аркан рождения",
        description:
          "Какой Аркан отражает суть твоих близких и ведет их по жизни? Посмотри, что карта говорит об их судьбе, какие энергии формируют их характер и путь.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%B0%D1%80%D0%BA%D0%B0%D0%BD%20%D1%80%D0%BE%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F-oBhzmlms6Z6Nuv6EnB1ChmPHdtDila.jpg",
        alt: "Иллюстрация девушки в красной футболке Friends, тащущей кого-то за руку",
      },
      {
        title: "Карта судьбы",
        description:
          "Загляни в эмоциональный мир своих близких. Что делает их счастливыми, как они проявляют чувства, чего боятся и ждут в ответ? Карта любви приоткроет тайные грани их эмоций и сокровенные желания.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%BA%D0%B0%D1%80%D1%82%D0%B0%20%D1%81%D1%83%D0%B4%D1%8C%D0%B1%D1%8B-tG1tJZYAcJOOQIQ0cpVP5I3gy0MJgB.png",
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
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%BA%D0%B0%D1%80%D1%82%D0%B0%20%D1%81%D0%BE%D0%B2%D0%BC%D0%B5%D1%81%D1%82%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8-wmqp0NgIfCckyyAiRBqDvxVmFWAJti.jpg",
        alt: "Иллюстрация пары — мужчина в белом пиджаке и девушка в розовом платье",
      },
      {
        title: "Ба Цзы совместимость",
        description:
          "Ваши стихии — союз или испытание? Древняя китайская система Ба Цзы покажет, что вас связывает, какие уроки приготовила судьба и как выстроить гармоничные отношения.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%B1%D1%8B%20%D1%86%D0%B7%D1%8B%20%D1%81%D0%BE%D0%B2%D0%BC%D0%B5%D1%81%D1%82%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C-wuTFaJnUhmBKSShkGiXNcbJL6CY5jI.jpg",
        alt: "Иллюстрация парня в розовых очках и ярком пиджаке с китайскими иероглифами",
      },
      {
        title: "Нумерология совместимости",
        description:
          "Что числа говорят о вашей совместимости? Узнай, какие вибрации притягивают вас друг к другу, как найти баланс и какие уроки приготовила судьба вашей паре.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%BD%D1%83%D0%BC%D0%B5%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F%20%D1%81%D0%BE%D0%B2%D0%BC%D0%B5%D1%81%D1%82%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8-ZVUkpdYbJNxJyX1cypKt8ajA2dbawz.jpg",
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
