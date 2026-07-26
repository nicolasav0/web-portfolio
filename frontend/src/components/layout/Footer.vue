<script setup>
import { footer } from '@/data/footer'
</script>

<template>
  <footer
    class="flex flex-col gap-2"
    :style="{ color: 'var(--color-text-secondary)' }"
  >
    <p class="text-xs">
      Designed &amp; Built by
    </p>

    <p
      class="text-xs"
      :style="{
        color: 'var(--color-text-primary)',
        fontWeight: 'var(--font-weight-medium)',
      }"
    >
      {{ footer.author }}
    </p>

    <p class="text-xs">
      {{ footer.technologies.join(' • ') }}
    </p>
  </footer>
</template>
