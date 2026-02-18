"use client"

import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { WhatIsVeta } from "@/components/landing/what-is-veta"
import { WhyVeta } from "@/components/landing/why-veta"
import { LayoutsSection } from "@/components/landing/layouts-section"
import { OracleSection } from "@/components/landing/oracle-section"
import { ReferralSection } from "@/components/landing/referral-section"
import { WhyTelegram } from "@/components/landing/why-telegram"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Testimonials } from "@/components/landing/testimonials"
import { FaqSection } from "@/components/landing/faq-section"
import { Footer } from "@/components/landing/footer"
import { MobileCTA } from "@/components/landing/mobile-cta"

export default function VetaLanding() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatIsVeta />
        <WhyVeta />
        <LayoutsSection />
        <OracleSection />
        <ReferralSection />
        <WhyTelegram />
        <HowItWorks />
        <Testimonials />
        <FaqSection />
      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}
