<script setup>
import { computed } from 'vue'
import { Github, Linkedin, Mail, X, Send } from 'lucide-vue-next'

const props = defineProps({
  social: {
    type: Object,
    required: true,
  },
  compact: {
    type: Boolean,
    default: false,
  },
})

const icons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  x: X,
  telegram: Send,
}

const icon = computed(() => icons[props.social.icon] ?? Mail)
const isExternal = computed(() => /^https?:/i.test(props.social.url))
</script>

<template>
  <a
    :href="social.url"
    :aria-label="social.name"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    class="rounded-sm text-secondary transition-all duration-300 hover:-translate-y-1 hover:text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
  >
    <component :is="icon" :size="compact ? 16 : 22" :stroke-width="1.75" aria-hidden="true" />
  </a>
</template>
