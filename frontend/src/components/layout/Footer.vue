<script setup>
import { useLocale } from '@/composables/useLocale'

const { content } = useLocale()
const year = new Date().getFullYear()
</script>

<template>
  <footer
    :style="{ color: 'var(--color-text-secondary)' }"
  >
    <div class="flex flex-col items-center gap-2 text-center">
      <p class="text-xs">
        &copy; {{ year }} &mdash; {{ content.sections.designedBy }}
        <a
          :href="content.footer.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:underline"
          :style="{
            color: 'var(--color-text-primary)',
            fontWeight: 'var(--font-weight-medium)',
          }"
        >
          {{ content.footer.author }}
        </a>
      </p>

      <p class="text-xs">
        {{ content.sections.builtWith }} {{ content.footer.technologies.join(' &amp; ') }}
      </p>
    </div>
  </footer>
</template>
