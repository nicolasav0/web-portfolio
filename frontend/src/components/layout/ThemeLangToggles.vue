<script setup>
import { Sun, Moon } from 'lucide-vue-next'
import { useLocale } from '@/composables/useLocale'
import { useTheme } from '@/composables/useTheme'

defineProps({
  compact: Boolean,
})

const { content, locale, setLocale } = useLocale()
const { theme, toggleTheme } = useTheme()

function toggleLocale() {
  setLocale(locale.value === 'en' ? 'es' : 'en')
}
</script>

<template>
  <div class="flex items-center" :class="compact ? 'gap-3' : 'gap-5'">
    <button
      type="button"
      :aria-label="content.sections.toggleLanguage"
      :aria-pressed="locale === 'es'"
      class="cursor-pointer rounded-sm font-medium uppercase tracking-[0.25em] text-secondary transition-all duration-300 hover:-translate-y-1 hover:text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
      :class="compact ? 'text-[0.625rem]' : 'text-xs'"
      @click="toggleLocale"
    >
      {{ locale === 'en' ? 'EN' : 'ES' }}
    </button>

    <button
      type="button"
      :aria-label="content.sections.toggleTheme"
      :aria-pressed="theme === 'dark'"
      class="cursor-pointer rounded-sm text-secondary transition-all duration-300 hover:-translate-y-1 hover:text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
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
