<script setup>
import { computed } from 'vue'
import { Menu } from 'lucide-vue-next'
import IconButton from '@/components/ui/IconButton.vue'
import { useActiveSection } from '@/composables/useActiveSection'
import { useLocale } from '@/composables/useLocale'
import ThemeLangToggles from './ThemeLangToggles.vue'

defineProps({
  open: Boolean,
})

const emit = defineEmits(['toggle-menu'])

const { activeSection } = useActiveSection()
const { content } = useLocale()

const activeLabel = computed(
  () => content.value.navigation.find((item) => item.target === activeSection.value)?.label ?? '',
)
</script>

<template>
  <header class="mobile-topbar">
    <IconButton
      :label="open ? content.sections.closeMenu : content.sections.openMenu"
      aria-haspopup="dialog"
      aria-controls="mobile-menu"
      :aria-expanded="open"
      @click="emit('toggle-menu')"
    >
      <Menu :size="18" :stroke-width="1.75" aria-hidden="true" />
    </IconButton>

    <span class="text-xs font-medium uppercase tracking-[0.25em] text-brand-text">
      {{ activeLabel }}
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
