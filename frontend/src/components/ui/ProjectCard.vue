<script setup>
import { ArrowUpRight, Code2, ExternalLink, Github } from 'lucide-vue-next'
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
  sourceAriaLabel: {
    type: String,
    required: true,
  },
  sourceAriaSuffix: {
    type: String,
    required: true,
  },
  demoLabel: {
    type: String,
    required: true,
  },
  demoAriaLabel: {
    type: String,
    required: true,
  },
  featuredLabel: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <article
    class="group flex flex-col gap-4 overflow-hidden rounded-md border border-primary bg-surface transition-interactive hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--color-brand)_50%,transparent)] hover:shadow-md focus-within:-translate-y-0.5 focus-within:border-[color-mix(in_srgb,var(--color-brand)_50%,transparent)] focus-within:shadow-md"
  >
    <div
      class="relative flex aspect-[16/7] items-center justify-center overflow-hidden bg-gradient-to-br from-[color-mix(in_srgb,var(--color-brand)_20%,transparent)] via-surface to-primary"
    >
      <img
        v-if="project.image"
        :src="project.image"
        :alt="`${project.title} preview`"
        class="h-full w-full object-cover transition-interactive group-hover:scale-105"
        loading="lazy"
      />
      <Code2
        v-else
        :size="36"
        :stroke-width="1.25"
        class="text-brand-text opacity-80"
        aria-hidden="true"
      />

      <span
        v-if="project.featured"
        class="absolute top-3 left-3 rounded-full border border-[color-mix(in_srgb,var(--color-brand)_50%,transparent)] bg-surface/90 px-2.5 py-1 text-[0.6875rem] font-semibold tracking-[0.12em] text-brand-text uppercase"
      >
        {{ featuredLabel }}
      </span>
    </div>

    <div class="flex flex-1 flex-col gap-4 p-6">
      <div class="flex items-start justify-between gap-4">
        <h3 class="font-heading text-xl font-semibold text-primary">
          {{ project.title }}
        </h3>

        <ArrowUpRight
          :size="20"
          :stroke-width="1.75"
          class="shrink-0 text-secondary transition-interactive group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-text"
          aria-hidden="true"
        />
      </div>

      <p class="text-sm leading-relaxed text-secondary">
        {{ project.description }}
      </p>

      <Tag :items="project.technologies" compact variant="base" />

      <div class="mt-auto flex flex-wrap items-center gap-2 pt-2">
        <a
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`${sourceAriaLabel} ${project.title} ${sourceAriaSuffix}`"
          class="inline-flex min-h-11 items-center gap-2 rounded-sm px-2 text-sm text-secondary transition-interactive hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]"
        >
          <Github :size="18" :stroke-width="1.75" aria-hidden="true" />
          {{ sourceLabel }}
        </a>

        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`${demoAriaLabel} ${project.title}`"
          class="inline-flex min-h-11 items-center gap-2 rounded-sm px-2 text-sm text-secondary transition-interactive hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]"
        >
          <ExternalLink :size="17" :stroke-width="1.75" aria-hidden="true" />
          {{ demoLabel }}
        </a>
      </div>
    </div>
  </article>
</template>
