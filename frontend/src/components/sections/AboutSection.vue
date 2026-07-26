<script setup>
import { useLocale } from '@/composables/useLocale'

const { content } = useLocale()
</script>

<template>
  <section id="about" style="scroll-margin-top: 4rem; width: 100%">
    <div style="width: 100%; max-width: 40rem; margin: 0 auto">
      <h2
        class="font-heading mb-8"
        :style="{
          fontSize: 'var(--text-heading-lg)',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--color-text-primary)',
        }"
      >
        {{ content.sections.about }}
      </h2>

      <p
        v-for="(paragraph, i) in content.about.paragraphs"
        :key="i"
        class="leading-relaxed"
        :style="{
          fontSize: 'var(--text-body-md)',
          color: 'var(--color-text-secondary)',
          lineHeight: 'var(--line-height-relaxed)',
          marginBottom: i < content.about.paragraphs.length - 1 ? '1rem' : '0',
        }"
      >
        {{ paragraph }}
      </p>
    </div>
  </section>
</template>
