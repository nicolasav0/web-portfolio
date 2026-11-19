<script setup>
import { useLocale } from '@/composables/useLocale'

const { content } = useLocale()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="text-secondary">
    <div class="flex flex-col items-center gap-2 text-center">
      <p class="text-xs">
        &copy; {{ year }} &mdash; {{ content.sections.designedBy }}
        <a
          :href="content.footer.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
        >
          {{ content.footer.author }}
        </a>
      </p>

      <p class="text-xs">
        {{ content.sections.builtWith }} {{ content.footer.technologies.join(' & ') }}
      </p>
    </div>
  </footer>
</template>
