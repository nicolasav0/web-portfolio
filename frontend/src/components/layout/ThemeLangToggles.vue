<script setup>
import { Sun } from 'lucide-vue-next'
import { useLocale } from '@/composables/useLocale'

defineProps({
  compact: Boolean,
})

const { locale, setLocale } = useLocale()

function toggleLocale() {
  setLocale(locale.value === 'en' ? 'es' : 'en')
}
</script>

<template>
  <div class="flex items-center" :class="compact ? 'gap-3' : 'gap-5'">
    <button
      class="cursor-pointer font-medium uppercase tracking-[0.25em] transition-all duration-300 hover:-translate-y-1"
      :class="compact ? 'text-[0.625rem]' : 'text-xs'"
      :style="{ color: 'var(--color-text-secondary)' }"
      @click="toggleLocale"
    >
      {{ locale === 'en' ? 'EN' : 'ES' }}
    </button>

    <button
      class="cursor-pointer transition-all duration-300 hover:-translate-y-1"
      :style="{ color: 'var(--color-text-secondary)' }"
    >
      <Sun :size="compact ? 14 : 18" :stroke-width="1.75" />
    </button>
  </div>
</template>
