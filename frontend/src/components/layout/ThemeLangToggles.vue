<script setup>
import { Sun, Moon } from 'lucide-vue-next'
import { useLocale } from '@/composables/useLocale'
import { useTheme } from '@/composables/useTheme'

defineProps({
  compact: Boolean,
})

const { content, locale, setLocale } = useLocale()
const { theme, toggleTheme } = useTheme()
const localeOrder = ['en', 'es', 'fr']

function toggleLocale() {
  const currentIndex = localeOrder.indexOf(locale.value)
  setLocale(localeOrder[(currentIndex + 1) % localeOrder.length])
}
</script>

<template>
  <div class="flex items-center" :class="compact ? 'gap-3' : 'gap-5'">
    <button
      type="button"
      :aria-label="`${content.sections.toggleLanguage}: ${locale.toUpperCase()}`"
      class="inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-sm px-2 font-medium uppercase tracking-[0.25em] text-secondary transition-colors duration-200 hover:text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
      :class="compact ? 'text-[0.625rem]' : 'text-xs'"
      @click="toggleLocale"
    >
      {{ locale.toUpperCase() }}
    </button>

    <button
      type="button"
      :aria-label="content.sections.toggleTheme"
      :aria-pressed="theme === 'dark'"
      class="inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-sm text-secondary transition-colors duration-200 hover:text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
      @click="toggleTheme"
    >
      <component
        :is="theme === 'dark' ? Sun : Moon"
        :size="compact ? 14 : 18"
        :stroke-width="1.75"
        aria-hidden="true"
      />
    </button>
  </div>
</template>
