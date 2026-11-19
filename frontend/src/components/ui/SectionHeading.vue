<script setup>
defineProps({
  id: {
    type: String,
    default: undefined,
  },
  as: {
    type: String,
    default: 'h2',
  },
})
</script>

<template>
  <component
    :is="as"
    :id="id"
    class="font-heading mb-10 text-[length:var(--text-heading-lg)] font-bold text-primary"
  >
    <slot />
  </component>
</template>
