<script setup>
import { Sun } from 'lucide-vue-next'
</script>

<template>
  <div class="flex items-center gap-5">
    <button
      class="cursor-pointer text-xs font-medium uppercase tracking-[0.25em] transition-all duration-300 hover:-translate-y-1"
      :style="{ color: 'var(--color-text-secondary)' }"
    >
      EN
    </button>

    <button
      class="cursor-pointer transition-all duration-300 hover:-translate-y-1"
      :style="{ color: 'var(--color-text-secondary)' }"
    >
      <Sun :size="18" :stroke-width="1.75" />
    </button>
  </div>
</template>
