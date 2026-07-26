<script setup>
import { useLocale } from '@/composables/useLocale'
import { Mail, Send, Download } from 'lucide-vue-next'

const { content } = useLocale()
</script>

<template>
  <section id="contact" style="scroll-margin-top: 4rem; width: 100%">
    <div style="width: 100%; max-width: 40rem; margin: 0 auto">
      <h2
        class="font-heading mb-12"
        :style="{
          fontSize: 'var(--text-heading-lg)',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--color-text-primary)',
        }"
      >
        {{ content.sections.contact }}
      </h2>

      <div class="flex flex-col gap-6">
        <a
          :href="`mailto:${content.contact.email}`"
          class="flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5"
          :style="{ color: 'var(--color-text-secondary)' }"
        >
          <Mail :size="20" :stroke-width="1.75" />
          {{ content.contact.email }}
        </a>

        <a
          :href="content.contact.telegram"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5"
          :style="{ color: 'var(--color-text-secondary)' }"
        >
          <Send :size="20" :stroke-width="1.75" />
          {{ content.sections.telegram }}
        </a>

        <div class="mt-4 flex flex-col gap-2">
          <a
            :href="content.contact.cv.path"
            download
            class="inline-flex w-fit items-center gap-3 rounded-md px-6 py-3 transition-all duration-300 hover:-translate-y-0.5"
            :style="{
              backgroundColor: 'var(--color-brand)',
              color: 'var(--color-text-primary)',
            }"
          >
            <Download :size="20" :stroke-width="1.75" />
            {{ content.contact.cv.label }}
          </a>

          <p class="text-xs" :style="{ color: 'var(--color-text-secondary)' }">
            {{ content.contact.cv.graduation }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
