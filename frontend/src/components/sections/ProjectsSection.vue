<script setup>
import { useLocale } from '@/composables/useLocale'
import { Github, ExternalLink } from 'lucide-vue-next'

const { content } = useLocale()
</script>

<template>
  <section id="projects" style="scroll-margin-top: 4rem; width: 100%">
    <div style="width: 100%; max-width: 40rem; margin: 0 auto">
      <h2
        class="font-heading mb-12"
        :style="{
          fontSize: 'var(--text-heading-lg)',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--color-text-primary)',
        }"
      >
        {{ content.sections.projects }}
      </h2>

      <div class="flex flex-col gap-6">
      <div
        v-for="project in content.projects"
        :key="project.id"
        class="group flex flex-col gap-4 rounded-md p-6 transition-all duration-300 hover:-translate-y-0.5"
        :style="{
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
        }"
      >
        <h3
          class="font-heading text-xl"
          :style="{
            color: 'var(--color-text-primary)',
            fontWeight: 'var(--font-weight-semibold)',
          }"
        >
          {{ project.title }}
        </h3>

        <p
          class="text-sm leading-relaxed"
          :style="{ color: 'var(--color-text-secondary)' }"
        >
          {{ project.description }}
        </p>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="rounded-md px-3 py-1 text-xs"
            :style="{
              backgroundColor: 'var(--color-bg)',
              color: 'var(--color-text-secondary)',
              border: '1px solid var(--color-border)',
            }"
          >
            {{ tech }}
          </span>
        </div>

        <div class="flex items-center gap-4">
          <a
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 text-sm transition-all duration-300 hover:-translate-y-0.5"
            :style="{ color: 'var(--color-text-secondary)' }"
          >
            <Github :size="18" :stroke-width="1.75" />
            {{ content.sections.source }}
          </a>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>
