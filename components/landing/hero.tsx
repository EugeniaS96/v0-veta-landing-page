"use client"

import { motion } from "framer-motion"
import { ArrowDown, Sparkles } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-8 pt-8 lg:pb-12 lg:pt-12">
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-[#EC407A]/8 blur-3xl" />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 lg:flex-row lg:gap-16 lg:px-8">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-secondary" />
              {"Telegram Mini App \u00B7 1 \u0442\u0430\u043F \u00B7 \u0411\u0435\u0437 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438"}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-[3.25rem]"
          >
            {"Познай себя и своих близких через магию чисел и звёзд"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl lg:mx-0"
          >
            {"Veta — эзотерическая энциклопедия. Твой персональный путеводитель по натальным картам, Ба-Цзы и советам Оракула прямо внутри Telegram."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <a
              href="https://t.me/vetaapp_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
            >
              {"Попробовать бесплатно"}
            </a>
            <a
              href="#what-is-veta"
              className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-muted"
            >
              {"Узнать больше"}
              <ArrowDown className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative flex-shrink-0"
        >
          <div className="relative mx-auto w-[280px] md:w-[320px]">
            {/* Phone frame */}
            <div className="overflow-hidden rounded-[2.5rem] border-[8px] border-foreground/10 bg-card shadow-2xl shadow-foreground/10">
              <Image
                src="/assets/hero/main.png"
                alt="Главная страница приложения Veta с профилем пользователя, лунным календарём и персональным прогнозом"
                width={320}
                height={640}
                className="w-full"
                priority
              />
            </div>
            {/* Glow behind phone */}
            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-gradient-to-br from-secondary/20 via-[#EC407A]/10 to-transparent blur-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

