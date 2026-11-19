<script setup>
import { Github } from 'lucide-vue-next'
import Tag from './Tag.vue'

defineProps({
  project: {
    type: Object,
    required: true,
  },
  sourceLabel: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <article
    class="flex flex-col gap-4 rounded-md border border-primary bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus-within:border-[var(--color-brand)]"
  >
    <h3 class="font-heading text-xl font-semibold text-primary">
      {{ project.title }}
    </h3>

    <p class="text-sm leading-relaxed text-secondary">
      {{ project.description }}
    </p>

    <Tag :items="project.technologies" compact variant="base" />

    <div class="flex items-center gap-4">
      <a
        :href="project.github"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`${sourceLabel}: ${project.title}`"
        class="inline-flex items-center gap-2 rounded-sm text-sm text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]"
      >
        <Github :size="18" :stroke-width="1.75" aria-hidden="true" />
        {{ sourceLabel }}
      </a>
    </div>
  </article>
</template>
