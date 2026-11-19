<script setup>
import { ArrowRight, Download } from 'lucide-vue-next'
import { useLocale } from '@/composables/useLocale'
import { useScrollToSection } from '@/composables/useScrollToSection'
import profileImage from '@/assets/images/profile-placeholder.png'

const { content } = useLocale()
const { scrollToSection } = useScrollToSection()
</script>

<template>
  <section class="flex flex-col gap-5" aria-labelledby="profile-name">
    <div class="flex flex-col gap-4">
      <p
        class="inline-flex w-fit items-center gap-2 rounded-full border border-primary bg-surface px-3 py-1 text-xs font-medium text-secondary"
      >
        <span class="relative flex h-2 w-2" aria-hidden="true">
          <span
            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-brand)] opacity-60 motion-reduce:animate-none"
          />
          <span class="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-brand-text)]" />
        </span>
        {{ content.profile.availability }}
      </p>

      <div class="w-fit rounded-full bg-surface p-1 ring-1 ring-[var(--color-border)]">
        <img
          :src="profileImage"
          :alt="content.profile.fullName"
          width="128"
          height="128"
          loading="eager"
          decoding="async"
          class="h-32 w-32 rounded-full object-cover"
        />
      </div>
    </div>

    <div class="flex flex-col gap-3">
      <h1
        id="profile-name"
        class="font-heading text-[length:clamp(2rem,6vw,2.5rem)] leading-[1.05] font-bold tracking-tight text-balance text-primary"
      >
        {{ content.profile.fullName }}
      </h1>

      <p class="text-[length:var(--text-body-lg)] font-medium text-brand-text">
        {{ content.profile.role }}
      </p>

      <p class="font-heading text-lg leading-snug font-semibold text-primary">
        {{ content.profile.tagline }}
      </p>
    </div>

    <div class="flex flex-wrap gap-2">
      <a
        :href="content.contact.cv.path"
        :aria-label="content.contact.cv.ariaLabel"
        download
        class="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--color-brand-text)] px-4 py-2.5 text-sm font-semibold text-[var(--color-bg)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]"
      >
        <Download :size="16" :stroke-width="1.75" aria-hidden="true" />
        {{ content.profile.ctaCv }}
      </a>

      <a
        href="#contact"
        class="inline-flex items-center justify-center gap-2 rounded-md border border-primary bg-surface px-4 py-2.5 text-sm font-medium text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-brand)] hover:text-[var(--color-brand-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]"
        @click.prevent="scrollToSection('contact')"
      >
        {{ content.profile.ctaContact }}
        <ArrowRight :size="16" :stroke-width="1.75" aria-hidden="true" />
      </a>
    </div>
  </section>
</template>
