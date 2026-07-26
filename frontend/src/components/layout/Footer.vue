<script setup>
import { footer } from '@/data/footer'

const year = new Date().getFullYear()
</script>

<template>
  <footer
    class="flex flex-col items-center gap-2 text-center"
    :style="{ color: 'var(--color-text-secondary)' }"
  >
    <p class="text-xs">
      &copy; {{ year }} &mdash; Designed &amp; Built by
      <a
        :href="footer.githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:underline"
        :style="{
          color: 'var(--color-text-primary)',
          fontWeight: 'var(--font-weight-medium)',
        }"
      >
        {{ footer.author }}
      </a>
    </p>

    <p class="text-xs">
      Built with {{ footer.technologies.join(' &amp; ') }}
    </p>
  </footer>
</template>
