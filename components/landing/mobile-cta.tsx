"use client"

import { motion } from "framer-motion"

export function MobileCTA() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.4, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 px-4 py-3 backdrop-blur-xl lg:hidden"
    >
      <a
        href="https://t.me/vetaapp_bot"
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
      >
        {"Открыть Veta в Telegram"}
      </a>
    </motion.div>
  )
}
