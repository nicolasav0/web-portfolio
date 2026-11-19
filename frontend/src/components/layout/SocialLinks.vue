<script setup>
import SocialLink from '@/components/ui/SocialLink.vue'
import { useLocale } from '@/composables/useLocale'

const { content } = useLocale()

defineProps({
  compact: Boolean,
})
</script>

<template>
  <div class="flex items-center" :class="compact ? 'gap-3' : 'gap-5'">
    <SocialLink
      v-for="social in content.socials"
      :key="social.id"
      :social="social"
      :compact="compact"
    />
  </div>
</template>
