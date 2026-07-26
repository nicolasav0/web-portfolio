<script setup>
import { socials } from '@/data/socials'

import {
  Github,
  Linkedin,
  Mail,
  X,
  Send,
} from 'lucide-vue-next'

const icons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  x: X,
  telegram: Send,
}

defineProps({
  compact: Boolean,
})
</script>

<template>
  <div class="flex items-center" :class="compact ? 'gap-3' : 'gap-5'">
    <a
      v-for="social in socials"
      :key="social.id"
      :href="social.url"
      :aria-label="social.name"
      target="_blank"
      rel="noopener noreferrer"
      class="transition-all duration-300 hover:-translate-y-1"
      :style="{ color: 'var(--color-text-secondary)' }"
    >
      <component
        :is="icons[social.icon]"
        :size="compact ? 16 : 22"
        :stroke-width="1.75"
      />
    </a>
  </div>
</template>
