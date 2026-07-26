<script setup>
import { skills } from '@/data/skills'
</script>

<template>
  <section
    id="skills"
    style="scroll-margin-top: 4rem; width: 100%"
  >
    <div style="width: 100%; max-width: 40rem; margin: 0 auto">
      <h2
        class="font-heading mb-12"
        :style="{
          fontSize: 'var(--text-heading-lg)',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--color-text-primary)',
        }"
      >
        Skills
      </h2>

      <div class="flex flex-col gap-8">
      <div
        v-for="group in skills"
        :key="group.category"
      >
        <h3
          class="font-heading mb-3 text-sm uppercase tracking-[0.2em]"
          :style="{ color: 'var(--color-brand)' }"
        >
          {{ group.category }}
        </h3>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="item in group.items"
            :key="item"
            class="rounded-md px-3 py-1.5 text-sm"
            :style="{
              backgroundColor: 'var(--color-surface)',
              color: 'var(--color-text-secondary)',
              border: '1px solid var(--color-border)',
            }"
          >
            {{ item }}
          </span>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>
