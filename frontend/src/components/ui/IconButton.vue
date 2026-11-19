<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
})

defineEmits(['click'])
</script>

<template>
  <button
    type="button"
    :aria-label="label"
    class="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md text-secondary transition-colors duration-200 hover:text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>
