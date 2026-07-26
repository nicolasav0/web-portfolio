<script setup>
import { Menu } from 'lucide-vue-next'
import { useActiveSection } from '@/composables/useActiveSection'
import ThemeLangToggles from './ThemeLangToggles.vue'

const emit = defineEmits(['toggle-menu'])

const { activeSection } = useActiveSection()

function label(id) {
  return id.charAt(0).toUpperCase() + id.slice(1)
}
</script>

<template>
  <header class="mobile-topbar">
    <button
      class="flex cursor-pointer items-center gap-2"
      :style="{ color: 'var(--color-text-secondary)' }"
      @click="emit('toggle-menu')"
    >
      <Menu :size="18" :stroke-width="1.75" />
    </button>

    <span
      class="text-xs font-medium uppercase tracking-[0.25em]"
      :style="{ color: 'var(--color-brand)' }"
    >
      {{ label(activeSection) }}
    </span>

    <div class="ml-auto">
      <ThemeLangToggles compact />
    </div>
  </header>
</template>

<style scoped>
.mobile-topbar {
  display: none;
}

@media (max-width: 1023px) {
  .mobile-topbar {
    display: flex;
    align-items: center;
    gap: 1rem;
    position: sticky;
    top: 0;
    z-index: 30;
    padding: 0.75rem 1rem;
    background-color: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
  }
}
</style>
