<script setup>
import { about } from '@/data/about'
</script>

<template>
  <section
    id="about"
    class=""
  >
    <h2
      class="font-heading mb-8"
      :style="{
        fontSize: 'var(--text-heading-lg)',
        fontWeight: 'var(--font-weight-bold)',
        color: 'var(--color-text-primary)',
      }"
    >
      About
    </h2>

    <p
      class="max-w-prose leading-relaxed"
      :style="{
        fontSize: 'var(--text-body-md)',
        color: 'var(--color-text-secondary)',
        lineHeight: 'var(--line-height-relaxed)',
      }"
    >
      {{ about.bio }}
    </p>
  </section>
</template>
