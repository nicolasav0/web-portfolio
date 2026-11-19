<script setup>
import SectionShell from '@/components/ui/SectionShell.vue'
import { useLocale } from '@/composables/useLocale'
import { Mail, Send, Download } from 'lucide-vue-next'

const { content } = useLocale()
</script>

<template>
  <SectionShell id="contact" :title="content.sections.contact">
    <div class="flex flex-col gap-6">
      <a
        :href="`mailto:${content.contact.email}`"
        :aria-label="content.contact.emailLabel"
        class="flex w-fit items-center gap-3 rounded-sm text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]"
      >
        <Mail :size="20" :stroke-width="1.75" aria-hidden="true" />
        {{ content.contact.email }}
      </a>

      <a
        :href="content.contact.telegram"
        :aria-label="content.contact.telegramLabel"
        target="_blank"
        rel="noopener noreferrer"
        class="flex w-fit items-center gap-3 rounded-sm text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]"
      >
        <Send :size="20" :stroke-width="1.75" aria-hidden="true" />
        {{ content.sections.telegram }}
      </a>

      <div class="mt-4 flex flex-col gap-2">
        <a
          :href="content.contact.cv.path"
          :aria-label="content.contact.cv.ariaLabel"
          download
          class="inline-flex w-fit items-center gap-3 rounded-md bg-[var(--color-brand-text)] px-6 py-3 text-[var(--color-bg)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]"
        >
          <Download :size="20" :stroke-width="1.75" aria-hidden="true" />
          {{ content.contact.cv.label }}
        </a>

        <p class="text-xs text-secondary">
          {{ content.contact.cv.graduation }}
        </p>
      </div>
    </div>
  </SectionShell>
</template>
